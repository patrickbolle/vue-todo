<template lang="html">
  <div>
    <task-new></task-new>
    <div class="divider"></div>
    <div v-for="task in tasks">
      <div class="card is-fullwidth">
        <header class="card-header">
          <p class="card-header-title">
            {{ task.title }}
          </p>
          <a v-on:click="delete(task.id)" class="card-header-icon">
            <i class="fa fa-trash"></i>
          </a>
        </header>
      </div>
    <br>
    </li>
  </div>
</template>

<script>
import TaskNew from './TaskNew'

export default {
  components: {
    TaskNew
  },

  data () {
    return {
      tasks: []
    }
  },

  created () {
    this.$http.get('http://localhost:8090/api/tasks').then(response => {
      this.tasks = response.data
    })
  },

  methods: {
    delete (id) {
      this.$http.delete('http://localhost:8090/api/tasks/' + id).then(response => {
        this.tasks = response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
