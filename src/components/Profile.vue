<template>
<div id="profile" class="row mt-3">
  <div class="col-md-4 mb-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-column align-items-center text-center">
          <img :src="'https://ui-avatars.com/api/?name='+user.name+'&background=f49839&size=128&rounded=true&color=ffffff'">
          <div class="mt-3">
            <h4>{{user.name}}</h4>
            <button type="button" class="btn btn-sm btn-update" @click="navega('/profile-edit')">Edit profile &nbsp;<i class="far fa-edit"></i></button>
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
            {{user.name}}
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Gender</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{user.gender}}
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Birthday</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{user.birth}}
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Height</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{user.height}} cm
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Weight</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{user.weight}} kg
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            {{user.email}}
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-2">
            <h6 class="mb-0">Allergies</h6>
          </div>
          <div class="col-sm-9 text-secondary allergies">
            <li v-for="allergie in user.allergies" :key="allergie.id">
              {{allergie.name}}
            </li>
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
import storage from "../storage"

export default {
  name: 'Profile',
  props: {
    msg: String
  },
  created() {
    this.user = storage.getStorage('user')
  },
  data() {
    return {
      user: {},
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