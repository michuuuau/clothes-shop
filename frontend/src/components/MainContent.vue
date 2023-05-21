<script setup>
import Product from "./Product.vue"
import productService from "../services/ProductService";
import { ref, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import { useCartStore } from "../stores/cart";



const products = ref([]);
const loading = ref(true);
const route = useRoute()
const cartStore = useCartStore();

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

function handleAddProduct(product) {
    cartStore.addProductToCart(product);
}

</script>
<template>
    <div class="main">
        <div class="products">
            <p v-if="loading">Ładowanie...</p>
            <Product v-if="!loading" :data="value" v-for="value in products" :on-add="handleAddProduct"></Product>
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