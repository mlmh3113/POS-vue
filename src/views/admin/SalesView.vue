<template>
    <h1 class="text-3xl uppercase font-bold text-center mb-10">Resumen de Ventas</h1>

    <div class="md:flex md:items-start gap-5">
        <div class="md:w-1/2 lg:w-1/3  flex justify-center">
            <VueTailwindDatePicker class="shadow-lg" i18n="es-mx" as-single="true" no-input="true" v-model="salesStore.date"
                :formatter="formatter" />
        </div>
        <div class="md:w-1/2 lg:w-2/3 space-y-5 lg:h-screen lg:overflow-y-scroll p-5 pb-10 bg-slate-200 rounded">

            <p v-if="salesStore.isDateSelected" class="text-center text-3xl capitalize font-semibold">ventas de la fecha
                <span class=" font-bold ">{{ salesStore.date }}</span></p>
            <p v-else class="text-center text-3xl capitalize font-semibold">Seleccione una fecha</p>
            <div v-if="salesStore.salesCollection.length && salesStore.isDateSelected" class="space-y-5">
                <p class="text-3xl capitalize font-semibold py-5 pl-4 rounded bg-green-400">Total del Dia: {{ formatCurrency(salesStore.totalSalesOfDay) }}</p>
                <SaleDetail v-for="sale in salesStore.salesCollection" :key="sale.id" :sale="sale" />
            </div>
            <p class="text-center text-3xl capitalize font-semibold text-red-500 mt-5" v-else >No hay ventas en este dia</p>

        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue'
import VueTailwindDatePicker from 'vue-tailwind-datepicker'
import { useSalesStore } from '../../stores/sales'
import SaleDetail from '../../components/SaleDetail.vue'
import { formatCurrency } from '../../helpers'

const salesStore = useSalesStore()


const formatter = ref(
    {
        date: 'DD/MM/YYYY',
        month: 'MMMM',
    }
)

</script>

<style  scoped></style>