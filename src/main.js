import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
// Import components
import TaskNew from './components/TaskNew'
import TaskList from './components/TaskList'
import TaskView from './components/TaskView'

Vue.use(Router)
Vue.use(Resource)

const router = new Router()

router.map({
  '/task/new': {
    component: TaskNew
  },

  '/tasks': {
    component: TaskList
  },

  '/task/:id': {
    component: TaskView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/tasks'
})

router.start(App, '#app')
