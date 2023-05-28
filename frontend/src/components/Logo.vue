<template>
    <div class="logo">
        <img @click="navigateToAll()" alt="logo" class="logo" src="@/assets/logo.png" width="125" height="125" />
        <h1>Tolando</h1>
    </div>
</template>
<style scoped>
.logo {
    display: flex;
    align-items: center;
    font-size: x-large;
    color: black;
}
</style>
<script>
export default {
    methods: {
        navigateToAll() {
            this.$router.push('/all');
        }
    }
};
</script>