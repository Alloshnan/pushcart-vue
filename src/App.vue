<template>
	<div id="nav">
		<router-link to="/">Dashboard</router-link> |
		<span v-if="isLoggedIn">
			<router-link to="/products">Products</router-link> |
			<span v-if="isAdmin">
				<router-link to="/catalogs">Catalogs</router-link> |
				<router-link to="/users">Users</router-link> |
			</span>
		</span>
		<router-link to="/login" v-if="!isLoggedIn">Log In</router-link>
		<router-link to="/logout" v-if="isLoggedIn">Log Out</router-link>
	</div>
	<router-view/>
</template>


<script>
export default {
	data() {
		return {
			auth: {
				
			}
		}
	},
	computed: {
		isLoggedIn () {
			return this.$store.getters.loginState;
		},
		isAdmin () {
			return this.$store.getters.adminState;
		},
	}
}
</script>


<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
		text-align: center;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
