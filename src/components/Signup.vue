<template>
<div>
    <div v-if="mostrarSignUp" class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Sign up</h2>
                    <!--form  id="form" v-on:button.prevent="procesar()"-->
                    <form  id="form" >
                        <div class="input-group" id="app">
                            <input class="input--style-2" type="text" placeholder="Name"  name="username" v-model="username" required/>
                            
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                  <input @keypress="isNumber($event)" v-model="birth" placeholder="YYYY-MM-DD" type="date" maxlength="10" autofocus="autofocus" required>
                                    <!--input @keypress="isNumber($event)" class="input--style-2 js-datepicker" placeholder="__/__/____" type="email" name="age" maxlength="8" v-model="age"-->
                                </div>
                            </div>
                        </div>
                      
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2 js-datepicker" type="email"  placeholder="E-mail" name="email" v-model="email" required>
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <input class="input--style-2" type="password" placeholder="******" name="password" v-model="password" required>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col text-center" >
                              <button :disabled="habilitaBoton" class="btn btn--radius btn--green" @click="selectRec(2)">Next &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
                              </button>
                              
                            </div>
                       </div>
                        
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div v-if="mostrarInfo" class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Personal Info</h2>
                    <form >
                        <div class="input-group">
                            <input class="input--style-2" type="text" placeholder="Gender(Male or Female)" name="gender" v-model="gender">
                        </div>
     
                        <div class="input-group">
                            <input class="input--style-2" type="number" placeholder="Weight in Kg" name="weight" v-model="weight">
                        </div>
                        <div class="input-group">
                            <input class="input--style-2" type="number" placeholder="Height" name="height" v-model="height">
                        </div>
                        <div class="form-group row">
                            <div class="col text-center" >
                              <button  class="btn btn--radius btn--green" @click="selectView(1)"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Return </button>  
                              
                            </div>
                            <div class="col text-center" >
                               <button :disabled="habilitaBoton2" class="btn btn--radius btn--green" type="button" @click="selectView(3)">Next
                                  &nbsp;&nbsp;<i class="fas fa-arrow-right"></i></button> 
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

        <div v-if="mostrarDiet" class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Diets</h2>
                    
                        <div class="row row-space">
                            <div class="col-2">
                                <div>
                                  <label class="form-check-label" for="flexCheckDefault">High-Fiber</label>
                                  <input class="form-check-input"  type="radio" id="checkboxNoLabel" value="" aria-label="...">      
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        High-Protein
                                    </label>
                                  <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                  <div><label class="form-check-label" for="flexCheckDefault">
                                        Low-Sodium
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        Low-Carb
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div>
                                  <label class="form-check-label" for="flexCheckDefault">Low-Fat</label>
                                  <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">                                    
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        Balanced
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                  <div><label class="form-check-label" for="flexCheckDefault">
                                        No oil added
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        No-sugar
                                    </label>
                                  <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        Pork-free
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        Red meat-free
                                    </label>
                                    <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">                                   
                                </div>
                            </div>
                            <div class="col-2">
                                <div>
                                  <label class="form-check-label" for="flexCheckDefault">
                                        Vegan
                                    </label>
                                  <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                <div><label class="form-check-label" for="flexCheckDefault">
                                        Vegetarian
                                    </label>
                                  <input class="form-check-input" type="radio" id="checkboxNoLabel" value="" aria-label="...">
                                     
                                </div>
                            </div>
                          </div>
                           <div class="form-group row">
                              <div class="col text-center" >
                                <button  class="btn btn--radius btn--green" @click="selectView(2)"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Return </button>
                                
                              </div>
                              <div class="col text-center" >
                                 <button class="btn btn--radius btn--green" type="button" @click="selectView(4)" >
                                  Next &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
                                   </button>
                              </div>
                            </div>           
                </div>
            </div>
        </div>
    </div>
    <div v-if="mostrarAle" class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
        <div class="wrapper wrapper--w960">
            <div class="card card-2">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Allergies</h2>
                    <form >
                        <div class="row row-space">
                            <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Celery</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Celery" aria-label="...">
                                     
                                </div>
                            </div>
                            <div class="col-2">
                                <div>
                                  <label class="form-check-label" for="flexCheckDefault">Crustacean</label>
                                  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Crustacean" aria-label="...">
                                </div>
                            </div>
                            <div class="col-2">
                                <div>
                                  <label class="form-check-label" for="flexCheckDefault">Dairy</label>
                                  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Dairy" aria-label="...">              
                            </div>
                            </div>
                            <div class="col-2">
                              <div>
                                  <label class="form-check-label" for="flexCheckDefault">Egg</label>
                                  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Egg" aria-label="...">
                              </div>
                            </div>  
                            <div class="row row-space">
                              <div class="col-2">
                                    <div>
                                      <label class="form-check-label" for="flexCheckDefault">Fish</label>
                                      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Fish" aria-label="...">
                                      
                                  </div>
                              </div>
                              <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Gluten</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Gluten" aria-label="...">
                                  </div>
                              </div>
                              <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Lupine</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Lupine" aria-label="...">              
                              </div>
                              </div>
                              <div class="col-2">
                                <div>
                                    <label class="form-check-label" for="flexCheckDefault">Mustard</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Mustard" aria-label="...">
                                </div>
                              </div>   
                        </div> 
                        <div class="row row-space">
                              <div class="col-2">
                                    <div>
                                      <label class="form-check-label" for="flexCheckDefault">Peanut</label>
                                      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Peanut" aria-label="...">
                                      
                                  </div>
                              </div>
                              <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Sesame</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Sesame" aria-label="...">
                                  </div>
                              </div>
                              <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Shellfish</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Shellfish" aria-label="...">              
                              </div>
                              </div>
                              <div class="col-2">
                                <div>
                                    <label class="form-check-label" for="flexCheckDefault">Soy</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Soy" aria-label="...">
                                </div>
                              </div>   
                        </div> 
                        <div class="row last-row-space">
                              <div class="col-2" style="margin-right:1rem">
                                    <div>
                                      <label class="form-check-label" for="flexCheckDefault">Tree Nut</label>
                                      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies['Tree Nut']" aria-label="...">
                                      
                                  </div>
                              </div>
                              <div class="col-2">
                                  <div>
                                    <label class="form-check-label" for="flexCheckDefault">Wheat</label>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" v-model="userallergies.Wheat" aria-label="...">
                                  </div>
                              </div>
  
                        </div> 
                        <div class="form-group row">
                              <div class="col text-center" >
                                <button  class="btn btn--radius btn--green" @click="selectView(3)"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Return </button> 
                                
                              </div>
                              <div class="col text-center" >
                                  <button class="btn btn--radius btn--green" type="button" @click="createUser">SIGN UP</button>
                              </div>
                          </div>
                       
                        
                        </div>

                    </form>


                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script scoped>
import storage from "../storage"
import axios from 'axios';
import router from '../router';

  
    export default {


        data() {
            return {
              mostrarSignUp: true,
              mostrarInfo: false,
              mostrarDiet: false,
              mostrarAle: false,
              username: '',
                
              email: '',
              
              birth: '',
              password: '',
              gender:'',
              height:'',
              weight:'',

              userdiets: {
                "High-Fiber": false,
                "High-Protein": false,
                "Low-Sodium": false,
                "Low-Carb": false,
                "Balanced": false,
                "No oil added": false,
                "No-sugar": false,
                "Pork-free": false,
                "Red meat-free": false,
                "Vegan": false,
                "Vegetarian": false,
                
              },
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
              
            }
        },
        computed:{
          habilitaBoton: function() {
            return !this.username || !this.email || !this.birth || !this.password ;
            
          },
       
        habilitaBoton2: function() {
            return !this.gender || !this.weight || !this.height  ;
            
          },
        },
        
        methods: { 
       
          
          
          navega: function (route){
            router.push(route)
              .catch(() => {})
          },
          isNumber: function(evt) {

              evt = (evt) ? evt : window.event;
              var charCode = (evt.which) ? evt.which : evt.keyCode;
              if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
              } else {
                var v = this.input_value;
                     if (v.match(/^\d{2}$/) !== null) {
                this.input_value = v + '/';
                      } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
                          this.input_value = v + '/';
                     }
              }
          },
          openPersonInfo: function() {
            router.push({'name':'PersonInfo'})
          },
          selectView(viewId){
            switch(viewId){
              case 1: 
                this.mostrarSignUp = true;
                this.mostrarInfo = false;
                this.mostrarDiet = false;
                this.mostrarAle = false;
                break;
              case 2: 
                this.mostrarSignUp = false;
                this.mostrarInfo = true;
                this.mostrarDiet = false;
                this.mostrarAle = false;
                break;
              case 3: 
                this.mostrarSignUp = false;
                this.mostrarInfo = false;
                this.mostrarDiet = true;
                this.mostrarAle = false;
                break
              case 4: 
                this.mostrarSignUp = false;
                this.mostrarInfo = false;
                this.mostrarDiet = false;
                this.mostrarAle = true;
                break;
            }
          },
          selectRec(viewId){
            switch(viewId){
              case 1: 
                this.mostrarSignUp = true;
                this.mostrarInfo = false;
                this.mostrarDiet = false;
                this.mostrarAle = false;
                break;
              case 2: 
                this.mostrarSignUp = false;
                this.mostrarInfo = true;
                this.mostrarDiet = false;
                this.mostrarAle = false;
                break;
              case 3: 
                this.mostrarSignUp = false;
                this.mostrarInfo = false;
                this.mostrarDiet = true;
                this.mostrarAle = false;
                break
              case 4: 
                this.mostrarSignUp = false;
                this.mostrarInfo = false;
                this.mostrarDiet = false;
                this.mostrarAle = true;
                break;
            }
          },
          createUser(){

            let finalAllergies = [];
            let llaves = Object.keys(this.userallergies)
            llaves.forEach(allergie => {
              if(this.userallergies[allergie] == true){
                finalAllergies.push(allergie)
              }
            })
            let userToCreate= {
              name: this.username,
              email: this.email,
              password: this.password,
              gender: this.gender,
              birth: this.birth,
              weight: this.weight,
              height: this.height,
              allergies: finalAllergies
            }
            console.log("userToCreate")
            console.log(userToCreate)
            axios.post('https://sanoria-api.herokuapp.com/user', userToCreate)
              .then((res) => {
                if (res.status === 201) {
                  storage.setStorage('user', res.data)
                  console.log(res.data)
                  this.navega("/")
                } else {
                  console.log("hubo un error")
                }
              }).catch((err) => console.log(err))

          }
        },
    }
</script>

<style scoped>

/* ==========================================================================
   #FONT
   ========================================================================== */
.font-robo {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
}

/* ==========================================================================
   #GRID
   ========================================================================== */
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.row-space {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.last-row-space {
  -webkit-box-pack: justify;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
}
/* Nos dice cuantas columnas en Html hay*/
.col-2 {
  width: -webkit-calc((100% - 60px) / 4);
  width: -moz-calc((100% - 60px) / 4);
  width: calc((100% - 60px) / 4);
}

@media (max-width: 767px) {
  .col-2 {
    width: 100%;
  }
}

/* ==========================================================================
   #BOX-SIZING
   ========================================================================== */
/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 */
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

/* ==========================================================================
   #RESET 
   ========================================================================== */
/**
 * A very simple reset that sits on top of Normalize.css.
 */
body,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, dd, ol, ul,
figure,
hr,
fieldset, legend {
  margin: 0;
  padding: 0;
}

/**
 * Remove trailing margins from nested lists.
 */
li > ol,
li > ul {
  margin-bottom: 0;
}

/**
 * Remove default table spacing.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
 * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
 *    on fieldsets.
 */
fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

/* ==========================================================================
   #PAGE WRAPPER
   ========================================================================== */
.page-wrapper {
  min-height: 100vh;
}

body {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 25px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 15px;
}

h6 {
  font-size: 13px;
}

/* ==========================================================================
   #BACKGROUND
   ========================================================================== */
.bg-blue {
  background: #2c6ed5;
}

.bg-red {
  background: #f49839;
}

/* ==========================================================================
   #SPACING
   ========================================================================== */
.p-t-100 {
  padding-top: 100px;
}

.p-t-180 {
  padding-top: 100px;
}

.p-t-20 {
  padding-top: 20px;
}

.p-t-30 {
  padding-top: 30px;
}

.p-b-100 {
  padding-bottom: 100px;
}

/* ==========================================================================
   #WRAPPER
   ========================================================================== */
.wrapper {
  margin: 0 auto;
}

.wrapper--w960 {
  max-width: 960px;
}

.wrapper--w680 {
  max-width: 680px;
}

/* ==========================================================================
   #BUTTON
   ========================================================================== */
.btn {
  line-height: 40px;
  display: inline-block;
  padding: 0 25px;
  cursor: pointer;
  color: #fff;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 14px;
  font-weight: 700;
}

.btn--radius {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

/* ==========================================================================
   #DATE PICKER
   ========================================================================== */
td.active {
  background-color: #2c6ed5;
}

/*input[type="date" i] {
  padding: 14px;
}*/

.table-condensed td, .table-condensed th {
  font-size: 14px;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.daterangepicker td {
  width: 40px;
  height: 30px;
}

.daterangepicker {
  border: none;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  display: none;
  border: 1px solid #e0e0e0;
  margin-top: 5px;
}

.daterangepicker::after, .daterangepicker::before {
  display: none;
}

.daterangepicker thead tr th {
  padding: 10px 0;
}

.daterangepicker .table-condensed th select {
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  outline: none;
}

/* ==========================================================================
   #FORM
   ========================================================================== */
input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 17px;
  font-family: inherit;
}

/* input group 1 */
/* end input group 1
--------se puede ver como el placeholder de cada espacio------  */
.input-group {
  position: relative;
  margin-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.input-icon {
  position: absolute;
  font-size: 18px;
  color: #ccc;
  right: 8px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
}

.input--style-2 {
  padding: 11px 0;
  color: #666;
  font-size: 16px;
  font-weight: 500;
}

.input--style-2::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #808080;
}

.input--style-2:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #808080;
  opacity: 1;
}

.input--style-2::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #808080;
  opacity: 1;
}

.input--style-2:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #808080;
}

.input--style-2:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #808080;
}

/* ==========================================================================
   #SELECT2
   ========================================================================== */
.select--no-search .select2-search {
  display: none !important;
}

.rs-select2 .select2-container {
  width: 100% !important;
  outline: none;
}

.rs-select2 .select2-container .select2-selection--single {
  outline: none;
  border: none;
  height: 36px;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {
  line-height: 36px;
  padding-left: 0;
  color: #808080;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {
  height: 34px;
  right: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {
  display: none;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {
  font-family: "Material-Design-Iconic-Font";
  content: '\f2f9';
  font-size: 18px;
  color: #ccc;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.rs-select2 .select2-container.select2-container--open .select2-selection--single .select2-selection__arrow::after {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.select2-container--open .select2-dropdown--below {
  border: none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
  margin-top: 5px;
  overflow: hidden;
}

/* ==========================================================================
   #TITLE
   ========================================================================== */

.title {
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 37px;
}

/* ==========================================================================
   #CARD
   ========================================================================== */
.card {
  overflow: hidden;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}
/* contorno de la tarjeta*/
.card-2 {
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  width: 100%;
  display: table;
}

.card-2 .card-heading {
  background: url("../assets/bg-heading-02.jpg") top left/cover no-repeat;
  width: 29.1%;
  display: table-cell;
}

.card-2 .card-body {
  display: table-cell;
  padding: 80px 60px;
  padding-bottom: 115px;
}

@media (max-width: 767px) {
  .card-2 {
    display: block;
  }
  .card-2 .card-heading {
    width: 100%;
    display: block;
    padding-top: 300px;
    background-position: left center;
  }
  .card-2 .card-body {
    display: block;
    padding: 60px 50px;
  }
  
}
  /* check-box*/
  .form-check-input {
    margin-left: 5px;
    background-color: gainsboro !important;
    border-color: gainsboro!important;
    
}
.form-check-input:checked {
    background-color: rgb(101, 122, 68)!important;
    border-color: rgb(101, 122, 68)!important;

}

.checkbox-wrap {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox-wrap input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
}
.checkbox-primary {
    color: #f49839;
}
.checkbxinput {
  color: green;
  background-color: green;
}



</style>
