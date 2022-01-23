<template>

<div>
    <br>
    <br>
    <div>
    <!--Nombre esquema-->
        <h1>
            My Scheme
        </h1>
    </div>

     <div class="row align-items-center">
        <div class="column">
            <div class="nombre-esquema" style="text-transform: capitalize;">
                <p>{{schema}}</p>
            </div>
        </div>
        <!--div class="column">
            <input  class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                <label class="form-check-label" for="flexCheckDefault">
                  <p>Saves</p>
                </label>
        </div-->
    </div> 

  <div class="py-5">
    <div class="container">


      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="post in chunk" :key="post.id">
                <!--div class="col" @click="navega(`/recipe?id=${getItemId(post.recipeUri)}&name=${post.label}`)"-->
                <div class="col">
                    <div class="card shadow-sm">
                        <img :src="post.image" @click="navega(`/recipe?id=${getItemId(post.recipeUri)}&name=${post.label}`)">
                            <div class="card-body">
                                <p class="card-text" @click="navega(`/recipe?id=${getItemId(post.recipeUri)}&name=${post.label}`)">{{post.label}}</p>
                                    <div class="d-flex justify-content-end align-items-center">
                                        <div class="btn-group">
                                            <button 
                                              type="button" 
                                              class="btn btn-sm btn-delete" d
                                              data-bs-toggle="modal" 
                                              data-bs-target="#confirmModalShema"
                                              @click="selectItem(post.id)"><i class="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                            </div>
                    </div>
                </div>   

            </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" style="border: 1px solid #abb545;">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <div v-for="n in chunks.length" :key="n">
    <li class="page-item"><a class="page-link" href="#" @click="selectChunk(n)">{{n}}</a></li>
    </div>
    <li class="page-item">
      <a class="btn page-link" href="#" aria-label="Next" style="border: 1px solid #abb545;">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

                <!-- Confirm Modal -->
  <div class="modal fade" id="confirmModalShema" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      <div class="modal-content">
      <div class="modal-body">
          <div style="font-size: 1.5rem; padding: 2rem;">
              Do you want to remove this recipe?
          </div>
      </div>
      <div class="modal-footer modal-footer-center">
          <button type="button" class="btn btn-confirm-modal" @click="aux(toDelete)" data-bs-dismiss="modal">Yes</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
      </div>
      </div>
  </div>
  </div>
  <!-- Confirm Modal --> 

</div>


</template>

<script>
import axios from 'axios';
import router from '../router'
import storage from "../storage"

export default {
  data() {
    return {
      posts: [],
      chunks: [],
      chunk: [],
      schema: "",
      toDelete: 0,
      user: {}
    };
  },

  methods: {
    navega(route){
      router.push(route)
        .catch(() => {})
    },
    selectItem(id){
      console.log("selecciona: ", id)
      this.toDelete = id
    },
    getItemId(uriValue){
      let uri = uriValue.slice(uriValue.indexOf("_")+1)
      return uri
    },
    async getData() {
      try {
        let response = await fetch("https://sanoria-api.herokuapp.com/recipe/schema/"+ this.user.id);
        this.posts = await response.json();
        this.chunks = this.spliceIntoChunks(this.posts, 6);
        this.chunk = this.chunks[0];
      } catch (error) {
        console.log(error);
      }
  },
    spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
  },
  aux(id){
    this.borra(id);
    this.getData();
  },
    selectChunk(n){
      this.chunk = this.chunks[n - 1];
  },
  async borra(id){
    return axios.delete(`https://sanoria-api.herokuapp.com/recipe/${id}`)
     .then(res => {this.getData(); console.log(res)})
     .catch(err => console.log(err))
  }
  },
  created() {
    let userTemp = storage.getStorage("user")
    this.user = storage.getStorage("user")
    console.log(this.user)
    this.schema = userTemp.scheme.replace("-", " ");
    this.getData();
  },

};

</script>

<style scoped>
  @import url(../assets/styles/Scheme.css);
</style>