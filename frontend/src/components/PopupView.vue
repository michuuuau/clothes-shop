<script setup>
import Button from "./Button.vue";

const props = defineProps({
    popupVisible: {
        type: Boolean,
        required: true,
    },
    onClose: {
        type: Function,
        required: true,
    },
});
</script>
<template>
    <div v-if="popupVisible" class="popup">
        <div class="popup-content">
            <div>
                <div style="float: right">
                    <Button @click="props.onClose">
                        <template #body>
                            <p>X</p>
                        </template></Button>
                </div>
                <div style="padding: 50px">
                    <slot name="body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    padding: 20px;
    width: 500px;
    border-radius: 5px;
}
</style>
