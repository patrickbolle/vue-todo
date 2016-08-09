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
  background-color: rgb(237, 99, 99);
}

p, h1, h2, h3, h4, h5, h6, input {
  font-family: 'Open Sans', sans-serif !important;
}

p {
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700 !important;
}
input {
  font-weight: 700 !important;
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

.taskInput {
  height: 31px !important;
  border: 1px solid rgba(211, 214, 219, 0) !important;
  box-shadow: none !important;
}

.input, .textarea, .addTask {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: white;
    border: 1px solid #f4f4f4;
    border-radius: none !important;
    color: #222324;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 42px;
    letter-spacing: 0px;
    height: 71px;
    justify-content: flex-start;
    line-height: 77px;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    vertical-align: top;
    max-width: 100%;
    width: 100%;
}

.navContent {
  width: 100% !important;
  margin: 0px auto;
}
</style>
