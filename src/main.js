import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
// Import components
import TaskView from './components/TaskView'
import Tasks from './components/Tasks'

Vue.use(Router)
Vue.use(Resource)

const router = new Router({
  history: true,
  hashbang: false
})

router.map({
  '/tasks': {
    component: Tasks
  },

  '/task/:id': {
    component: TaskView
  }
})

router.redirect({
  '*': '/tasks'
})

router.start(App, '#app')
