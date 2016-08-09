<template lang="html" name="Tasks">
  <div>
    <div class="columns">
      <div class="column">
        <add-today-task></add-today-task>
      </div>
      <div class="column">
        <add-tomorrow-task></add-tomorrow-task>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <task-list :tasks="todayTasks"></task-list>
      </div>
      <div class="column">
        <task-list :tasks="tomorrowTasks"></task-list>
      </div>
    </div>
  </div>
</template>

<script>
import addTodayTask from './addTodayTask'
import addTomorrowTask from './addTomorrowTask'
import TaskList from './TaskList'

const _ = require('lodash')
var socket = io.connect('http://localhost:8099');

export default {
  name: 'Tasks',
  data: function () {
    return {
      todayTasks: [],
      tomorrowTasks: []
    }
  },
  created () {
  },
  ready () {
    this.$http.get('http://localhost:8090/api/todayTasks').then(response => {
       this.$set('todayTasks', response.data)
    })
    this.$http.get('http://localhost:8090/api/tomorrowTasks').then(response => {
       this.$set('tomorrowTasks', response.data)
    })
    var that = this
    socket.on('taskInsert', function(result){
      that.todayTasks.push(result)
    })
    var that = this
    socket.on('taskDelete', function(id){
      that.todayTasks = _.reject(that.todayTasks, {id: id})
    })
  },
  methods: {},
  components: {
    addTodayTask,
    addTomorrowTask,
    TaskList
  }
}
</script>

<style lang="css">
</style>
