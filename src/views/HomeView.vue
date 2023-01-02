<script setup>
import ProductCategories from '@/components/ProductCategories.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <main class="container">
   <div class="row">
      <div class="container">
          <div class="row">
            <div class="col-2">
              <ProductCategories/>
            </div>
            <div class="col-10">
              <div class="row">
                <Suspense>
                  <template #default>
                    <ProductCard />
                  </template>
                  <template #fallback>
                    <div class="spinner-border text-success" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </template>
                </Suspense>
              </div>
            </div>
          </div>
      </div>
   </div>
  </main>
</template>
