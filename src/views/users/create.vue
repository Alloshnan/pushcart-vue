<template>
    <div class="container">
        <h3 >Create User</h3>
        <form @submit.prevent="addUser">
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
            <button type="submit" class="btn btn-primary">Create</button>
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
                .get(process.env.VUE_APP_BASEURL + 'api/user-types/')
                .then(response => {
                    this.types = response.data;
                });
        },
        methods: {
            addUser() {
                this.axios
                    .post(process.env.VUE_APP_BASEURL + 'api/users', this.user)
                    .then(response => ( // eslint-disable-line no-unused-vars
                        this.$router.push({ name: 'Users' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>