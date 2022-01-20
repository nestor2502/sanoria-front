<template>
  <div id="tabs" class="container">
  
    <div class="tabs">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Malestares</a>
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Peso</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Altura</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mal del puerko</td>
              <td>11/11/2011</td>
            </tr>
            <tr>
              <td>Reflujo</td>
              <td>12/12/2012</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Peso (kg)</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>56</td>
                <td>11/11/2011</td>
              </tr>
              <tr>
                <td>67</td>
                <td>12/12/2012</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="activetab === 3" class="tabcontent">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Altura (m)</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.70</td>
                <td>11/11/2011</td>
              </tr>
              <tr>
                <td>1.70</td>
                <td>12/12/2012</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
	name: "Tracking",
	data: function (){
		return{
			dataObj:{
				email: '',
				password:''
			},
      activetab: 1
		}
	},
	methods:{
		handleSave(){
			axios.post('https://sanoria-api.herokuapp.com/auth/login', {
				username: this.dataObj.email,
				password: this.dataObj.password
			}).then((res) => {
				if (res.status === 201) {
					console.log(res.data.access_token) //aki esta el token
				} else {
					console.log(res)
				}
			}).catch((err) => console.error(err))
      this.handleClose();
		},
		handleClose(){
			this.$emit('close');
		}
	}
}
</script>

<style>
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

.tabs a{
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
  box-shadow: 3px 3px 6px #e1e1e1
}

</style>
