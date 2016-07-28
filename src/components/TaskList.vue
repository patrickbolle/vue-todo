<template lang="html" name="TaskList">
  <div>
    <div class="divider"></div>
    <div v-for="task in tasks" :task="task" transition="expand">
      <single-task :task="task"></single-task>
    </div>
</template>

<script>
import SingleTask from './SingleTask.vue'

export default {
  name: 'TaskList',
  props: ['tasks'],
  components: {
    SingleTask
  }
}
</script>

<style lang="css">
</style>
