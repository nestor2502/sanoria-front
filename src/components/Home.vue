<template>
  <div>
    <h1>Nueva ventana</h1>
    <button @click="navega('/prueba')">
      Test
    </button>
  </div>
</template>


<script>
import router from '../router'



export default {
  name: 'Home',
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
