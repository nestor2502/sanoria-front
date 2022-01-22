<template>
<form id="edit" class="row justify-content-center">
  <div class="col-md-8">
    <div class="card mb-3">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Name</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <input type="text" class="form-control" v-model="username" placeholder="full name"/>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Gender</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <select class="form-select" aria-label="Default select example">
                <option :value="user.gender" selected disabled hidden>{{user.gender}}</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Birthday</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <input type="date" class="form-control" v-model="userbirth"/>
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Height</h6>
          </div>
          <div class="col-sm-9 text-secondary">
              <div class="input-group">
                <input type="number" class="form-control" v-model="userheight"/> 
                <span class="input-group-text">cm</span>
              </div>
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Weight</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <div class="input-group">
              <input type="number" class="form-control" v-model="userweight"/> 
              <span class="input-group-text">kg</span>
            </div>
          </div>
        </div>
        <hr>
		<div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Email</h6>
          </div>
          <div class="col-sm-9 text-secondary">
            <input type="email" class="form-control" :value="user.email"/> 
          </div>
        </div>
		<hr>
		<div class="row">
          <div class="col-sm-3">
            <h6 class="mb-0">Allergies</h6>
          </div>
          <div class="col-sm-9 text-secondary allergies justify-content-center">
            <table v-for="(allergie, index) in userallergies" :key="index">
              <tr>
                <td><input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="userallergies[index]" v-bind:checked="userallergies[index]"></td>
                <td>
                  <label class="form-check-label" for="flexCheckDefault">
                    {{index}}
                  </label>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <hr>
        <div id="btn-save-changes" class="row justify-content-end">
          <div class="col-sm-3">
            <button type="button" class="btn btn-sm btn-save-changes" @click="updateUser"> Saves Changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</template>

<script>
import router from '../router'
import storage from "../storage"
import axios from 'axios';

export default {
  name: 'Profile',
  props: {
    msg: String
  },
  created() {
    this.user = storage.getStorage('user')
    console.log(this.user)
    this.user.allergies.forEach(element => {
        this.userallergies[element.name] = true
    });
    this.username = this.user.name
    this.usergender = this.user.gender
    this.userbirth = this.user.birth
    this.userheight = this.user.height
    this.userweight = this.user.weight
  
  },
  data() {
    return {
      user: {},
      date: "",
      allergies : ["Celery", "Crustacean", "Dairy", "Egg", "Fish", "Gluten", "Lupine", "Mustard", 
                   "Peanut", "Sesame", "Shellfish", "Soy", "Tree Nut", "Wheat"],
      username: null,
      usergender: null,
      userbirth: null,
      userheight: null,
      userweight: null, 
      useremail: null,
      userallergies: {
        "Celery": false,
        "Crustacean": false,
        "Dairy": false,
        "Egg": false,
        "Fish": false,
        "Gluten": false,
        "Lupine": false,
        "Mustard": false,
        "Peanut": false,
        "Sesame": false,
        "Shellfish": false,
        "Soy": false,
        "Tree Nut": false,
        "Wheat": false,
    }
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
    updateUser(){
      let userToUpdate = {}
      if(this.username) userToUpdate.name = this.username
      if(this.useremail) userToUpdate.email = this.useremail
      if(this.usergender) userToUpdate.gender = this.usergender
      if(this.userbirth) userToUpdate.birth = this.userbirth
      if(this.userweight) userToUpdate.weight = this.userweight
      if(this.userheight) userToUpdate.height = this.userheight
      userToUpdate.allergies = [];
      Object.keys(this.userallergies).forEach(key => {
        if(this.userallergies[key]){
          userToUpdate.allergies.push(key)
        } 
      })
      axios.patch('https://sanoria-api.herokuapp.com/user/'+this.user.id, userToUpdate)
            .then((res) => {
				if (res.status === 200) {
          storage.setStorage('user', res.data)
          this.navega("/profile")
				} else {
					console.log("hubo un error")
				}
			}).catch((err) => console.log(err))

    } 
  }
}
</script>

<style scoped>
  @import url('../assets/styles/ProfileEdit.css');
</style>