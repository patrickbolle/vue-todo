<template lang="html" name="SingleTask">
  <div class="card is-fullwidth" :task="task">
    <header class="card-header">
      <div class="card-header-title">
        <!--
        <input
          type="checkbox"
          v-model="checkedStatus"
        >
        {{checkedStatus ? "yes" : "no"}}
        -->
        <form>
          <input class="input is-medium taskInput" v-model="title" type="text" value="{{ task.title }}">
          <input type="submit" v-on:click="edit(task.id)" style="display:none"/>
        </form>
      </div>
      <a v-on:click="remove(task.id)" class="card-header-icon">
        <i class="fa fa-trash"></i>
      </a>
    </header>
  </div>
  <br>
</template>

<script>
export default {
  props: ['task'],
  data () {
    return {
      title: '',
      checkedStatus: false,
    }
  },
  watch: {
    checkedStatus (val, oldVal){
      console.log(val)
      console.log(oldVal)
      console.log(id)
      this.$http.put('http://localhost:8090/api/tasks/' + id, {
        checked: val
      }).then(response => {
        console.log(response)
      })
    }
  },
  methods: {
    remove (id) {
      this.$http.delete('http://localhost:8090/api/tasks/' + id).then(response => {
      })
    },
    edit (id) {
      if (this.title !== '') {
        console.log(this.title)
        this.$http.put('http://localhost:8090/api/tasks/' + id, {
          title: this.title
        }).then(response => {
          console.log(response)
        })
      } else {
        console.log('Please write a title')
      }
    }
  }
}
</script>

<style lang="css">

</style>
