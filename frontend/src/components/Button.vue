<template>
    <button class="button">
        <slot name="body"></slot>
    </button>
</template>
<style scoped>
.button {
    background-color: #000000;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: white;
}
</style>