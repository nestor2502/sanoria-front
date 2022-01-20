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
                        <img  class="recipe-image" src="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff-l.jpg" alt="">
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
                            <h2>Baked Chicken</h2>
                            <div class="receipe-duration">
                                <h6>Low Carb</h6>
                                <h6>Cook: 30 mins</h6>
                                <h6>Yields: 4 Servings</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="receipe-ratings text-right my-5">
                            
                            <a href="#" class="btn delicious-btn">
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
                        <div class="single-preparation-step d-flex">
                            <h4>01.</h4>
                            <p>640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)</p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>02.</h4>
                            <p>1/2 teaspoon salt</p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>03.</h4>
                            <p>1/4 teaspoon black pepper</p>
                        </div>
                        <!-- Single Preparation Step -->
                        <div class="single-preparation-step d-flex">
                            <h4>04.</h4>
                            <p>1 tablespoon butter - cultured unsalted (or olive oil)</p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>05.</h4>
                            <p>240 grams onion sliced thin (1 large onion)</p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>06.</h4>
                            <p>70 grams Anaheim pepper chopped (1 large pepper)</p>
                        </div>
                        <div class="single-preparation-step d-flex">
                            <h4>07.</h4>
                            <p>25 grams paprika (about 1/4 cup)</p>
                        </div>
                    </div>

                    <!-- Ingredients -->
                    <div class="col-12 col-lg-4">   
                        <div class="ingredients">
                            <h4>Nutrition Facts</h4>

                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Protein</td>
                                    <td>236 g</td>
                                    
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Cholesterol </td>
                                    <td>1283 mg</td>
                                   
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td >Sodium</td>
                                    <td>3945 mg</td>
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
                    <div class="col food-image">
                        <div class="card h-100">
                        <img src="https://www.edamam.com/food-img/093/093749f4c93e448119fc81976d2c3067.jpg" class="card-img-top" alt="" width="20px">
                        <div class="card-body">
                            <h5 class="card-title">chicken breast</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">coarse salt</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">seasoning</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <img src="https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">black pepper</h5>
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

export default{
  data: function() {
    return {
      imgRoute: "../assets/img/food.jpg"
    }
  },
  name: 'Recipe',
  props: {
    msg: String,
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
  @import url(../assets/styles/Recipe.css);
</style>
