<template>
  <div>
    <Navbar></Navbar>
      <div class="container">
        <router-view class="view">
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";

body {
  background: url(./assets/congruent_pentagon.png) ;
}

</style>
