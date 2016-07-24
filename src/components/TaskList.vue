<template lang="html" name="TaskList">
  <div>
    <div class="divider"></div>
    <div v-for="task in tasks" :task="task" transition="expand">
      <div class="card is-fullwidth">
        <header class="card-header">
          <p class="card-header-title" v-on:click="doSomething">
            {{ task.title }}
          </p>
          <a v-on:click="remove(task.id)" class="card-header-icon">
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
    remove (id) {
      this.$http.delete('http://localhost:8090/api/tasks/' + id).then(response => {
      })
    }
  }
}
</script>

<style lang="css">
</style>
