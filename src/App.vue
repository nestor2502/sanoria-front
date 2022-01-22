<template>
  <div class="wrapper" id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <Header  :key="$route.fullPath+ '-H'" />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
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
body {
  overflow-x: hidden;
}
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

.slide-enter-active,
.slide-leave-active{
  transition: opacity 0.5s, transform 0.5s ;
}
.slide-enter,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}

</style>
