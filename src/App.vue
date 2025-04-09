<script setup>
import Navbar from "./components/Navbar.vue"
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const shouldShowNavbar = computed(
  () => route.name !== "Login" 
);
</script>

<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
      <Navbar v-if="shouldShowNavbar"/>
  </v-app>
  </template>


