<template>
    <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
        <div>
            <Logo />
        </div>

        <nav class="flex justify-center">

            <RouterLink :to="{ name: 'products' }" class="text-slate-100 hover:text-green-400 mr-5 my-auto ">Productos
            </RouterLink>
            <RouterLink :to="{ name: 'sales' }" class="text-slate-100 hover:text-green-400 mr-5 my-auto ">Ventas
            </RouterLink>
            <Link to="shop" class="text-slate-100 hover:text-green-400">Ir a Tienda</Link>


        </nav>
    </header>
</template>
    
<script setup>
import Link from './Link.vue'
import Logo from './Logo.vue'
import { RouterLink } from 'vue-router'

</script>
    
<style scoped></style>