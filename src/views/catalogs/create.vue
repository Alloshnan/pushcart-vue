<template>
    <div class="container">
        <h3 >Create Catalog</h3>
        <form @submit.prevent="addCatalog">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="catalog.name" required>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                catalog: {}
            }
        },
        methods: {
            addCatalog() {
                this.axios
                    .post(process.env.VUE_APP_BASEURL + 'api/catalogs', this.catalog)
                    .then(response => (// eslint-disable-line no-unused-vars
                        this.$router.push({ name: 'Catalogs' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>