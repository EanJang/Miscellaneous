<template>
  <header class="gnb">
    <span class="mdi mdi-account-outline btn"></span>
    <!-- tmp logout button -->
    <button class="logoutBtn" @click="logout">LOG OUT</button>
  </header>
</template>

<script setup lang="ts">
import { inject } from "vue";
const logout = inject("logout") as () => void;
</script>

<style lang="scss">
// tmp logout button
.logoutBtn {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
