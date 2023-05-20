<script setup>
import Product from "./Product.vue"
import productService from "../services/ProductService";
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';


const products = ref([]);
const loading = ref(true);
const route = useRoute()

async function getProductsDetails() {
    const response = await productService.getProducts(route.name);
    products.value = response.data;
}

onMounted(async () => {
    await getProductsDetails();
    loading.value = false
});

watch(
    () => route.name,
    async () => {
        loading.value = true;
        await getProductsDetails();
        loading.value = false;
    }
);

</script>
<template>
    <div class="main">
        <div class="products">
            <p v-if="loading">Ładowanie...</p>
            <Product v-if="!loading" :data="value" v-for="value in products"></Product>
        </div>
    </div>
</template>
<style>
.main {
    display: flex;
    flex: 1
}

.products {
    display: flex;
    flex-wrap: wrap;
}

.products>* {
    margin: 10px;
}
</style>