<template>
  <v-container v-if="isLoggedIn">
    <!-- Your CRUD screen content goes here -->
  </v-container>
  <v-container v-else>
    <h1>Please login to access the dashboard.</h1>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;
</script>
