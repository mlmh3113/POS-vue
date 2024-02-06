import { defineStore } from "pinia";
import swal from "sweetalert";
import { ref, computed , watchEffect } from "vue";
import { useCouponStore } from "./coupons";
import { collection , addDoc , runTransaction , doc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { getCurrentDate } from "../helpers";

export const useCartStore = defineStore("cart", () => {

  const db = useFirestore()

  const coupon = useCouponStore()

  const items = ref([]);
  const subtotal = ref(0);
  const impuesto = 0.21
  const total = ref(0);

  watchEffect(() => {
    subtotal.value = Number((items.value.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2))
      total.value = Number(((subtotal.value + (subtotal.value * impuesto)) - coupon.discount).toFixed(2))
  })

  

  function addItem(item) {
    if (!items.value.some((i) => i.id === item.id)) {
      items.value.push({ ...item, quantity: 1, id: item.id });
    } else {
      swal("El producto ya esta en el carrito");
    }
  }

  const isEmpty = computed(() => {
    return items.value.length === 0;
  });

  function updateQuantity(id, quantity) {
    items.value = items.value.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
  }

  const updateSubtotal = () => {
    subtotal.value = items.value.map((item) => item.price * item.quantity)
  }

  const removeItem = (id) => {
    items.value = items.value.filter((item) => item.id !== id);
  }

  const $reset = () => {
    items.value = []
    subtotal.value = 0
    total.value = 0
  }

  const checkout = async () => {
    try {
      await addDoc(collection(db, "sales"),{
        items: items.value.map(item =>{
          const { availability, category, ...data } = item
          return data
        }),
        subtotal: subtotal.value,
        taxes: impuesto,
        discount: coupon.discount,
        total: total.value,
        date : getCurrentDate()
      })

      items.value.forEach(async (item) => {
        const productRef = doc(db, "products", item.id)
        await runTransaction(db, async (transaction) => {
          const currentProduct = await transaction.get(productRef)
          const availability = currentProduct.data().availability - item.quantity
          transaction.update(productRef, { availability })
        })
      })

      swal("Gracias por su compra")
      $reset()
      coupon.$reset()
    } catch (error) {
      console.log(error);
      swal("Error al procesar la compra")
    }
  }
      

  return {
    items,
    addItem,
    isEmpty,
    updateQuantity,
    subtotal,
    updateSubtotal,
    removeItem,
    total,
    impuesto,
    checkout

  };
});
