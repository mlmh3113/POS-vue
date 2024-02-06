<template>
    <div
        class=" text-center sm:max-w-fit min-w-[230px] md:min-w-full mx-auto bg-white shadow rounded-2xl p-5 flex flex-col items-center relative">
        <img :src="product.image" class="w-32 h-32 object-cover rounded-xl" :alt="'imagen de ' + product.name">
        <div class="p-3 space-y-2 flex-col">
            <div class="flex flex-col   ">
                <h3 class="text-xl font-bold text-gray-800">{{ product.name }}</h3>
                <p class="text-gray-600 text-semibold"> Precio: {{ formatCurrency(product.price) }}</p>
                <p class="text-gray-600 text-semibold">Disponibles: {{ product.availability }}</p>
            </div>


            <button @click="cartStore.addItem(product)" class="absolute top-1 right-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-8 h-8 bg-indigo-600 rounded-full text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>

        </div>

    </div>
</template>

<script setup>
import { formatCurrency } from '../helpers'
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore()

defineProps({
    product: Object
})

</script>
