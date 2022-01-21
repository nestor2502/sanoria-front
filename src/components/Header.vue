<template>
  <header class="border-bottom bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="utensils" viewBox="0 0 544 512">
      <path fill="#ffffff" d="M288 157.5c0-30.5-12.9-97.8-15.6-111.7C267.5 20.1 244.1 0 210.6 0c-11.4 0-23.1 2.4-33.3 7.8C167.3 2.5 155.5 0 144 0c-11.5 0-23.3 2.5-33.3 7.8C100.6 2.4 88.8 0 77.4 0 44.1 0 20.5 19.9 15.6 45.8 12.9 59.6 0 126.9 0 157.5c0 52.7 28.2 94.8 69.8 116.7L59.6 454.9c-1.8 31 23.1 57.1 54.4 57.1h60c31.3 0 56.2-26.1 54.4-57.1l-10.2-180.8c41.4-21.7 69.8-63.8 69.8-116.6zm-119.7 83.6l12.2 216.5c.2 3.4-2.7 6.4-6.5 6.4h-60c-3.7 0-6.7-2.9-6.5-6.4l12.2-216.5C77.3 233 48 201.3 48 157.5c0-27.6 14.8-102.7 14.8-102.7 1.6-9.2 28.3-9 29.5.2v113.7c.9 10.6 28.2 10.8 29.5.2l7.4-114.1c1.6-9 27.9-9 29.5 0l7.4 114.1c1.3 10.6 28.6 10.4 29.5-.2V55c1.2-9.2 27.9-9.4 29.5-.2 0 0 14.8 75.1 14.8 102.7.1 43.6-29 75.4-71.6 83.6zm221.2 69.5l-13.3 142.5c-2.9 31.6 22.7 58.9 55.8 58.9h56c30.9 0 56-24.2 56-54V54c0-29.8-25.1-54-56-54-71.8 0-168 83-168 181.7 0 60.4 35 101.2 69.5 128.9zM368 181.7C368 109.1 443.4 48 488 48c4.3 0 8 2.8 8 6v404c0 3.3-3.7 6-8 6h-56c-4.6 0-8.3-3-8-6.4l15.8-169.5c-39.6-27-71.8-59-71.8-106.4z" stroke="white"/>
      </symbol>
    </svg>
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div class="col-12 col-lg-auto justify-content-start" id="dismiss">
            <Slide noOverlay width="280" id="sidebar"
              @openMenu="onOverlay"
              @closeMenu="offOverlay">
                <a id="profile" class="align-items-center" href="#">
                  <i class="far fa-user"></i>
                  <span>Profile</span>
                </a>
                <a id="favorites" class="align-items-center" href="#">
                  <i class="far fa-heart"></i>
                  <span>Favorites</span>
                </a>
                <a id="my-scheme" class="align-items-center" href="/scheme">
                  <svg width="20" height="20" style="color: white"><use xlink:href="#utensils"/></svg>
                  <span>My scheme</span>
                </a>
                <a id="my-tracking" class="align-items-center" href="/tracking">
                  <i class="far fa-calendar-alt"></i>
                  <span>My tracking</span>
                </a>
            </Slide>
        </div>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
          <li>
            <a class="nav-link navbar-brand" @click="navega('/')" type="button">
              <span style="color:#acb549">Sano</span>
              <span style="color:#000000">ria</span>
            </a>
          </li>
        </ul>
        <form class="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" style="background-color: transparent;">
          <div class="input-group col-md-4">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search" v-model="search">
            <button class="btn btn-search" type="button" @click="navega('/search?q='+search)"><i class="fa fa-search"></i></button>
          </div>
        </form>
        <div v-if="true" class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-custom me-2" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="navega('/login')">Login</button>
          <button type="button" class="btn btn-custom" @click="navega('/signup')">Sign-up</button>
        </div>
        <div v-if="false" class="d-flex align-items-center">
          <a href="#" class="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->

  </header>
</template>

<script>
import axios from 'axios';
import router from '../router'
import {Slide} from 'vue-burger-menu'

export default {
  created() {
    //console.log(this.$router.currentRoute.path); // path is /post
  },
  name: 'Header',
  props: {
    msg: String,
  },
  data(){
    return{
      search: ''
    }
  },
  components: {Slide},
  methods: {
    navega: function (route){
      router.push(route)
        .catch(() => {})
    },
    openRegistroPage: function() {
      router.push({'name':'Registro'});
    },
    onOverlay: function() {
      document.getElementById("overlay").style.display = "block";
    },
    offOverlay: function() {
      document.getElementById("overlay").style.display = "none";
    },
    findRecipes:function (){
      console.log("entra en esta función")
      axios.get('https://sanoria-api.herokuapp.com/recipe/search?recipeName=chicken')
          .then( result => {
            console.log("result")
            console.log(result)
          }).catch(e => console.log(e))
    }
  }
}
</script>

<style>
  @import url(../assets/styles/Header.css);
</style>
