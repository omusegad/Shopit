<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
console.log(cartStore.items);

</script>

<template>
    <div class="row">
        <div class="col-lg-6">
            <img :src="cartStore.item.img" />
        </div>
        <div class="col-lg-6">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <h5>Price: Ksh {{ product.price }}</h5>
            <h5>Rating: {{ product.rating.rate }}</h5>
            <button class="btn btn-outline-primary" @click="cartStore.addToCart(product)">Add to Cart</button>
        </div>
    </div>

</template>