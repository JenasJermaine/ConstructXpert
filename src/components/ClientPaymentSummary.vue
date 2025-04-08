<template>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-form @submit.prevent>
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
                <tr v-for="Client in Clients" :key="Client.Name">
                  <td class="columns">{{ Client.Name }}</td>
                  <td class="columns">{{ Client.ProjectName }}</td>
                  <td class="columns">{{ Client.TotalPaid }}</td>
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
  const Clients = [];
  </script>
  
  <style scoped>
  .columns {
    border-right: 2px solid black;
  }
  </style>
  