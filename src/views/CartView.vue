<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
console.log(cartStore.totalCartItem)

</script>

<template>
  <main class="container">
   <div class="row">
     <div class="col-10 ms-auto" v-if="cartStore.totalCartItem">
        <h4>Cart ( {{cartStore.totalCartItem}} )</h4>
       <div class="card mt-4" v-for="product in cartStore.items" :key="product.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                       <div class="prod-img">
                        <img :src="product.item.image" /> 
                       </div>
                    </div>
                    <div class="col-lg-6">
                        <h3>Cart</h3>
                        <hr>
                        <h5>{{ product.item.title }}</h5>
                        <h5>Ksh {{ product.item.price }}</h5>

                    </div>
                </div>
            </div>
       </div>
       <div class="row mt-4" >
            <div class="col-6 text-start">
                <button class="btn btn-outline-primary">Remove</button>
            </div>
            <div class="col-6 text-text-end">
                <button class="btn btn-outline-primary">Checkout</button>
            </div>
        </div>
     </div>
        <div class="col-10 ms-auto text-center" v-else>
            <h4>Cart is empty , Continue  
                <router-link :to="{name: 'home'}" class="btn btn-outline-success">
                    Shopping
                 </router-link>
            </h4>
        </div>

   </div>

  
  </main>
</template>
