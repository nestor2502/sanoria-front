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
        >Weight</a
      >
      <a
        v-on:click="activetab = 3"
        v-bind:class="[activetab === 3 ? 'active' : '']"
        >Height</a
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
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoMalestar">
          New
        </button>

        <!-- Modal -->
        <div class="modal fade" id="nuevoMalestar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Ache</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input v-model="malestar" type="text" id="malestar" class="form-control" aria-describedby="nameBlock">
                <div id="nameBlock" class="form-text">
                  Enter ache
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="nuevoMalestar(malestar)">Save changes</button>
              </div>
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
      malestar: ''
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
      console.log(this.malestar)
      axios.post('https://sanoria-api.herokuapp.com/user/' + this.userId + '/ache', {
        ache: this.malestar
      })
      .then((res) => {
        console.log(res.status)
        this.malestar = ''
        this.showModal = false
      })
      .catch((err) => console.error(err))
    }
  },
};
</script>

<style >
/* RESET */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 620px;
  min-width: 420px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
  color: #888;
}

/* Style the tabs */
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

/* Change background color of tabs on hover */
.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

/* Styling for active tab */
.tabs a.active {
  background-color: #fff;
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

/* Style the tab content */
.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}
</style>
