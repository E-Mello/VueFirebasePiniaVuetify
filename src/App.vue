<template>
  <v-app class="myStyle">
    <v-app-bar color="primary">
      <v-toolbar-title>Usuário logado: {{ authStore.displayName }}</v-toolbar-title>
      <v-spacer>
        <v-btn v-if="authStore.user" @click="logout">Logout</v-btn>
      </v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <v-col cols="12" md="6">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()

// const user = authStore.user


const logout = () => {
  authStore.logout()
  router.replace('/')
}
</script>

<style scoped>
.myStyle {
  background: linear-gradient(to bottom, #2c3e50, #000000);
  height: 100vh;
}
</style>

