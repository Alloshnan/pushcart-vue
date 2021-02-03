<template>
    <div class="container">
        <h3>Edit Catalog</h3>
            <form class="" @submit.prevent="updateCatalog">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="catalog.name" required>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
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
        created() {
            this.axios
                .get(process.env.VUE_APP_BASEURL + `api/catalogs/${this.$route.params.id}`)
                .then((response) => { // eslint-disable-line no-unused-vars
                    this.catalog = response.data; // eslint-disable-line no-unused-vars
                });
        },
        methods: {
            updateCatalog() {
                this.axios
                    .patch(process.env.VUE_APP_BASEURL + `api/catalogs/${this.$route.params.id}`, this.catalog)
                    .then((response) => { // eslint-disable-line no-unused-vars
                        this.$router.push({ name: 'Catalogs' });
                    });
            }
        }
    }
</script>