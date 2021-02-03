<template>
	<div class="container text-center">
		<h1>Logging you out...</h1>
	</div>
</template>


<script>
export default {
    data() {

	},
	created() {
		this.axios.post(process.env.VUE_APP_BASEURL + 'logout')
			.then(response => { // eslint-disable-line no-unused-vars
				this.$store.commit('setLogin',false);
				this.$store.commit('setAdmin',false);
				this.$router.push({ name: 'Login' })
			});
	},
}
</script>