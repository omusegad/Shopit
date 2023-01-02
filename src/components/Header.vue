<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
// console.log(cartStore.totalCartItem)

</script>
<template>
    <div class="container">
        <div class="row">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Commerce Shop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <!-- <a class="nav-link :active" aria-current="page" href="#">Home</a> -->
                        <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                        <RouterLink to="/about">About</RouterLink>
                        </li>
                        <li class="nav-item">
                        <RouterLink to="/about-us">About Us</RouterLink>
                        </li>
                    </ul>
                    <div>
                        <RouterLink to="/shopping-cart" class="btn btn-outline-success cart-bx">
                            Cart ({{cartStore.totalCartItem}})
                        </RouterLink>
                    </div>
                    </div>
                </div>
                </nav>
        </div>
    </div>
    <RouterView />
</template>
