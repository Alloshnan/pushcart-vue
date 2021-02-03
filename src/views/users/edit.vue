<template>
    <div class="container">
        <h3>Edit User</h3>
            <form class="" @submit.prevent="updateUser">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="user.password" required>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select class="form-control" v-model="user.user_type_id">
                        <option v-for="type in types" :key="type.id" v-bind:value="type.id">{{ type.name }}</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
            </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                user: {},
                types: {}
            }
        },
        created() {
            this.axios
                .get(process.env.VUE_APP_BASEURL + `api/users/${this.$route.params.id}`)
                .then((response) => { // eslint-disable-line no-unused-vars
                    this.user = response.data; // eslint-disable-line no-unused-vars
            });
            this.axios
                .get(process.env.VUE_APP_BASEURL + 'api/user-types/')
                .then(response => {
                    this.types = response.data;
            });
        },
        methods: {
            updateUser() {
                this.axios
                    .patch(process.env.VUE_APP_BASEURL + `api/users/${this.$route.params.id}`, this.user)
                    .then((response) => { // eslint-disable-line no-unused-vars
                        this.$router.push({ name: 'Users' });
                    });
            }
        }
    }
</script>