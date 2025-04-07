<script setup>
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
      <Navbar/>
  </v-app>
  </template>


