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
                        <img  v-if="recipe.image && recipe.image!=''" class="recipe-image" :src="recipe.image" alt="">
                        <i v-else class="fas fa-utensils fa-10x"></i>
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
                                <h6 v-for="hLabel in healthLabels" :key= "hLabel.id">&nbsp;{{hLabel}}</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="receipe-ratings text-right my-5">
                            
                            <a class="btn delicious-btn" data-bs-toggle="modal" data-bs-target="#confirmModal">
                               <i class="fas fa-plus"></i>
                                Add to schema
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row">

                                        <!-- Nutrients -->
                    <div class="col-12 col-lg-8 nutriment-cards">   
                        <div class="ingredients">

                                <div class="row row-cols-1 row-cols-md-3 g-3">
                                    <div class="col food-image">
                                        <div class="card h-100">
                                        <img  src="../assets/img/kcal.jpg" class="card-img-top" alt="" width="20px">
                                        <div class="card-body">
                                            <h3><span>{{enerKal}}</span></h3>
                                            <h5 class="card-title">Calories</h5>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                        <img src="../assets/img/fat.jpg" class="card-img-top" alt="">
                                        <div class="card-body">
                                            <h3><span class="counter">{{fat}}</span></h3>
                                            <h5 class="card-title">Fat</h5>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                        <img src="../assets/img/carbs.jpg" class="card-img-top" alt="">
                                        <div class="card-body">
                                            <h3><span class="counter">{{carbohydrates}}</span></h3>
                                            <h5 class="card-title">Carbohydrates</h5>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                        <img src="../assets/img/sugar.jpg" class="card-img-top" alt="">
                                        <div class="card-body">
                                            <h3><span class="counter">{{sugars}}</span></h3>
                                            <h5 class="card-title">Sugars</h5>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card h-100">
                                        <img src="../assets/img/protein.jpg" class="card-img-top" alt="">
                                        <div class="card-body">
                                            <h3><span class="counter">{{proteins}}</span></h3>
                                            <h5 class="card-title">Protein</h5>
                                        </div>
                                        </div>
                                    </div>
                </div>
                        </div>
                    </div>
                
                    <div class="col-12 col-lg-4">
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>Ingredients</h4>
                        </div>
                        <div v-for="(ingredient, index) in recipe.ingredientLines" :key="index" class="single-preparation-step d-flex">
                            <h4>{{index+1}}.</h4>
                            <p>{{ingredient}}</p>
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

                    <div v-for="foodItem in recipe.ingredients" :key="foodItem.id" class="col" @click="navega(`/food?id=${getItemId(foodItem.foodId)}&name=${foodItem.food}`)">
                        <div class="card h-100">
                        <img  v-if="foodItem.image && foodItem.image!=''" :src="foodItem.image" class="card-img-top" alt="">
                        <div v-else style="text-align: center;">
                            <i class="fas fa-fish fa-8x"></i>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{foodItem.food}}</h5>
                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#successModal">
    Launch demo modal
    </button>

    <!-- Confirm Modal -->
    <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
            <div style="font-size: 1.5rem; padding: 2rem;">
                Do you want to add this recipe to your scheme?
            </div>
        </div>
        <div class="modal-footer modal-footer-center">
            <button type="button" class="btn btn-confirm-modal" @click="addToSchema()" data-bs-dismiss="modal">Yes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        </div>
        </div>
    </div>
    </div>

</div>


  
</template>

<script>
import router from '../router'
import axios from 'axios';
import storage from "../storage"

export default{
	data(){
		return{
		recipe: {},
        user: {},
        healthLabels: [],
        enerKal: "",
        fat: "",
        carbohydrates: "",
        sugars: "",
        proteins: ""
		}
	},
	created() {
        this.user = storage.getStorage('user');
		this.recipeUri = this.$route.query.id
		axios.get(`https://sanoria-api.herokuapp.com/recipe/${this.recipeUri}`)
            .then( result => {
                if(result.status == 200){
                    let finalData = result.data;
                    this.recipe = finalData.recipe;
                    this.recipe.healthLabels.forEach(hLabel => {
                        this.healthLabels.push(hLabel.replace("-", " "))
                    });
                    this.enerKal = this.recipe.totalNutrients['ENERC_KCAL'].quantity.toFixed(2) + " " +  this.recipe.totalNutrients['ENERC_KCAL'].unit
                    this.fat = this.recipe.totalNutrients['FAT'].quantity.toFixed(2) + " " +  this.recipe.totalNutrients['FAT'].unit
                    this.carbohydrates = this.recipe.totalNutrients['CHOCDF'].quantity.toFixed(2) + " " +  this.recipe.totalNutrients['CHOCDF'].unit
                    this.sugars = this.recipe.totalNutrients['SUGAR'].quantity.toFixed(2) + " " +  this.recipe.totalNutrients['SUGAR'].unit
                    this.proteins = this.recipe.totalNutrients['PROCNT'].quantity.toFixed(2) + " " +  this.recipe.totalNutrients['PROCNT'].unit
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
    navega(route){
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
            "userId": this.user.id,
            "label": this.recipe.label,
            "image": this.recipe.image? this.recipe.image: "",
            "recipeUri": this.recipe.uri
        }
        console.log(food)
        axios.post('https://sanoria-api.herokuapp.com/recipe', food)
            .then((res) => {
				if (res.status === 201) {
					window.$("#successModal").modal("show");
				} else {
					window.$("#errorModal").modal("show");
				}
			}).catch((err) => console.log(err))
    },
    getItemId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    },

  }
}


</script>

<style scoped>
  @import url(../assets/styles/Recipe.css);
</style>
