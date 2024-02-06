<template>

    <p class="text-center text-3xl text-gray-600" v-if="cartStore.isEmpty">Carrito vacío</p>

    <div v-else>
        <p class="capitalize text-center text-4xl pb-10" >resumen de venta </p>
        <ul role="list" class="divide-y divide-gray-200 mt-6">

            <ShoppingCardItem v-for="item in cartStore.items" :key="item.id" :item="item" />
            

        </ul> 
        <dl class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
            <Amount>
                <template #label>
                    Subtotal:
                </template>

                    {{ formatCurrency(cartStore.subtotal) }}

            </Amount>
            <Amount>
                <template #label>
                    Impuestos:
                </template>

                    {{ formatCurrency(+cartStore.subtotal * cartStore.impuesto) }}

            </Amount>
            <Amount v-if="couponStore.discount">
                <template #label>
                    Descuento:
                </template>

                    -{{ formatCurrency(+couponStore.discount) }}

            </Amount>
            <Amount>
                <template #label>
                    Total a Pagar:
                </template>
                    {{ formatCurrency(+cartStore.total)}}
            </Amount>
        </dl>
        <CouponForm />

        <button
        @click="cartStore.checkout()"
        class="w-full p-3 bg-green-500 text-white font-bold hover:bg-green-600 mt-10">
            Confirmar Compra
        </button>

    </div>

</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useCouponStore } from '../stores/coupons'
import ShoppingCardItem from './ShoppingCardItem.vue'
import Amount from './Amount.vue'
import CouponForm from './CouponForm.vue'
import { formatCurrency  } from '../helpers'

const cartStore = useCartStore()
const couponStore = useCouponStore()





</script>

