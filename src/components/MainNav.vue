<template>
    <header class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10">
        <div>
           <Logo />
        </div>
        <nav class="flex justify-center">
            <Link to="admin" class="text-slate-100 hover:text-green-400">Administrar</Link>
        </nav>
    </header>
</template>

<script setup>
import Link from './Link.vue'
import Logo from './Logo.vue'

</script>

<style scoped></style>