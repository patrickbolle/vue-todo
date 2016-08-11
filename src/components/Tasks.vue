<template lang="html" name="Tasks">
  <div>
    <task-new></task-new>
    <hr>
    <task-list :tasks="tasks"></task-list>
  </div>
</template>

<script>
import TaskNew from './TaskNew'
import TaskList from './TaskList'
const _ = require('lodash')
var socket = io.connect('http://localhost:8099');

export default {
  name: 'Tasks',
  data: function () {
    return {
      tasks: []
    }
  },
  created () {
  },
  ready () {
    this.$http.get('http://localhost:8090/api/tasks').then(response => {
       this.$set('tasks', response.data)
    })
    var that = this
    socket.on('taskInsert', function(result){
      that.tasks.push(result)
    })
    var that = this
    socket.on('taskDelete', function(id){
      that.tasks = _.reject(that.tasks, {id: id})
    })
  },
  methods: {},
  components: {
    TaskNew,
    TaskList
  }
}
</script>

<style lang="css">
</style>
