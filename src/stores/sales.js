import { ref , computed } from "vue";
import { defineStore } from "pinia";
import { query , where , collection } from "firebase/firestore";
import { useFirestore , useCollection } from "vuefire"

export const useSalesStore = defineStore("sales", () => {

    const date = ref('')
    const db = useFirestore()

    const salesSource = computed(() => {
        if(date.value) {
            const q = query(collection(db, "sales"), where("date", "==", date.value))
            return q
        }
    })

    const salesCollection = useCollection(salesSource)

    const isDateSelected = computed(() => date.value)

    const totalSalesOfDay = computed(() => {

        if(salesCollection.value) {
            return salesCollection.value.reduce((total, sale) => total + sale.total, 0)
        }
 
    })
    
    return {
        date,
        isDateSelected,
        salesCollection,
        totalSalesOfDay
    }
})