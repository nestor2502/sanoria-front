<template>
  <nav class="navbar">
    <div class="container-fluid">
      <Slide class="navbar-brand">
        <a id="home" href="#">
          <span>Home</span>
        </a>
      </Slide>
      <a class="navbar-brand" href="#">
        <span style="color:#acb549">Sano</span>
        <span style="color:#000000">ria</span>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">asasa</a>
          </li>
        </ul>
      </div>
      <form class="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ">
          <div class="input-group col-md-4">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline" type="button"><i class="fa fa-search"></i></button>
          </div>
        </form>
      <form class="d-flex">
        <input class="form-control me-2 transparent-input" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-custom" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import router from '../router'
import {Slide} from 'vue-burger-menu'
export default {
  name: 'SideBar',
  props: {
    msg: String
  },
  components: {Slide},
  methods: {
    navega: function (route){
      router.push(route)
        .catch(() => {})
    }
  }
}
</script>

<style>
@font-face {
  font-family: Ananias;
  src: url(../assets/font-family/Ananias.ttf);
}

.navbar-brand {
  font-size: x-large;
  font-family: Ananias;
}

.btn-outline-custom {
  color: #abb545;
  border-color: #abb545;
}


.btn-outline-custom:hover {
  color: #fff;
  background-color: #abb545;
  border-color: #abb545;
}
.bm-burger-button {
  cursor: pointer;
  height: 25px;
  left: 20px;
  position: absolute;
  top: 30px;
  width: 30px;
}

div:hover .bm-burger-button {
  color: #abb545 !important;
}

.bm-burger-bars {
  background-color: #abb545;
}
.line-style {
  position: absolute;
  height: 11%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #7c746d;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #f49839; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.bm-item-list {
  background: #f49839;
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>