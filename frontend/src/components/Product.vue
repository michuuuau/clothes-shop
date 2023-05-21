<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    onAdd: {
        type: Function,
        required: true,
    }
});
function handleAddProduct() {
    props.onAdd(props.data)
}
</script>

<template>
    <div>
        <div class="product">
            <img alt="logo" class="logo" :src="props.data.image" width="200" height="200" />
            <p>{{ props.data.name }}</p>
            <p>{{ props.data.price }}</p>
            <button @click="handleAddProduct">Dodaj</button>
        </div>
    </div>
</template>
<style>
.product {
    border: 2px;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px;
    margin: 5px 5px 0px 15px;
}
</style>