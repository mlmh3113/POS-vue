<template>

    <AdminNav />

    <div class="py-32 container mx-auto lg:min-h-screen ">
        <RouterView />
    </div>

</template>

<script setup>
import AdminNav from '@/components/AdminNav.vue';
import { RouterView } from 'vue-router';

</script>

<style  scoped>

</style>