<template>
    <v-container class="d-flex flex-column align-center justify-center">
    <v-container>
        <v-container>
          <v-text style="margin-left: 24px">Client Payment Summary</v-text>
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
                  <th class="text-left columns">Name</th>
                  <th class="text-left columns">ProjectName</th>
                  <th class="text-left columns">TotalPaid</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="client in Clients" :key="client.Name">
                  <td class="columns">{{ client.Name }}</td>
                  <td class="columns">{{ client.ProjectName }}</td>
                  <td class="columns">{{ client.TotalPaid }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-container>
    </v-container>
  
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
  const Clients = ref([]);
  
  // Function to fetch the client payments report from the API endpoint
  const fetchClientPaymentsReport = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/reports/client-payments');
      Clients.value = response.data;
    } catch (error) {
      console.error('Error fetching client payments report:', error);
    }
  };
  
  // Call the fetch function when the component is mounted
  onMounted(() => {
    fetchClientPaymentsReport();
  });
  </script>
  
  <style scoped>
  .columns {
    border-right: 2px solid black;
  }
  </style>
  