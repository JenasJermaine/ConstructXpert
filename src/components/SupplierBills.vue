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
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  // Define a reactive variable to hold the report data
  const Suppliers = ref([]);
  
  // Function to fetch the client payments report from the API endpoint
  const fetchSuppliers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/reports/unpaid-material-purchases');
      Suppliers.value = response.data;
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };
  
  // Call the fetch function when the component is mounted
  onMounted(() => {
    fetchSuppliers();
  });
  </script>
  
  <style scoped>
  .columns {
    border-right: 2px solid black;
  }
  </style>
  