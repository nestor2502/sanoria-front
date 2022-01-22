<template>
    <div>
      <div class="breadcumb-area bg-img bg-overlay">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2>Recipe</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div v class="receipe-post-area section-padding-80">

        <div class="receipe-post-search"></div>

        <!-- Receipe Slider -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>
                        <img  class="recipe-image" :src="recipe.image" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Receipe Content Area -->
        <div class="receipe-content-area">
            <div class="container">

                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="receipe-headline my-5">
                            <h2>{{recipe.label}}</h2>
                            <div class="receipe-duration">
                                <h6>Low Carb</h6>
                                <h6>Cook: 30 mins</h6>
                                <h6>Yields: {{recipe.yield}} Servings</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="receipe-ratings text-right my-5">
                            
                            <a class="btn delicious-btn" @click="addToSchema()">
                               <i class="fas fa-plus"></i>
                                Add to schema
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">
                
                    <div class="col-12 col-lg-8">
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>Ingredients</h4>
                        </div>
                        <div v-for="(ingredient, index) in recipe.ingredientLines" :key="index" class="single-preparation-step d-flex">
                            <h4>{{index+1}}.</h4>
                            <p>{{ingredient}}</p>
                        </div>

                    </div>

                    <!-- Nutrients -->
                    <div class="col-12 col-lg-4">   
                        <div class="ingredients">
                            <h4>Nutrition Facts</h4>

                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Nutrient</th>
                                    <th scope="col">quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, name,index2) in recipe.totalNutrients" :key="index2">
                                        <td>{{item.label}}</td>
                                        <td>{{item.quantity.toFixed(2)}} {{item.unit}}</td>
                                    </tr>
                                </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <br>
                <br>

                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-left">
                            <h3>Food detail</h3>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    <div v-for="foodItem in recipe.ingredients" :key="foodItem.id" class="col" @click="navega(`/food?id=${getFoodId(foodItem.foodId)}&name=${foodItem.food}`)">
                        <div class="card h-100">
                        <img :src="foodItem.image" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{foodItem.food}}</h5>
                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    </div>
  
</template>

<script>
import router from '../router'
import axios from 'axios';
//import storage from "../storage"

export default{
	data(){
		return{
		recipe: {}
		}
	},
	created() {
		this.recipeUri = this.$route.query.id
		axios.get(`https://sanoria-api.herokuapp.com/recipe/${this.recipeUri}`)
            .then( result => {
                if(result.status == 200){
                    let finalData = result.data;
                    this.recipe = finalData.recipe;
                }
                else{
                    console.log("algo malo pasó :(")
                }
            }).catch(e => console.log(e))
	},
  name: 'Recipe',
  props: {
    msg: String,
  },
  methods: {
    navega: function (route){
      router.push(route)
        .catch(() => {})
    },
    getImgUrl(images) {
      if(Object.keys(images).includes("LARGE")){
        return images.LARGE.url+ "";
      }
      else if(Object.keys(images).includes("REGULAR")){
        return images.REGULAR.url;
      }
      else if(Object.keys(images).includes("SMALL")){
        return images.SMALL.url;
      }
      else if(Object.keys(images).includes("THUMBNAIL")){
        return images.THUMBNAIL.url;
      }
      else {
        return "";
      }
    },
    addToSchema(){
        console.log("se agrega")
        const food = {
            "userId": 1,
            "label": "pollo rostizado",
            "image": "imageUrl",
            "recipeUri": "adasdasdasd"
        }
        console.log(food)

    },
    getFoodId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    }
  }
}
</script>

<style scoped>
  @import url(../assets/styles/Recipe.css);
</style>
