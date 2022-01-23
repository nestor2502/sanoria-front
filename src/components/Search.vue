<template>
<div class="py-5">
  <div v-if="successfulRequest" class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
      <div class="col"  v-for="item in recipes" :key="item.id" @click="navega('recipe?id='+ getRecipeId(item.uri))">
        <div class="card shadow">
          <img :src="item.image" class="bd-placeholder-img card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{item.label}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="notFoundRequest" class="container custom-my-5">
    <a href="/"><img src="../assets/img/notfoundmathces.jpeg"/></a>
  </div>
</div>
</template>

<script>
import router from '../router'
import axios from 'axios';

export default {
  name: 'Search',
  props: {
    msg: String
  },
  data(){
    return{
      recipeName: 'jajaj', 
      recipes: []
    }
  },
    created() {
    //console.log(this.$router.currentRoute.path); // path is /post
    //console.log(this.$route.query.q) 
    let url = `https://sanoria-api.herokuapp.com/recipe/search?recipeName=${this.$route.query.q}`
    if(this.$route.query.schema) url += "&schema="+this.$route.query.schema
    if(this.$route.query.health) url += "&health="+this.$route.query.health
    if(this.$route.query.mealType) url += "&mealType="+this.$route.query.mealType
    this.successfulRequest = true
    this.notFoundRequest = false
    axios.get(url)
          .then( result => {
            if(result.status == 200){
              let finalData = result.data.data;
              console.log(finalData)
              if (finalData.length == 0) {
                console.log("algo")
                this.successfulRequest = false
                this.notFoundRequest = true
              } 
              finalData.forEach(element => {
                element.image = this.getImgUrl(element.image)
              });
              this.recipes = finalData
            }
            else{
              this.successfulRequest = false
              window.$("#errorModal").modal("show");
              console.log("algo malo pasó :(")
            }
          }).catch(e => console.log(e))
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
    getRecipeId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    }
  }
}
</script>

<style scoped>
  @import url(../assets/styles/Search.css);
</style>