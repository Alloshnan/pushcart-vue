<template>
    <div class="container">
        <h3>Create Product</h3>
        <form @submit.prevent="addProduct">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="product.name" required>
            </div>
            <div class="form-group">
                <label>Detail</label>
                <input type="text" class="form-control" v-model="product.description" required>
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="number" class="form-control" v-model="product.price" required>
            </div>
            
            <div class="form-group">
                <label>Catalog</label>
                <select class="form-control" v-model="product.catalog_id">
                    <option v-for="catalog in catalogs" :key="catalog.id" v-bind:value="catalog.id">{{ catalog.name }}</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                product: {},
                catalogs: {}
            }
        },
        created() {
            this.axios
                .get(process.env.VUE_APP_BASEURL + 'api/catalogs/')
                .then(response => {
                    this.catalogs = response.data;
                });
        },
        methods: {
            addProduct() {
                this.axios
                    .post(process.env.VUE_APP_BASEURL + 'api/products', this.product)
                    .then(response => (// eslint-disable-line no-unused-vars
                        this.$router.push({ name: 'Products' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>