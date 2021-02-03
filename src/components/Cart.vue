<template>
    <button class="btn btn-primary float-right" data-toggle="modal" data-target="#Cart">Cart ({{ numInCart }})</button>
    <div id="Cart" class="modal fade">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <h5 class="modal-title">Shopping cart</h5>
                    
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Catalog</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in cart" :key="product.id">
                                <td>{{ product.name }}</td>
                                <td>{{ product.catalog.name }}</td>
                                <td>&#8369; {{ product.price }}</td>
                                <td>
                                    <button class="btn btn-md btn-danger" @click="removeFromCart(index)">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th class="text-right">Total</th>
                                <th>&#8369; {{ total }}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                    <button class="btn btn-secondary float-right" data-dismiss="modal"> Close
                    </button>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
export default {
    name: 'Cart',
    computed: {
        inCart() { return this.$store.getters.inCart; },
        numInCart() { return this.inCart.length; },
        
        cart() {
            return this.$store.getters.inCart.map((cartProduct) => 
            {
                return this.$store.getters.forSale.find((forSaleProduct) => 
                {
                    return cartProduct === forSaleProduct.id;
                });
            });
        },
        total() {
            return this.cart.reduce((total, product) => total + Number(product.price), 0);
        },
    },
    methods: {
        removeFromCart(index) {
            this.$store.dispatch('removeFromCart', index);
        },
    },
};
</script>