<template>
    <RouterLink :to="{ name: to }" class="rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10 mr-5 align-middle ">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: String
})

</script>

<style scoped></style>