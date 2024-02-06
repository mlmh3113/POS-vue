<template>
    <p class="mt-5 py-5 font-bold border-t border-gray-200">
        Canjear un Cupon
    </p>

    <div class="flex">
        <input class="w-full p-2 bg-white border-gray-200  disabled:opacity-30" type="text" placeholder="Ingrese un Cupon"
        :disabled="couponStore.discount"
        v-model="couponStore.couponInput"
        >
        <button type="button" 
        @click="couponStore.applyCoupon"
        :disabled="couponStore.discount"
        class="p-3 bg-green-400 text-white font-bold hover:bg-green-500 disabled:opacity-30">Canjear</button>
    </div>
    <div>
        <p class="text-white w-full rounded text-center mt-2 font-semibold" :class="couponStore.validCoupons? 'bg-green-500' : 'bg-red-500'" 
        v-if="couponStore.couponValidationMessage">
            {{ couponStore.couponValidationMessage }}
        </p>
    </div>
</template>

<script setup>
import { useCouponStore } from '@/stores/coupons';
import {ref } from 'vue'



const couponStore = useCouponStore()



</script>

