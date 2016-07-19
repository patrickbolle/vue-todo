<template lang="html">
  <div class="has-text-centered">
    <form>
      <!-- form input control -->
      <h4 class="subtitle is-4">Insert A Task <small></small></h4>
      <p class="control">
        <input class="input" v-model="title" type="text" placeholder="Task Name">
      </p>
      <button class="button is-primary" v-on:click="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskNew',

  data () {
    return {
      title: ''
    }
  },

  methods: {
    submit () {
      this.$http.post('http://localhost:8090/api/tasks', {
        title: this.title
      }).then(response => {
        this.$http.get('http://localhost:8090/api/tasks').then(response => {
          this.tasks = response.data
        })
      })
      this.title = ''
    }
  }
}
</script>

<style lang="css">
</style>
