<template lang="html">
  <div class="has-text-centered">
    <form>
      <h4 class="title is-4">Insert A Task <small></small></h4>
      <p class="control">
        <input class="input" v-model="title" type="text" placeholder="Task Name">
      </p>
      <button class="button is-primary" v-on:click="submit">Submit</button>
    </form>
    <br>
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
      if (this.title !== '') {
        this.$http.post('http://localhost:8090/api/tasks', {
          title: this.title
        }).then(response => {
          console.log(response)
        })
        this.title = ''
      } else {
        console.log('Please write a title')
      }
    }
  }
}
</script>

<style lang="css">
</style>
