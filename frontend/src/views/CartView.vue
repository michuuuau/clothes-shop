<script setup>
import Button from "../components/Button.vue";
import { useCartStore } from "../stores/cart";
const cartStore = useCartStore();
</script>
<template>
    <div>
        <div class="products">
            <div v-for="product in cartStore.cartItems">
                <p>{{ product.name }}</p>
                <div style="display: flex">
                    <p style="margin-right: 20px;">{{ product.quantity }}</p>
                    <p>{{ product.price }}</p>
                </div>
            </div>
            <hr />
        </div>
        <div class="summary">
            <p>Suma:

                {{ cartStore.cartTotal }}</p>
        </div>
    </div>
    <hr>
    <div class="buy">
        <Button>
            <template #body>
                <p>KUP TERAZ</p>
            </template>
        </Button>
    </div>
</template>
<style scoped>
.products>* {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1
}

.summary {
    display: flex;
    justify-content: flex-end;
    flex: 1
}

.buy {
    display: flex;
    justify-content: flex-end;
    flex: 1
}
</style>