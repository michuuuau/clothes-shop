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
                <router-link :to="{ name: 'shirt' }">
                    <p>Koszulki</p>
                </router-link>
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
                <router-link :to="{ name: 'dress' }">
                    <p>Sukienki</p>
                </router-link>
            </template>
        </Button>
        <Button>
            <template #body>
                <router-link :to="{ name: 'jumper' }">
                    <p>Bluzy</p>
                </router-link>
            </template>
        </Button>
        <Button>
            <template #body>
                <router-link :to="{ name: 'jacket' }">
                    <p>Kurtki</p>
                </router-link>
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
    margin: 10px 10px 10px 0;

}
</style>