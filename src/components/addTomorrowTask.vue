<template lang="html" name="addTomorrowTask">
  <div class="has-text-centered">
    <form>
      <!-- form input control -->
      <p class="control">
        <input class="input addTask" v-model="title" type="text" placeholder="Tomorrow">
      </p>
      <button class="button is-primary" v-on:click="submit" style="display:none">Submit</button>
    </form>
    <br>
  </div>
</template>

<script>
export default {
  name: 'addTomorrowTask',

  data () {
    return {
      title: ''
    }
  },

  methods: {
    submit () {
      if (this.title !== '') {
        this.$http.post('http://localhost:8090/api/tomorrowTasks', {
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
