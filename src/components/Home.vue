<template>
  <div>
    <div class="row row-cols-1 row-cols-md-5 g-4"  >
      <div v-for="item in recipes" class="col" :key="item.id" @click="navega('recipe?id='+ getRecipeId(item.uri))">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Item: {{item.label}}</h5>
            <p class="card-text">Image: {{item.label}}</p>
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
  name: 'Home',
  props: {
    msg: String
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
      console.log("urii")
      console.log(uri)
      return uri
    }
  }
}
</script>
