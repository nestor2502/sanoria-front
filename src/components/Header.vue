<template>
  <header class="border-bottom bg-white" :key="$route.fullPath">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="utensils" viewBox="0 0 544 512">
      <path fill="#ffffff" d="M288 157.5c0-30.5-12.9-97.8-15.6-111.7C267.5 20.1 244.1 0 210.6 0c-11.4 0-23.1 2.4-33.3 7.8C167.3 2.5 155.5 0 144 0c-11.5 0-23.3 2.5-33.3 7.8C100.6 2.4 88.8 0 77.4 0 44.1 0 20.5 19.9 15.6 45.8 12.9 59.6 0 126.9 0 157.5c0 52.7 28.2 94.8 69.8 116.7L59.6 454.9c-1.8 31 23.1 57.1 54.4 57.1h60c31.3 0 56.2-26.1 54.4-57.1l-10.2-180.8c41.4-21.7 69.8-63.8 69.8-116.6zm-119.7 83.6l12.2 216.5c.2 3.4-2.7 6.4-6.5 6.4h-60c-3.7 0-6.7-2.9-6.5-6.4l12.2-216.5C77.3 233 48 201.3 48 157.5c0-27.6 14.8-102.7 14.8-102.7 1.6-9.2 28.3-9 29.5.2v113.7c.9 10.6 28.2 10.8 29.5.2l7.4-114.1c1.6-9 27.9-9 29.5 0l7.4 114.1c1.3 10.6 28.6 10.4 29.5-.2V55c1.2-9.2 27.9-9.4 29.5-.2 0 0 14.8 75.1 14.8 102.7.1 43.6-29 75.4-71.6 83.6zm221.2 69.5l-13.3 142.5c-2.9 31.6 22.7 58.9 55.8 58.9h56c30.9 0 56-24.2 56-54V54c0-29.8-25.1-54-56-54-71.8 0-168 83-168 181.7 0 60.4 35 101.2 69.5 128.9zM368 181.7C368 109.1 443.4 48 488 48c4.3 0 8 2.8 8 6v404c0 3.3-3.7 6-8 6h-56c-4.6 0-8.3-3-8-6.4l15.8-169.5c-39.6-27-71.8-59-71.8-106.4z" stroke="white"/>
      </symbol>
      <symbol id="sign-out-alt" viewBox="0 0 544 512">
        <path fill="#ffffff" d="M180 448H96c-53 0-96-43-96-96V160c0-53 43-96 96-96h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H96c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm117.9-303.1l77.6 71.1H184c-13.3 0-24 10.7-24 24v32c0 13.3 10.7 24 24 24h191.5l-77.6 71.1c-10.1 9.2-10.4 25-.8 34.7l21.9 21.9c9.3 9.3 24.5 9.4 33.9.1l152-150.8c9.5-9.4 9.5-24.7 0-34.1L353 88.3c-9.4-9.3-24.5-9.3-33.9.1l-21.9 21.9c-9.7 9.6-9.3 25.4.7 34.6z"/>
      </symbol>
    </svg>
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <div class="col-12 col-lg-auto justify-content-start" id="dismiss">
            <SideMenu v-if="!isRegister" noOverlay width="280" id="sidebar" :closeOnNavigation="true"
              @openMenu="onOverlay"
              @closeMenu="offOverlay">
                <a id="profile" class="align-items-center pointer" @click="navega('/profile', false)">
                  <i class="far fa-user"></i>
                  <span>Profile</span>
                </a>
                <a id="my-scheme" class="align-items-center pointer"  @click="navega('/scheme', false)">
                  <svg width="20" height="20" style="color: white"><use xlink:href="#utensils"/></svg>
                  <span>My scheme</span>
                </a>
                <a id="my-tracking" class="align-items-center pointer"  @click="navega('/tracking', false)">
                  <i class="far fa-calendar-alt"></i>
                  <span>My tracking</span>
                </a>
                <a v-if="isLogged" id="sign-out" class="align-items-center pointer" @click="navega('/home', true)">
                    <svg width="20" height="20" style="color: white"><use xlink:href="#sign-out-alt"/></svg>
                    <span>Sign out</span>
                </a>
            </SideMenu>
            <!--SideMenu/-->
        </div>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center justify-content-center mb-md-0">
          <li>
            <a class="nav-link navbar-brand" @click="navega('/', false)" type="button">
              <span style="color:#acb549">Sano</span>
              <span style="color:#000000">ria</span>
            </a>
          </li>
        </ul>
        
        <div v-if="!isRegister" class="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" style="background-color: transparent;">
          <div id="" class="input-group col-md-4">
            <button class="btn btn-search align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#advanced-search" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-plus"></i>
            </button>
            <input @keyup.enter="advancedSearch()" type="text" class="form-control" placeholder="Search..." aria-label="Search" v-model="search">
            <button class="btn btn-search" type="button" @click="advancedSearch()"><i class="fa fa-search"></i></button>
          </div>
        </div>
        <div class="collapse p-2" id="advanced-search">
          <div class="row">
            <div class="col-sm-4">
              <select class="form-select" v-model="allergie">
                <option v-bind:value="''" selected>Allergie</option>
                <option v-bind:value="'celery-free'">Celery</option>
                <option v-bind:value="'crustacean-free'">Crustacean</option>
                <option v-bind:value="'dairy-free'">Dairy</option>
                <option v-bind:value="'egg-free'">Egg</option>
                <option v-bind:value="'fish-free'">Fish</option>
                <option v-bind:value="'gluten-free'">Gluten</option>
                <option v-bind:value="'lupine-free'">Lupine</option>
                <option v-bind:value="'mustard-free'">Mustard</option>
                <option v-bind:value="'peanut-free'">Peanut</option>
                <option v-bind:value="'sesame-free'">Sesame</option>
                <option v-bind:value="'shellfish-free'">Shellfish</option>
                <option v-bind:value="'soy-free'">Soy</option>
                <option v-bind:value="'tree-nut-free'">TreeNut</option>
              </select>
            </div>
            <div class="col-sm-4">
              <select class="form-select" v-model="diet">
                <option v-bind:value="''" selected>Diet</option>
                <option v-bind:value="'balanced'">Balanced</option>
                <option v-bind:value="'high-fiber'">High fiber</option>
                <option v-bind:value="'high-protein'">High protein</option>
                <option v-bind:value="'low-carb'">Low carb</option>
                <option v-bind:value="'low-fat'">Low fat</option>
              </select>
            </div>
            <div class="col-sm-4">
              <select class="form-select" v-model="mealType">
                <option v-bind:value="''">Meal type</option>
                <option v-bind:value="'breakfast'">Breakfast</option>
                <option v-bind:value="'dinner'">Dinner</option>
                <option v-bind:value="'lunch'">Lunch</option>
                <option v-bind:value="'teatime'">Tea time</option>
              </select>
            </div>
          </div>
        </div>
        <div v-if="isLogged" class="d-flex align-items-center">
          <a href="/profile" class="d-block link-dark text-decoration-none" id="dropdownUser1" aria-expanded="false">
            <img :src="'https://ui-avatars.com/api/?name='+user.name+'&background=f49839&size=128&rounded=true&color=ffffff'" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
        </div>
        <div v-if="!isLogged && !isRegister" class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-custom me-2" @click="navega('/login', false)">Login</button>
          <button type="button" class="btn btn-custom" @click="navega('/signup', false)">Sign-up</button>
        </div>
      </div>
    </div>
    <!-- Button trigger modal -->

  </header>
</template>

<script>
//import axios from 'axios';
import router from '../router'
//import {Slide} from 'vue-burger-menu'
import storage from "../storage"
import SideMenu from './SideMenu.vue'

export default {
  created() {
    this.isRegister = (this.$router.currentRoute.path.includes("/login") || this.$router.currentRoute.path.includes("/signup"))
    this.user = storage.getStorage('user')
  },
  name: 'Header',
  props: {
    msg: String,
  },
  data(){
    return{
      search: '',
      isRegister: false,
      user: null,
      get isLogged() {
        return storage.getStorage('user') != null;
      },
      allergie: '',
      diet: '',
      mealType: ''
    }
  },
  components: {SideMenu},
  methods: {
    navega: function (route, exit){
      this.offOverlay()
      if(exit) storage.removeStorage('user')
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
    getPathVal(){
      return this.$router.currentRoute.path.includes("/login")
    },
    advancedSearch() {
      if (this.search.trim() == "") {
        this.search = ""
        return
      }
      let searchquery = "/search?q=" +this.search
      if (this.allergie != "")
        searchquery += "&health="+ this.allergie
      if (this.diet != "")
        searchquery += "&schema="+ this.diet
      if (this.mealType != "")
        searchquery += "&mealType="+ this.mealType
      this.navega(searchquery, false)
    }
  }
}
</script>

<style>
  @import url(../assets/styles/Header.css);
  .pointer{
    cursor: pointer;
  }
</style>
