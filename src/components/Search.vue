<template>
<div class="py-5">
  <div class="container">
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
    this.recipeName = this.$route.query.q
    axios.get(`https://sanoria-api.herokuapp.com/recipe/search?recipeName=${this.recipeName}`)
          .then( result => {
            if(result.status == 200){
              let finalData = result.data.data;
              finalData.forEach(element => {
                element.image = this.getImgUrl(element.image)
              });
              this.recipes = finalData
            }
            else{
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