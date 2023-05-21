<script setup>
import Button from "./Button.vue"
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>
<template>
    <div style="position: relative;">
        <Button>
            <template #body>
                <router-link :to="{ name: 'cart' }">
                    <img alt="logo" class="logo" src="@/assets/basket.png" width="20" height="20" />
                </router-link>
            </template>
        </Button>
        <p class="cart-badge">{{ cartStore.itemsInCart }}</p>
    </div>
</template>
<style scoped>
.cart-badge {
    background-color: red;
    color: white;
    position: absolute;
    right: -10px;
    bottom: -10px;
    border-radius: 90px;
    width: 20px;
    text-align: center;

}
</style>