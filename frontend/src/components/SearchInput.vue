<script setup>
import Button from "./Button.vue"
import Input from "./Input.vue"
</script>
<template>
    <div class="container">
        <Input />
        <Button>
            <template #body>
                <p>SZUKAJ</p>
            </template>
        </Button>
    </div>
</template>
