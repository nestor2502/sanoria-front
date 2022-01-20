<template>
<div class="py-5">
  <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/food.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Ciruela</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/bg5.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow">
          <img src="../assets/img/huevos.jpg" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'Search',
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
  @import url(../assets/styles/Search.css);
</style>