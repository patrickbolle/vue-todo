const express = require('express')
const r = require('rethinkdbdash')()
const bodyParser = require('body-parser')
const webpack = require('webpack')
const config = require('./webpack.dev.conf.js')
const _ = require('lodash')
const sockio = require("socket.io");

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

var io = sockio.listen(app.listen(8099), {log: false});
console.log("Server started on port " + 8099);

// Set socket.io listeners.
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

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
    io.emit('taskInsert', result);
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
        io.emit('taskDelete', req.params.id);
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
