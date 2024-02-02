<template>
    <div>
        <Link to="products">Volver</Link>
        <h1 class="text-3xl uppercase font-bold text-center my-10">Nuevo Producto</h1>

        <div class="flex justify-center bg-white shadow">
            <div class="mt-10 p-10 2xl:w-2/4">
                <FormKit type="form" submit-label="Agregar producto">

                    <FormKit type="text" label="Nombre" name="name" validation="required" placeholder="Nombre del producto"
                        :validation-messages="{
                            required: 'El producto es Obligatorio'
                        }" />

                    <FormKit type="file" label="Imagen del Producto" name="image" validation="required"
                        :validation-messages="{
                            required: 'La imagen es Obligatoria'
                        }" accept="image/png, image/jpeg" multiple="false" />

                    <FormKit type="select" label="Categoria" name="category" validation="required" :validation-messages="{
                        required: 'Cada producto debe tener una categoria'
                    }" 
                    :options="[1,2,3]"/>

                    <FormKit type="number" label="Precio" name="price" validation="required" placeholder="Importe del Producto"
                        :validation-messages="{
                            required: 'El precio es Obligatorio'
                        }" 
                        min="1"
                        />

                        <FormKit type="number" label="Disponibles" name="avaibility" validation="required" placeholder="Cantidad disponible"
                        :validation-messages="{
                            required: 'La disponibilidad es Obligatoria'
                
                        }" 
                        min="1"/>
                </FormKit>
            </div>
        </div>


    </div>
</template>

<script setup>
import Link from '../../components/Link.vue'

</script>

<style  scoped></style>