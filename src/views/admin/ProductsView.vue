<template>
    <div>

        <Link to="new-product">Nuevo Producto</Link>
        <h1 class="text-3xl uppercase font-bold text-center my-10">Productos</h1>


        <h3 v-if="products.noResults" class="text-center text-3xl uppercase text-red-500 font-semibold">no se encontraron resultados</h3>

        <ul v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5" role="list">

            <Product v-for="product in products.productsCollection" :key="product.id" :product="product" />

        </ul>
    </div>
</template>

<script setup>
import Link from '../../components/Link.vue'
import { useProductsStore } from '../../stores/products'
import Product from '../../components/Product.vue'


const products = useProductsStore()




</script>

<style  scoped></style>