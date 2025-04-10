<template>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-container>
        <v-container>
          <v-text style="margin-left: 24px">Total Net Earnings</v-text>
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
                  <th class="text-left columns">TotalClientPayments</th>
                  <th class="text-left columns">TotalRentalIncome</th>
                  <th class="text-left columns">TotalCostOfMaterials</th>
                  <th class="text-left columns">TotalWagesPaid</th>
                  <th class="text-left columns">TotalSalariesPaid</th>
                  <th class="text-left columns">TotalNetEarnings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="columns">{{ TotalNetEarnings.TotalClientPayments }}</td>
                  <td class="columns">{{ TotalNetEarnings.TotalRentalIncome }}</td>
                  <td class="columns">{{ TotalNetEarnings.TotalCostOfMaterials }}</td>
                  <td class="columns">{{ TotalNetEarnings.TotalWagesPaid }}</td>
                  <td class="columns">{{ TotalNetEarnings.TotalSalariesPaid }}</td>
                  <td class="columns">{{ TotalNetEarnings.TotalNetEarnings }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-container>
      </v-container>
  
      <v-container class="d-flex flex-row justify-center">
        <v-btn class="ma-2" color="black" icon="fas fa-chevron-left" to="/Projects"></v-btn>
        <v-spacer style="width: 500px"></v-spacer>
      </v-container>
    </v-container>
  </template>
  

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define a reactive variable that will eventually hold a single row from the report
const TotalNetEarnings = ref({});

// Function to fetch the net earnings report from the API endpoint
const fetchTotalNetEarnings = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/reports/net-earnings');
    // If the response returns an array and you expect one row, assign its first element.
    if(response.data && response.data.length) {
      TotalNetEarnings.value = response.data[0];
    }
    console.log("Net earnings report:", response.data); // Debug log
  } catch (error) {
    console.error('Error fetching total net earnings:', error);
  }
};

// Call the fetch function when the component is mounted
onMounted(() => {
  fetchTotalNetEarnings();
});
</script>
  
  <style scoped>
  .columns {
    border-right: 2px solid black;
  }
  </style>
  