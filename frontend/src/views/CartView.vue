<script setup>
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>
<template>
    <div>
        <div v-for="product in cartStore.cartItems">
            <p>{{ product.name }}</p>
            <p>{{ product.quanity }}</p>
        </div>
    </div>
</template>