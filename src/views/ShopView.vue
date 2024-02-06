<template>
  <MainNav />
  <main class=" pt-52 lg:pt-14 lg:flex lg:h-screen lg:overflow-y-hidden gap-2 ">


    
    <div class="lg:w-2/3 lg:screen lg:overflow-y-scroll pt-20 pb-32 px-10">
      <h1 class=" capitalize text-center text-4xl pb-10 ">nuestros productos</h1>
      <p v-if="noResults" class="text-center text-4xl">No se encontraron resultados</p>
      <div v-else 
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <ProductCard v-for="product in products.filteredProducts" :key="product.id" :product="product" />
      </div>
    </div>
    <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll pt-20 pb-32 px-10">
      <div>
        <ShoppingCard />  
      </div>
    </aside>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import MainNav from '@/components/MainNav.vue'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart';
import ProductCard from '@/components/ProductCard.vue'
import ShoppingCard from '@/components/ShoppingCard.vue';

const products = useProductsStore()
const cartStore = useCartStore()
const { filteredProducts , noResults } = storeToRefs(products)



</script>




<style lang="scss" scoped></style>