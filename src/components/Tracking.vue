<template>

  <div id="tabs" class="container">
    <div class="tabs">
      <a
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
        >Aches</a
      >
      <a
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
        >Weights</a
      >
      <a
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
        >Heights</a
      >
    </div>

    <div class="content">
      <div v-if="activetab === 1" class="tabcontent">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Ache</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in malestares" :key="item.id">
              <td>{{ item.ache }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
        <button type="button"
                v-if="showNewButton"
                class="btn btn-add-ache btn-block" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample">
          New
        </button>

            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                  <input v-model="malestar" type="text" id="malestar" class="form-control" aria-describedby="nameBlock">
                  <div class="modal-footer" style="display: block;">
                    <button type="button" class="btn btn-c-atach" data-bs-toggle="modal" data-bs-target="#saveAche">Save changes</button>
                </div>
              </div>
            </div>

      </div>
      <div v-if="activetab === 2" class="tabcontent">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Weight</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in weights" :key="item.id">
              <td>{{ item.weight }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="activetab === 3" class="tabcontent">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Height</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in heights" :key="item.id">
              <td>{{ item.height }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        <!-- Confirm Modal -->
    <div class="modal fade" id="saveAche" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
            <div style="font-size: 1.5rem; padding: 2rem;">
                Do you want to add this ache?
            </div>
        </div>
        <div class="modal-footer modal-footer-center">
            <button type="button" class="btn btn-confirm-modal" @click="nuevoMalestar(malestar)" data-bs-dismiss="modal">Yes</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        </div>
        </div>
    </div>
    </div>
    <!-- Confirm Modal -->

  </div>
</template>

<script>
import axios from "axios";
  
export default {
  name: "Tracking",
  data: function () {
    return {
      heights: [],
      weights: [],
      malestares: [],
      activetab: 1,
      userId: 1,
      malestar: '',
      showNewButton: true,
    };
  },
  beforeMount() {
    //const userId = JSON.parse(Storage.getItem("userInfo")).userId
    const userId = this.userId
    this.getWeightLog(userId)
    this.getHeightLog(userId)
    this.getMalestaresLog(userId)
  },
  methods: {
    getWeightLog(userId) {
      axios.get("https://sanoria-api.herokuapp.com/user/weight-log/" + userId)
        .then((res) => {
          if (res.status === 200) {
            this.weights = res.data
          } else {
            console.log(res);
          }
        })
        .catch((err) => console.error(err));
    },
    getHeightLog(userId){
			axios.get('https://sanoria-api.herokuapp.com/user/height-log/' + userId)
      .then((res) => {
				if (res.status === 200) {
          this.heights = res.data
				} else {
					console.log(res)
				}
			}).catch((err) => console.error(err))
		},
    getMalestaresLog(userId){
      axios.get('https://sanoria-api.herokuapp.com/user/' + userId + '/ache')
      .then((res) => {
				if (res.status === 200) {
          this.malestares = res.data
				} else {
					console.log(res)
				}
			}).catch((err) => console.error(err))
    },
    nuevoMalestar(){
      axios.post('https://sanoria-api.herokuapp.com/user/' + this.userId + '/ache', {
        ache: this.malestar
      })
      .then(() => {
        this.malestar = ''
        this.showModal = false
        this.getMalestaresLog(this.userId)
      
      })
      .catch((err) => console.error(err))
    },
  },
};
</script>

<style scoped>

a {
  text-decoration: none;
  color: #f49839;
}
.container {
  width: 100%;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}

.custom-btn{
  display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.custom-btn:hover{
   background-color: red;
   border-color: red;
}

.custom-btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-add-ache {
  font-size: 18px;
  color: #f49839;
  border: 1px solid #f49839;
}
  
.btn-add-ache:hover {
  color: #fff;
  background-color: #f49839;
}

.btn-c-atach {
  color: #f49839;
  border: 1px solid #abb545;
  background-color: #abb545;
  color: #fff;
}
  
.btn-c-atach:hover {
  color: #fff;
  background-color: #848c2e;
}
</style>
