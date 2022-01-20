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
      console.log(this.dataObj);
      this.handleClose();
		},
		handleClose(){
			this.$emit('close');
		}
	}
}
</script>
