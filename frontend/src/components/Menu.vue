<script setup>
import Button from "./Button.vue"
</script>
<template>
    <div class="menu">
        <Button>
            <template #body>
                <router-link :to="{ name: 'all' }">
                    <p>Zobacz wszytskie</p>
                </router-link>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Koszulki</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <router-link :to="{ name: 'jeans' }">
                    <p>Spodnie</p>
                </router-link>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Sukienki</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Bluzy</p>
            </template>
        </Button>
        <Button>
            <template #body>
                <p>Kurtki</p>
            </template>
        </Button>
    </div>
</template>
<style scoped>
.menu {
    display: flex;
    flex-direction: column;
}

.menu>* {
    margin: 10px 0 10px 0;
}
</style>