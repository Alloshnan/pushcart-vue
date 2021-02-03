<template>
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ catalog_name }}</h6>
            <p class="card-text">{{ description }}</p>
            <h5 class="card-title"><strong>&#8369; {{ price }}</strong></h5>
            <button class="btn btn-block btn-success" type="button" @click="addToCart(id)">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    props: [
        'id', 
        'name', 
        'description', 
        'catalog_name', 
        'price'
    ],
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id);
        },
    },
};
</script>