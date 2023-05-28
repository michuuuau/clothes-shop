<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import productService from "../services/ProductService";
import { useCartStore } from "../stores/cart";
import Product from "./Product.vue";

const products = ref([]);
const loading = ref(true);
const route = useRoute();
const cartStore = useCartStore();

async function getProductsDetails() {
    const response = await productService.getProducts(
        route.name,
        route.query.name
    );
    products.value = response.data;
}

onMounted(async () => {
    await getProductsDetails();
    loading.value = false;
});

watch(
    () => route.name,
    async () => {
        loading.value = true;
        await getProductsDetails();
        loading.value = false;
    }
);

watch(
    () => route.query.name,
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
<style scoped>
.main {
    display: flex;
    flex: 1;
}

.products {
    display: flex;
    flex-wrap: wrap;
}

.products>* {
    margin: 10px;
}
</style>
