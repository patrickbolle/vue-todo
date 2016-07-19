<template lang="html">
  <div>
    <task-new></task-new>
    <h4>All Tasks <small></small></h4>
    <div class="divider"></div>
    <div v-for="task in tasks">
      <div class="card is-fullwidth">
        <header class="card-header">
          <p class="card-header-title">
            {{ task.title }}
          </p>
          <a class="card-header-icon">
            <i class="fa fa-angle-down"></i>
          </a>
        </header>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
        <footer class="card-footer">
          <a class="card-footer-item">Save</a>
          <a class="card-footer-item">Edit</a>
          <a class="card-footer-item">Delete</a>
        </footer>
      </div>
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
  }
}
</script>

<style lang="css">
</style>
