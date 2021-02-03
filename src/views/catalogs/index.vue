<template>
    <div class="container">
        <h2 class="text-center">Catalogs List</h2>
        <router-link :to="{name: 'CreateCatalog'}" class="btn btn-success">Create Catalog</router-link>
        <table class="table table-striped mt-2">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="catalog in catalogs" :key="catalog.id">
                    <td>{{ catalog.id }}</td>
                    <td>{{ catalog.name }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'EditCatalog', params: { id: catalog.id }}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deleteCatalog(catalog.id)">Delete</button>
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
                catalogs: []
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
            deleteCatalog(id) { 
                this.axios
                    .delete(process.env.VUE_APP_BASEURL + `api/catalogs/${id}`)
                    .then(response => { // eslint-disable-line no-unused-vars
                        let i = this.catalogs.map(data => data.id).indexOf(id);
                        this.catalogs.splice(i, 1)
                    });
            }
        }
    }
</script>