<template>
    <div>
        <Link to="products">Volver</Link>
        <h1 class="text-3xl uppercase font-bold text-center my-10">Nuevo Producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="mt-10 p-10 2xl:w-2/4">
                <FormKit type="form" submit-label="Agregar producto"
                    incomplete-message="No se pudo enviar revisa los mensajes" :value="formData" @submit="submitHandler">

                    <FormKit type="text" label="Nombre" name="name" validation="required" placeholder="Nombre del producto"
                        :validation-messages="{
                            required: 'El producto es Obligatorio'
                        }" v-model.trim="formData.name" />

                    <FormKit type="file" label="Imagen del Producto" name="image" validation="required"
                        :validation-messages="{
                            required: 'La imagen es Obligatoria'
                        }" accept="image/png, image/jpeg" multiple="false" @change="onFileChange"
                        v-model.trim="formData.image" />

                    <div v-if="isImageUploaded">
                        <p class="font-bold">Imagen Cargada</p>
                        <img :src="url" class="w-32" alt="nueva-imagen-producto">
                    </div>


                    <FormKit type="select" label="Categoria" name="category" validation="required"
                        :validation-messages="{ required: 'Cada producto debe tener una categoria' }"
                        :options="products.categoryOptions" v-model.number="formData.category" />

                    <FormKit type="number" label="Precio" name="price" validation="required"
                        placeholder="Importe del Producto" :validation-messages="{
                            required: 'El precio es Obligatorio'
                        }" min="1" v-model.number="formData.price" />

                    <FormKit type="number" label="Disponibles" name="availability" validation="required"
                        placeholder="Cantidad disponible" :validation-messages="{
                            required: 'La disponibilidad es Obligatoria'

                        }" min="1" v-model.number="formData.availability" />
                </FormKit>
            </div>
        </div>


    </div>
</template>

<script setup>
import Link from '../../components/Link.vue'
import useImage from '../../composables/useImage'
import { useProductsStore } from '../../stores/products'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
    name: '',
    image: '',
    category: '',
    price: '',
    availability: '',

})

const { onFileChange, url, isImageUploaded } = useImage()
const products = useProductsStore()

const submitHandler = async (data) => {
    try {
        const { image, ...rest } = data
        data = { ...rest, image: url.value }
        await products.createProduct(data)
        router.push({ name: 'products' })
    } catch (error) {
        console.log(error)
        return
    }
}

</script>

<style  scoped></style>