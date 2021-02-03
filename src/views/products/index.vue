<template>
    <div class="container">
        <h2 class="text-center">Products List</h2>
        <router-link :to="{name: 'CreateProduct'}" class="btn btn-success">Create Product</router-link>
        <table class="table table-striped mt-2">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Catalog</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.catalog.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>₱ {{ product.price }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'EditProduct', params: { id: product.id }}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
            this.axios
                .get(process.env.VUE_APP_BASEURL + 'api/products/')
                .then(response => {
                    this.products = response.data;
                });
        },
        methods: {
            deleteProduct(id) { 
                this.axios
                    .delete(process.env.VUE_APP_BASEURL + `api/products/${id}`)
                    .then(response => { // eslint-disable-line no-unused-vars
                        let i = this.products.map(data => data.id).indexOf(id);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>