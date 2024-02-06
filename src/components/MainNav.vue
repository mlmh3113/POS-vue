<template>
    <header class="px-10 py-5 bg-gray-700 flex flex-col md:flex-row justify-between absolute top-0 w-full z-10">
        <div>
           <Logo />
           <div class="flex flex-col md:flex-row md:gap-5 pt-4 text-white">
            <h2 class="text-lg font-extrabold">
                Filtros:
            </h2> 
            <div class="flex items-center gap-2"
            v-for="(product, index) in products.categories" :key="index"
            >
            <input 
            class="cursor-pointer h-4 w-4 rounded text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
            type="radio" name="category" :id="product.id" :value="product.id"
            :checked="products.selectedCategory === product.id"
            @change="products.selectedCategory = +$event.target.value"
            >
            <label :for="product.id">{{ product.name }}</label>
                
            </div>
            <div class="flex items-center gap-2">
                 <input
            class="cursor-pointer h-4 w-4 rounded text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
            type="radio" name="category" id="all" value="" @change="products.selectedCategory = +$event.target.value" >
            <label for="all">Todos</label>
            </div>
           
           </div>
        </div>
        <nav class=" flex my-auto pt-5">
            <Link to="sales" class="mx-auto text-slate-100 hover:text-green-400 w-full  text-center md:w-auto">Administrar</Link>
        </nav>
    </header>
</template>

<script setup>
import Link from './Link.vue'
import Logo from './Logo.vue'
import {useProductsStore} from '../stores/products'


const products = useProductsStore()




</script>

<style scoped></style>