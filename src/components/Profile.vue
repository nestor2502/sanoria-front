<template>
<div class="row mt-3">
  <div class="col-md-4 mb-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          <img src="https://ui-avatars.com/api/?name=Juan Lugo&background=f49839&size=128&rounded=true&color=ffffff">
          <div class="mt-3">
            <h4>Juan García Lugo</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-8">
    <div class="card mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            Juan García Lugo
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Gender</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            Male
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Birthday</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            05/01/2000
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">height</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            168 cm
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Weight</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            65 kg
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            juanlugo@ciencias.unam.mx
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Password</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <input id="user-password" v-if="showPassword" type="text" class="input text-secondary" v-model="password" disabled/>
            <input id="user-password" v-else type="password" class="input text-secondary" v-model="password" disabled>
			<i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" @click="toggleShow"></i>
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Allergies</h6>
          </div>
          <div class="col-sm-9 text-secondary allergies">
			<li>Dairy</li>
			<li>Egg</li>
			<li>Fish</li>
			<li>Gluten</li>
			<li>Wheat</li>
			<li>Mustard</li>
			<li>Peanut</li>
			<li>Shellfish</li>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router'

export default {
  name: 'Profile',
  props: {
    msg: String
  },
  data() {
    return {
      showPassword: false,
      password: "algo"
    };
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
    navega: function (route){
      router.push(route)
        .catch(() => {})
    },
	toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style scoped>
  @import url('../assets/styles/Profile.css');
</style>