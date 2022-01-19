<template>

<div>
    <div>
    <!--Nombre esquema-->
        <h1>
            Mi esquema
        </h1>
    </div>

     <div class="row">
        <div class="column">
            <div class="nombre-esquema">
                <p>Tipo de esquema</p>
            </div>
        </div>
        <div class="column">
            <!--checkbox-->
            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                <label class="form-check-label" for="flexCheckDefault">
                   Solo guardados
                </label>
        </div>
    </div> 

  <div class="album py-5 bg-light">
    <div class="container">


      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="n in 6" :key="n">
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="../assets/img/food.jpg">
                            <div class="card-body">
                                <p class="card-text">Nombre de la comida</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Borrar</button>
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
    <div v-for="n in 6" :key="n">
    <li class="page-item"><a class="page-link" href="#">{{n}}</a></li>
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

<style scoped>
  @import url(../assets/styles/Scheme.css);
</style>