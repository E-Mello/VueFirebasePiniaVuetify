<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <!-- Sidebar content -->
        <v-navigation-drawer v-model="drawer" app>
          <!-- Sidebar menu items -->
          <v-list dense>
            <v-list-item v-for="item in menuItems" :key="item.title" :to="item.route" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="9">
        <!-- Page content -->
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { ref } from 'vue';
const drawer = ref(true);
const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
  { title: 'Sticky Note', icon: 'mdi-sticky-note', route: '/stickynote' },
  { title: 'Home', icon: 'mdi-home', route: '/home' },
];
</script>
