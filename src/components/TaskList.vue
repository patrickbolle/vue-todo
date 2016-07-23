<template lang="html" name="TaskList">
  <div>
    <div class="divider"></div>
    <div v-for="task in tasks" :task="task">
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
export default {
  name: 'TaskList',
  props: ['tasks'],

  methods: {
    /**
    delete (id) {
      this.$http.delete('http://localhost:8090/api/tasks/' + id).then(response => {
        this.$set('tasks', response.data)
      })
    }
    **/
  }
}
</script>

<style lang="css">
</style>
