<template>
    <div class="container">
        <h2 class="text-center">Users List</h2>
        <router-link :to="{name: 'CreateUser'}" class="btn btn-success">Create User</router-link>
        <table class="table table-striped mt-2">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.type.name }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link :to="{name: 'EditUser', params: { id: user.id }}" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
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
                users: []
            }
        },
        created() {
            this.axios
                .get(process.env.VUE_APP_BASEURL + 'api/users/')
                .then(response => {
                    this.users = response.data;
                });
        },
        methods: {
            deleteUser(id) { 
                this.axios
                    .delete(process.env.VUE_APP_BASEURL + `api/users/${id}`)
                    .then(response => { // eslint-disable-line no-unused-vars
                        let i = this.users.map(data => data.id).indexOf(id);
                        this.users.splice(i, 1)
                    });
            }
        }
    }
</script>