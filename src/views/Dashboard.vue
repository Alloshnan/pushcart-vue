<template>
	<div class="dashboard container">
		<div class="clearfix">
			<span class="h1">Welcome to PushCart.com</span>
			<!-- Button trigger modal -->
			<Cart />
		</div>
        
		<div class="card-columns mt-2">
			<Product
				v-for="product in forSale"
				:key="product.id"
				:id="product.id"
				:name="product.name"
				:description="product.description"
				:catalog_name="product.catalog.name"
				:price="product.price" 
				/>
		</div>
	</div>
</template>

<script>
import Product from '@/components/Product.vue';
import Cart from '@/components/Cart.vue';

export default {
	name: 'Dashboard',
	created() {
		this.axios
			.get(process.env.VUE_APP_BASEURL + 'api/dash-products/')
			.then(response => {
				if (this.$store.getters.forSale.length == 0) {
					this.$store.dispatch('getForSale', response.data); 
				}
			});
	},
	computed: {
		forSale() { 
			return this.$store.getters.forSale;
		},
		inCart() { return this.$store.getters.inCart; },
	},
	components: {
		Product,
		Cart,
	},
}
</script>
