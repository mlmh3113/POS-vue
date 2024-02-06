import { defineStore } from 'pinia'
import { ref , watch } from 'vue'
import { useCartStore } from './cart'


export const useCouponStore = defineStore('coupons', ()=> {

    const cart = useCartStore()
    
    const couponInput = ref('')
    const validCoupons = ref()
    const discountPercentage = ref(0)
    const discount = ref(0)

    const couponList = [
        {name:'10DESCUENTO', discount: .10},
        {name:'15DESCUENTO', discount: .15},
        {name:'20DESCUENTO', discount: .20},
    ]

    watch(discountPercentage, () => {
        discount.value = (cart.total * discountPercentage.value).toFixed(2)
    })

    const couponValidationMessage = ref(0)

    const applyCoupon = () => {
        if(!couponInput.value){
            swal("Ingresa un cupón")
            return
        }else{
            if(couponList.some(coupon => coupon.name === couponInput.value.toUpperCase())){
                couponValidationMessage.value = 'Cupon valido'
                validCoupons.value = true
                discountPercentage.value = couponList.find(coupon => coupon.name === couponInput.value.toUpperCase()).discount
                console.log(discountPercentage.value);
            }else{
                validCoupons.value = false
                couponValidationMessage.value = 'Cupon no valido' 
            }
        }
    }

    const $reset = () => {
        couponInput.value = ''
        validCoupons.value = null
        discountPercentage.value = 0
        discount.value = 0
    }




    return {
        couponInput,
        applyCoupon,
        couponValidationMessage,
        validCoupons,
        discountPercentage,
        discount,
        $reset
    }
})