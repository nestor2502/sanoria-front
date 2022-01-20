<template>
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content">
			<div class="modal-header">
				Login
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="text"
						id="email"
						class="form-control"
						v-model="dataObj.email"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input
						type="text"
						id="password"
						class="form-control"
						v-model="dataObj.password"
					/>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success" @click="handleSave">
					Login
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios"

export default {
	name: "Login",
	data: function (){
		return{
			dataObj:{
				email: '',
				password:''
			}
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
