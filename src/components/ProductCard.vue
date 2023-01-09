<script setup>
import axios from "axios";
import ProductsAPI from "@/services/ProductsAPI";
import { ref, onMounted, computed, onErrorCaptured } from "vue";
import { useCartStore } from "@/stores/cart";

const products = ref([]);
const errorMessage = ref(null);
const cartStore  = useCartStore();

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    products.value = response.data;
    //console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

onMounted(()=> getProducts())

onErrorCaptured(() => {
  errorMessage.value = "Opps sorry, Something went wrong";
});
</script>

<template>
  <!-- {{ products }} -->
  <div class="col-4 mb-3" v-for="product in products" :key="product.id">
    <div class="card">
      <div class="card-body">
        <div class="card-blok">
          <div class="card-img">
            <router-link :to="{name: 'product', params: {id: product.id}}">
              <img :src="product.image" />
            </router-link>
          </div>
          <h5 class="card-head pb-2 pt-2">
            <router-link :to="{name: 'product', params: {id: product.id}}">
             {{ product.title }}
            </router-link>
          </h5>
          <h6 class="price-bx">
            Ksh {{ product.price }}
            </h6>
          <div class="rating">Rating: {{ product.rating.rate }}</div>
          <button class="mt-3 btn btn-outline-primary" @click="cartStore.addProductToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
