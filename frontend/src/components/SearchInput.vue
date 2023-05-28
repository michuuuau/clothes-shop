<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Button from "./Button.vue";
import Input from "./Input.vue";

const text = ref("");
const router = useRouter();

const searchProduct = () => {
    router.push({ path: "all", query: { name: text.value } });
};
</script>
<template>
    <div class="container">
        <Input :value="text" @input="(event) => (text = event.target.value)" />
        <Button @click="searchProduct">
            <template #body>
                <p>SZUKAJ</p>
            </template>
        </Button>
    </div>
</template>
