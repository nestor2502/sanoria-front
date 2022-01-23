<template>
  <div class="wrapper" id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <Header  :key="$route.fullPath+ '-H'" />
    <transition name="slide" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <Footer/>
    <!-- Error Modal -->
    <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
            <div style="font-size: 1.5rem; padding: 2rem;">
                <img src="./assets/img/error.png" alt="" style="width:30%;padding-bottom: 2rem">
                <br>
                Ooops! 
                <br>
                An error occurred
            </div>
        </div>
        <div class="modal-footer modal-footer-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
        </div>
        </div>
    </div>
    </div>
    <!-- Error Modal -->
    <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
            <div style="font-size: 1.5rem; padding: 2rem;">
                <img src="./assets/img/check.png" alt="" style="width:30%;padding-bottom: 2rem">
                <br>
                Saved successfully!
            </div>
        </div>
        <div class="modal-footer modal-footer-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
        </div>
        </div>
    </div>
    </div>
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

.btn-confirm-modal {
  color: #f49839;
  border: 1px solid #f7b36e;
  background-color: #f7b36e;
  color: #fff;
}
  
.btn-confirm-modal:hover {
  color: #fff;
  background-color: #f49839;
}

.btn-cancel-modal {
  color: #f49839;
  border: 1px solid #f49839;
  background-color: #f7b36e;
  color: #fff;
}
  
.btn-cancel-modal:hover {
  color: #fff;
  background-color: #f49839;
}

.modal-footer-center{
  display: block;
}


</style>
