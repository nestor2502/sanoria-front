<template>
  <div class="wrapper" id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
<<<<<<< HEAD
body {
  overflow-x: hidden;
}
=======
body{
  overflow-x: hidden;
}

>>>>>>> developer
router-view {
  background-color: lightgrey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
