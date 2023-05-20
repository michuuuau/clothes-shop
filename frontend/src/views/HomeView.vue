<script setup>
import Header from '../components/Header.vue'
import Menu from "../components/Menu.vue"
import MainContent from '../components/MainContent.vue';
</script>

<template>
  <main>
    <Header></Header>
    <div class="content-container">
      <Menu></Menu>
      <MainContent></MainContent>
    </div>
  </main>
</template>
<style>
.content-container {
  display: flex;
}
</style>
