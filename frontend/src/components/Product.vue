<script setup>
import { ref } from "vue";
import PopupView from "./PopupView.vue";

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
    onAdd: {
        type: Function,
        required: true,
    },
});
const popupVisible = ref(false);

function handleAddProduct() {
    props.onAdd(props.data);
}
function showDetails() {
    console.log("showDetails");
    popupVisible.value = true;
}
function handleClosePopup() {
    popupVisible.value = false;
}
</script>

<template>
    <div>
        <div>
            <div class="product" @click="showDetails">
                <img alt="logo" class="logo" :src="props.data.image" width="200" height="200" />
                <p>{{ props.data.name }}</p>
                <p>{{ props.data.price }}</p>
                <!-- <button @click="handleAddProduct">Dodaj</button> -->
            </div>
        </div>
        <PopupView :popup-visible="popupVisible" :on-close="handleClosePopup">
            <template #body>
                <div class="product-details">
                    <img alt="logo" class="logo" :src="props.data.image" width="200" height="200" />
                    <p style="font-weight: bold">{{ props.data.name }}</p>
                    <p>{{ props.data.price }}</p>
                    <p style="text-align: center; margin-bottom: 20px">
                        {{ props.data.description }}
                    </p>
                    <button @click="handleAddProduct">Dodaj</button>
                </div>
            </template>
        </PopupView>
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

.product-details {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
