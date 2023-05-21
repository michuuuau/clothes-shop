<script setup>
import Header from '../components/Header.vue'
import Menu from "../components/Menu.vue"
import MainContent from '../components/MainContent.vue';
</script>

<template>
  <div class="content-container">
    <Menu></Menu>
    <MainContent></MainContent>
  </div>
</template>
<style>
.content-container {
  display: flex;
}
</style>
