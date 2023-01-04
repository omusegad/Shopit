<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
console.log(cartStore.items);
</script>

<template>
  <main class="container">
    <div class="row" v-if="cartStore.totalCartItem">
        <h4>Cart ( {{ cartStore.totalCartItem }} )</h4>

      <div class="col-9">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Items</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ item }, i) in cartStore.items" :key="item.id">
                <td></td>
                <td>
                  <div class="prod-img">
                    <img :src="item.image" />
                  </div>
                </td>
                <td class="pt-2 text-start">{{ item.title }}</td>
                <td>Ksh {{ item.price }}</td>
                <td class="text-center">
                  <div class="p-3">
                    <div
                      class="input-group w-auto justify-content-end align-items-center"
                    >
                      <input
                        type="button"
                        value="-"
                        class="button-minus border icon-shape icon-sm mx-1"
                      @click="removeQuantity"/>
                      <input
                        type="number"
                        step="1"
                        max="100"
                        min="0"
                        v-model="cartStore.items[i].quantity"
                        name="quantity"
                        class="quantity-field text-center w-25"
                      />
                      <input
                        type="button"
                        value="+"
                        class="button-plus border icon-sm lh-0"
                        @click="i"/>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="col-5 text-end">
                    <button class="btn btn-outline-danger" @click="cartStore.removeItemFromCart(item)"> x </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-3 pt-5">
        <div class="card">
          <div class="card-body">
            <ul>
              <ul>
                <li>subTotal : Ksh {{ cartStore.subTotal }}</li>
                <li>Tax : Ksh {{ cartStore.taxTotal }}</li>
                <li>Total : Ksh {{ cartStore.total }}</li>
              </ul>
            </ul>
            <button class="btn btn-info">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">
        <h4 class="text-center">Your cart is empty</h4>
      </div>
      <div class="col-12 ms-auto text-center">
        <h4>
          Cart is empty , Continue
          <router-link :to="{ name: 'home' }" class="btn btn-outline-success">
            Shopping
          </router-link>
        </h4>
      </div>
    </div>
  </main>
</template>
