<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div>
        <div class="product">
            <img alt="logo" class="logo" src="@/assets/product1.png" width="125" height="125" />
            <p>{{ props.data.name }}</p>
            <p>{{ props.data.price }}</p>
            <button>Dodaj</button>
        </div>
    </div>
</template>
<style>
.product {
    border: 1px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
}
</style>