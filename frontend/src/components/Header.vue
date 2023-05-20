<script setup>
import Logo from "./Logo.vue";
import SearchInput from "./SearchInput.vue";
import Button from "./Button.vue"
</script>
<template>
    <div class="header">
        <Logo></Logo>
        <div class="container">
            <div>
                <SearchInput></SearchInput>
            </div>
            <Button>
                <template #body>
                    <img alt="logo" class="logo" src="@/assets/basket.png" width="20" height="20" />
                </template>
            </Button>
        </div>
    </div>
</template>
<style scoped>
.header {
    background-color: #f6f4d7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
}

.container {
    display: flex;
    align-items: center;
}

.container:first-child {
    margin-right: 20px;
}
</style>
