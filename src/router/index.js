import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import Products from '@/views/products/index.vue'
import CreateProduct from '@/views/products/create.vue'
import EditProduct from '@/views/products/edit.vue'

import Catalogs from '@/views/catalogs/index.vue'
import CreateCatalog from '@/views/catalogs/create.vue'
import EditCatalog from '@/views/catalogs/edit.vue'

import Users from '@/views/users/index.vue'
import CreateUser from '@/views/users/create.vue'
import EditUser from '@/views/users/edit.vue'

import Login from '@/views/Login'
import Logout from '@/views/Logout'

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard
	},

	{
		path: '/products',
		name: 'Products',
		component: Products
	},
	{
		path: '/products/create',
		name: 'CreateProduct',
		component: CreateProduct
	},
	{
		path: '/products/:id/edit',
		name: 'EditProduct',
		component: EditProduct
	},

	{
		path: '/catalogs',
		name: 'Catalogs',
		component: Catalogs
	},
	{
		path: '/catalogs/create',
		name: 'CreateCatalog',
		component: CreateCatalog
	},
	{
		path: '/catalogs/:id/edit',
		name: 'EditCatalog',
		component: EditCatalog
	},

	{
		path: '/users',
		name: 'Users',
		component: Users
	},
	{
		path: '/users/create',
		name: 'CreateUser',
		component: CreateUser
	},
	{
		path: '/users/:id/edit',
		name: 'EditUser',
		component: EditUser
	},

	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/logout',
		name: 'Logout',
		component: Logout
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	base: process.env.VUE_APP_BASEURL,
	routes
})

export default router


