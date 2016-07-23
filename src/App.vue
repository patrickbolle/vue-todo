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

html {
  background: url(./assets/congruent_pentagon.png) ;
}

.container {
  padding-top: 25px;
  width: 60%;
  margin: 0px auto;
}

/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 60px;
  padding: 10px;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
