<template>
    <div class="border-t border-gray-200 space-y-6 py-6">
        <h2 class="text-2xl font-black">
            Detalles de Ventas:
        </h2>
        <p class="text-xl font-black text-gray-500">
            Productos Vendidos:
        </p>

        <ul role="list"
        class="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500">
        
        <li v-for="item in sale.items" :key="item.id"
        class="flex space-x-6 py-6"
        >
        <img :src="item.image" class="w-24 h-24 flex-none rounded-md" :alt="'imagen de ' + item.name">
        
        <div class="flex-auto space-y-2">
            <h3 class="text-gray-900">{{ item.name }}</h3>
            <p>{{ formatCurrency(item.price) }}</p>
            <p>Cantidad:{{ item.quantity }}</p>
        </div>

    </li>
    </ul>



        <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
            <Amount>
                <template #label>
                    Subtotal:
                </template>

                    {{ formatCurrency(sale.subtotal) }}

            </Amount>
            <Amount v-if="sale.discount">
                <template #label>
                    Descuento:
                </template>

                    {{ formatCurrency(+sale.discount) }}

            </Amount>

            <Amount>
                <template #label>
                    Total a Pagado:
                </template>
                    {{ formatCurrency(+sale.total)}}
            </Amount>
        </dl>
  

    </div>

    
</template>

<script setup>
import { formatCurrency } from '../helpers'
import Amount from './Amount.vue';

defineProps({
    sale: Object
})

</script>

