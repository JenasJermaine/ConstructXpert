<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    overflow-y="auto"
    :rail-width="70"
    :width="rail ? 70 : 300"
    permanent
    @click="rail = false"
  >
    <v-list
      density="compact"
      nav
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div>
        <v-list-item prepend-icon="fas fa-bars" nav>
          <template v-slot:append>
            <v-btn
              icon="fas fa-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider class="mb-6"></v-divider>
        <v-list-item prepend-icon="fas fa-house" to="/Home">Home</v-list-item>
        <v-list-item prepend-icon="fas fa-file-alt">Forms</v-list-item>
        <v-list-item prepend-icon="fas fa-user-tie" to="/Clients"
          >Clients</v-list-item
        >
        <v-list-item prepend-icon="fas fa-tools" to="/Equipment"
          >Equipment</v-list-item
        >
        <v-list-item prepend-icon="fas fa-shopping-cart" to="/MaterialPurchases"
          >MaterialPurchases</v-list-item
        >
        <v-list-item prepend-icon="fas fa-boxes" to="/Materials"
          >Materials</v-list-item
        >
        <v-list-item prepend-icon="fas fa-users" to="/Personnel"
          >Personnel</v-list-item
        >
        <v-list-item prepend-icon="fas fa-dollar-sign" to="/PersonnelSalaries"
          >PersonnelSalaries</v-list-item
        >
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="fas fa-project-diagram" v-bind="props"
              >Projects</v-list-item
            >
          </template>
          <v-list>
            <v-list-item prepend-icon="fas fa-project-diagram" to="/Projects"
              >Projects</v-list-item
            >
            <v-list-item prepend-icon="fas fa-box-open" to="/ProjectMaterials"
              >ProjectMaterials</v-list-item
            >
            <v-list-item
              prepend-icon="fas fa-user-friends"
              to="/ProjectPersonnel"
              >ProjectPersonnel</v-list-item
            >
            <v-list-item
              prepend-icon="fas fa-user-check"
              to="/EquipmentAssignment"
              >EquipmentAssignment</v-list-item
            >
          </v-list>
        </v-menu>
        <v-list-item prepend-icon="fas fa-users-gear" to="/Roles"
          >Roles</v-list-item
        >
        <v-list-item prepend-icon="fas fa-truck" to="/Suppliers"
          >Suppliers</v-list-item
        >
      </div>
      <v-menu top>
        <template v-slot:activator="{ props }">
          <v-list-item prepend-icon="fas fa-ellipsis-vertical" v-bind="props"
            >More</v-list-item
          >
        </template>
        <v-list>
          <v-list-item prepend-icon="fas fa-gear" to="/Accountsettings"
            >Account Settings</v-list-item
          >
          <v-list-item prepend-icon="fas fa-right-from-bracket" to="/"
            >Log out</v-list-item
          >
        </v-list>
      </v-menu>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
</script>
