<template>
    <!--div style="width: 25%">
      <ul class="list-group">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
    </div-->
    <div></div>
</template>


<script>
import router from '../router'



export default {
  name: 'SideBar',
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

</style>
