<template>
  <div align="center" class="my-5">
    <a href="#"><img src="../assets/404-2.jpg" @click="goLogin"/></a>
  </div>
</template>

<script>
  import router from '../router'
  export default {
      methods: {
        goLogin: function() {
          router.push('/ui/login').catch(()=>{});
        }
      }
  }
</script>
<style>
img {
 max-width: 100%;
 max-height: 100%;
}
.my-5 {
 height: 550px;
 width: 100%;
}
</style>
