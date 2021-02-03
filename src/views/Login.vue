<template>
	<div class="login container">
		<form @submit.prevent="handleLogin">
			<div class="form-group">
				<label for="email">Email address</label>
				<input type="email" v-model="user.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" v-model="user.password" class="form-control" id="password" placeholder="Password" required>
			</div>
			<div class="form-group text-center">
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</form>


	</div>
</template>


<script>
export default {
    data() {
        return {
            user: {
				token_name: 'Bearer',
			}
        }
	},
	methods: {
        handleLogin() {
			this.axios.get(process.env.VUE_APP_BASEURL + 'sanctum/csrf-cookie')
				.then(response => { // eslint-disable-line no-unused-vars
					this.axios.post(process.env.VUE_APP_BASEURL + 'login', this.user)
						.then(response => { // eslint-disable-line no-unused-vars
							this.$store.commit('setLogin',true);
							this.$store.commit('setAdmin',response.data.isAdmin);
							this.$router.push({ name: 'Dashboard' })
					}).catch(error => console.log(error)); // credentials didn't match
			});
		}
    }
}
</script>