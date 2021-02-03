import { createStore } from 'vuex'

export default createStore({
	state: {
		isLoggedIn : false,
		isAdmin : false,
		//----------------------------------------------------
		
		forSale: [],
		inCart: [],
		
	},
	mutations: {
		setLogin (state,boolean) {
			state.isLoggedIn = boolean
		},
		setAdmin (state,boolean) {
			state.isAdmin = boolean
		},
		//----------------------------------------------------
		GET_FOR_SALE(state, array) { state.forSale = array },
		ADD_TO_CART(state, id) { state.inCart.push(id); },
		REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); }
	},
	actions: {
		getForSale(context, array) { context.commit('GET_FOR_SALE', array); },
		addToCart(context, id) { context.commit('ADD_TO_CART', id); },
		removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
	},
	getters: {
		loginState: state => {
			return state.isLoggedIn
		},
		adminState: state => {
			return state.isAdmin
		},
		//----------------------------------------------------
		forSale: state => state.forSale,
		inCart: state => state.inCart,
	},
	modules: {
	}
})
