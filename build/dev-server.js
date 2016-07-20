const express = require('express')
const r = require('rethinkdbdash')()
const bodyParser = require('body-parser')
const webpack = require('webpack')
const config = require('./webpack.dev.conf.js')
const _ = require('lodash')

const app = express()
const router = express.Router()
const compiler = webpack(config)
const jsonParser = bodyParser.json()

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

//REST API FOR TASKS
//GET - All Tasks
router.get('/tasks', (req, res) => {
  r.table("tasks").orderBy(r.desc('createdAt')).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log("Error:", err)
  })
})

//POST - Create A New Task
router.post('/tasks', jsonParser, (req, res) => {
  const task = {
    'title': req.body.title,
    'createdAt': new Date().toJSON()
  }
  r.table('tasks').insert(task).run().then(result => {
    res.send(result)
    console.log(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

//GET - Individual Task
router.get('/tasks/:id', (req, res) => {
  r.table('tasks').get(req.params.id).run().then(result => {
    res.send(result)
  }).catch(err => {
    console.log('Error:', err)
  })
})

//DELETE - Task
router.delete('/tasks/:id', (req, res) => {
  console.log(req.params.id)
  r.table("tasks").get(req.params.id).delete().run(function(err, result) {
        if (err) throw err;
        console.log(result);
    }
  )
})

app.use('/api', router)
app.listen(8090, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8090')
})
