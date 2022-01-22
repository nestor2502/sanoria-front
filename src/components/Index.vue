<template>
<div>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="left-arrow" viewBox="0 0 544 512">
        <path fill="#ffffff" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm107.5-8.5l122.8-122.8c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L234.2 256l91.7 91.7c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L163.5 264.5c-4.7-4.7-4.7-12.3 0-17z"/>
      </symbol>
      <symbol id="right-arrow" viewBox="0 0 544 512">
        <path fill="#ffffff" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-107.5 8.5L225.7 387.3c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l91.7-91.7-91.7-91.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l122.8 122.8c4.7 4.7 4.7 12.3 0 17z"/>
      </symbol>
    </svg>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/carrot5.jpg" class="bd-placeholder-img d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>A healthy exterior begins within you.</h4>
          <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/bread.jpg" class="bd-placeholder-img d-block w-100" alt="..." style="filter: brightness(80%);">
          <div class="carousel-caption d-none d-md-block">
            <h4>It is health that is real wealth</h4>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/img/pickle-rick.jpg" class="bd-placeholder-img d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h4>We are an organization interested in your health and well-being.</h4>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
  <section v-for="(recomedation, i) in recomedations" :key="i">
    <div class="section-header">
      <h2 style="text-transform: capitalize;">{{finalcategories[i].replaceAll("-", " ")}}</h2>
      </div>
    <div v-bind:id="'recomendations-'+i" class="carousel slide recomendations" data-bs-ride="carousel">
        <div class="carousel-inner" >
          <div v-for="(recipes, index) in recomedation" :key="index" class="carousel-item" v-bind:class="{'active' : index == 0}">
            <div class="row row-cols-1 row-cols-sm-4 row-cols-md-4 g-3">
              <div v-for="recipe in recipes" :key="recipe.id" class="col" @click="navega('recipe?id='+ getRecipeId(recipe.uri))">
                <div class="card shadow-sm">
                  <img :src="recipe.image" class="bd-placeholder-img card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">{{recipe.label}}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" v-bind:data-bs-target="'#recomendations-'+i" data-bs-slide="prev">
          <svg width="50" height="50" class="right-icon" style="background-color= #fff"><use xlink:href="#left-arrow"/></svg>
        </button>
        <button class="carousel-control-next" type="button" v-bind:data-bs-target="'#recomendations-'+i" data-bs-slide="next">
          <svg width="50" height="50" class="right-icon"><use xlink:href="#right-arrow"/></svg>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
  </section>
  </div>
</template>

<script>
import router from '../router'
import axios from 'axios';

export default{
  name: 'Index',
  props: {
    msg: String,
  },
  data() {
    return {
      categories : {
        "schema": ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"], 
        "health": ["alcohol-cocktail", "alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", 
                      "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "keto-friendly",
                      "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free",
                      "Mediterranean", "mollusk-free", "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian",
                      "pork-free", "red-meat-free", "sesame-free", "shellfish-free", "soy-free", "sugar-conscious",
                      "sulfite-free", "tree-nut-free", "vegan", "vegetarian", "wheat-free"], 
        "mealType": ["Breakfast", "Dinner", "Lunch", "Snack", "Teatime"]
      },
      foods : ["chicken", "potato", "meat", "meat balls", "spaghetti", "salad"],
      recomedations : [],
      finalcategories: []
    }
  },
  created() {
    for(let i = 0; i < 4; i++) {
      let category
      switch(Math.floor(Math.random() * 3)) {
        case 0:
          category = "schema"
          break
        case 1:
          category = "health"
          break
        case 2:
          category = "mealType"
          break
      }
      let food = this.foods[(Math.floor(Math.random() * this.foods.length))]
      let type = Math.floor(Math.random() * this.categories[category].length)
      this.finalcategories.push(this.categories[category][type])
      axios.get(`https://sanoria-api.herokuapp.com/recipe/search?recipeName=${food}&${category}=${this.categories[category][type]}&random=true`)
            .then(result => {
              if(result.status == 200){
                let data = result.data.data;
                data.forEach(element => {
                  element.image = this.getImgUrl(element.image)
                });
                this.recomedations.push(this.chunk(data, 5, false))
              }
              else{
                console.log("algo malo pasó :(")
              }
            }).catch(e => console.log(e))
    }
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
        console.log("entra 5")
      }
    },
    chunk(a, n, balanced) {
      if (n < 2)
          return [a];
      var len = a.length,
              out = [],
              i = 0,
              size;
      if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, i += size));
        }
      } else if (balanced) {
        while (i < len) {
            size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, i += size));
        }
      }
      else {
        n--;
        size = Math.floor(len / n);
        if (len % size === 0)
            size--;
        while (i < size * n) {
            out.push(a.slice(i, i += size));
        }
        out.push(a.slice(size * n));
      }
      return out;
    },
    getRecipeId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    }
  }
}
</script>

<style scoped>
  @import url(../assets/styles/Index.css);
  
</style>
