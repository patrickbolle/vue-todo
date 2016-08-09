<template lang="html" name="addTodayTask">
  <div class="has-text-centered">
    <form>
      <!-- form input control -->
      <p class="control">
        <input class="input addTask" v-model="title" type="text" placeholder="Today">
      </p>
      <button class="button is-primary" v-on:click="submit" style="display:none">Submit</button>
    </form>
    <br>
  </div>
</template>

<script>
export default {
  name: 'addTodayTask',

  data () {
    return {
      title: ''
    }
  },

  methods: {
    submit () {
      if (this.title !== '') {
        this.$http.post('http://localhost:8090/api/todayTasks', {
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
