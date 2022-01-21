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

     <div class="row">
        <div class="column">
            <div class="nombre-esquema">
                <p>Type of Schemes</p>
            </div>
        </div>
        <div class="column">
            <!--checkbox-->
            <!--<input  class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                <label class="form-check-label" for="flexCheckDefault">
                  <p>Saved</p>
                </label>-->
        </div>
    </div> 

  <div class="album py-5 bg-light">
    <div class="container">


      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="post in chunk" :key="post.id">
                <div class="col">
                    <div class="card shadow-sm">
                        <img :src="post.image">
                            <div class="card-body">
                                <p class="card-text">{{post.label}}</p>
                                    <div class="d-flex justify-content-end align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-delete" @click="aux(post.id)"><i class="far fa-trash-alt"></i></button>
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
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <div v-for="n in chunks.length" :key="n">
    <li class="page-item"><a class="page-link" href="#" @click="selectChunk(n)">{{n}}</a></li>
    </div>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

</div>


</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      chunks: [],
      chunk: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch("https://sanoria-api.herokuapp.com/recipe/schema/1");
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
  /**
  borra(id){
    fetch("https://sanoria-api.herokuapp.com/recipe/" + id,{
      method:'DELETE'
    }).then(response=>{
      return response.json()
    }).then(data=> 
    // this is the data we get after putting our data,
      console.log(data)
      );
    },*/
  async borra(id){
    return axios.delete(`https://sanoria-api.herokuapp.com/recipe/${id}`)
     .then(res => res.data);
  }
  },
  created() {
    this.getData();
  },
};

</script>

<style scoped>
  @import url(../assets/styles/Scheme.css);
</style>