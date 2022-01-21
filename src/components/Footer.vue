<template>
<footer class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-top">
  <div class="nav col-12 col-md-center mb-2 align-items-end justify-content-center mb-md-0"> 
      <div class="socials">
        <li><a href="https://www.facebook.com/sanoriaApp/" target="_blank" class="nav-link px-2 link-dark"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://twitter.com/SanoriaOficial" target="_blank" class="nav-link px-2 link-dark"><i class="fa fa-twitter"></i></a></li>
        <li><a href="mailto:sanoria.oficial@gmail.com" target="_blank" class="nav-link px-2 link-dark"><i class="fa fa-envelope"></i></a></li>
        <li><a href="https://www.instagram.com/sanoria_oficial/" target="_blank" class="nav-link px-2 link-dark"><i class="fa fa-instagram"></i></a></li>
      </div>
    <p>copyright &copy; All rights reserved</p>
    <a id="icon-footer" href=""><img src="../assets/img/Sanoria.png" height="45" width="80"></a> 
  </div>
</footer>
</template>

<script>
import router from '../router'

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods: {
    navega: function (route){
      router.push(route)
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
footer{
  position: absolute;
  background: #fff;
  height: auto;
  width: 100vw;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
  color: #7c746d;
}

.socials{
  list-style: none;
  display: flex;
  padding-bottom: 6px;
}

.socials a{
  text-decoration: none;
  transition: color .4s ease;
}

.socials a:hover {
  border-color: #f49839;
  transition: color .4s ease;
}

.socials a i{
  font-size: 1.1rem;
  width: 20px;
  transition: color .4s ease;
  color: #7c746d;
}

.socials a:hover i{
  color: #f49839;
}

#icon-footer {
  padding-bottom: 10px;
  padding-left: 30px;
}
</style>