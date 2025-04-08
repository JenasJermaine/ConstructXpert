<template>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-form @submit.prevent>
        <v-container>
          <v-text style="margin-left: 24px">Outstanding Supplier Bills</v-text>
          <v-card
            class="bg-grey-lighten-2 rounded-lg ma-10 pa-1"
            variant="outlined"
            style="border-width: 2px"
          >
            <v-table
              class="bg-grey-lighten-2"
              style="border-width: 2px"
              height="700px"
              fixed-header
            >
              <thead>
                <tr>
                  <th class="text-left columns">SupplierName</th>
                  <th class="text-left columns">TotalCost</th>
                  <th class="text-left columns">PurchaseDate</th>
                  <th class="text-left">PaymentStatus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="Supplier in Suppliers" :key="Supplier.SupplierName">
                  <td class="columns">{{ Supplier.SupplierName }}</td>
                  <td class="columns">{{ Supplier.TotalCost }}</td>
                  <td class="columns">{{ Supplier.PurchaseDate }}</td>
                  <td>{{ Supplier.PaymentStatus }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-container>
      </v-form>
  
      <v-container class="d-flex flex-row justify-center">
        <v-btn
          class="ma-2"
          color="black"
          icon="fas fa-chevron-left"
          to="/Projects"
        ></v-btn>
        <v-spacer style="width: 500px"></v-spacer>
      </v-container>
    </v-container>
  </template>
  <script setup>
  const Suppliers = [];
  </script>
  
  <style scoped>
  .columns {
    border-right: 2px solid black;
  }
  </style>
  