<script setup>
import Button from './Button.vue';
</script>
<template>
    <div class="menu">
        <router-link :to="{ name: 'all' }">
            <Button>
                <template #body>
                    <p>Zobacz wszytskie</p>
                </template>
            </Button>
        </router-link>
        <router-link :to="{ name: 'shirt' }">
            <Button>
                <template #body>
                    <p>Koszulki</p>
                </template>
            </Button>
        </router-link>
        <router-link :to="{ name: 'jeans' }">
            <Button>
                <template #body>
                    <p>Spodnie</p>
                </template>
            </Button>
        </router-link>
        <router-link :to="{ name: 'dress' }">
            <Button>
                <template #body>
                    <p>Sukienki</p>
                </template>
            </Button>
        </router-link>
        <router-link :to="{ name: 'jumper' }">
            <Button>
                <template #body>
                    <p>Bluzy</p>
                </template>
            </Button>
        </router-link>
        <router-link :to="{ name: 'jacket' }">
            <Button>
                <template #body>
                    <p>Kurtki</p>
                </template>
            </Button>
        </router-link>
    </div>
</template>
<style scoped>
.menu {
    display: flex;
    flex-direction: column;
}

.menu>* {
    margin: 10px 10px 10px 0;
    background-color: #f6f4d7;
    display: flex;
}
</style>
