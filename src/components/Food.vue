<template>
    <div>
      <div class="breadcumb-area bgf-img bg-overlay">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-text text-center">
                        <h2>Food</h2>
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
                        <img  class="recipe-image" :src="food.image" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Food Detail Content Area -->
        <div class="receipe-content-area">
            <div class="container">

                <div class="row">
                    <div class="col-12 col-md-8">
                        <div class="receipe-headline my-5">
                            <h2>{{food.label}}</h2>
                            <div class="receipe-duration">
                                <h6>Low Carb</h6>
                            </div>
                        </div>
                    </div>

                    
                </div>
                  
                <div class="row row-cols-1 row-cols-md-5 g-3">
                    <div class="col food-image">
                        <div class="card h-100">
                        <img  src="../assets/img/kcal.jpg" class="card-img-top" alt="" width="20px">
                        <div class="card-body">
                            <h3><span>52 Kcal</span></h3>
                            <h5 class="card-title">Calories</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="../assets/img/fat.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h3><span class="counter">0 g.</span></h3>
                            <h5 class="card-title">Fat</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="../assets/img/carbs.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h3><span class="counter">14 g.</span></h3>
                            <h5 class="card-title">Carbohydrates</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="../assets/img/sugar.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h3><span class="counter">16 g.</span></h3>
                            <h5 class="card-title">Sugars</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="../assets/img/protein.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h3><span class="counter">0.4 g.</span></h3>
                            <h5 class="card-title">Protein</h5>
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
export default{
	data(){
		return{
		food: {}
		}
	},
	created() {
		this.foodUri = this.$route.query.name
        console.log(this.foodUri)
		axios.get(`https://sanoria-api.herokuapp.com/food?ingr=${this.foodUri}`)
            .then( result => {
                if(result.status == 200){
                    this.food = result.data.data[0];
                }
                else{
                    console.log("algo malo pasó :(")
                }
            }).catch(e => console.log(e))
	},
  name: 'Food',
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
       //storage.setStorage('userTemp', {test: true});
       //let value = storage.getStorage('userTemp')
       //console.log(value)
       //storage.removeStorage('books')
    },
    getFoodId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    }
  }
}
</script>
