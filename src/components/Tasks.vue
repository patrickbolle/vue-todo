<template lang="html" name="Tasks">
  <task-new></task-new>
  <hr>
  <task-list :tasks="tasks"></task-list>
</template>

<script>
import TaskNew from './TaskNew'
import TaskList from './TaskList'
var socket = io.connect('http://localhost:8099');

export default {
  name: 'Tasks',
  data: function () {
    return {
      tasks: []
    }
  },
  created () {
    this.$http.get('http://localhost:8090/api/tasks').then(response => {
       this.$set('tasks', response.data)
    })
  },
  ready () {
    var that = this
    that.socketInsert()
  },
  methods: {
    socketInsert () {
      var that = this
      socket.on('taskInsert', function(result){
        that.tasks.push(result)
        console.log(result)
      })
    }
  },
  components: {
    TaskNew,
    TaskList
  }
}
</script>

<style lang="css">
</style>
