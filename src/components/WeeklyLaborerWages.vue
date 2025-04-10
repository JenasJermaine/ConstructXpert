<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent>
      <v-container>
        <v-text style="margin-left: 24px">Weekly Laborer Wages</v-text>
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
                <th class="text-left columns">HoursWorked</th>
                <th class="text-left columns">HourlyRate</th>
                <th class="text-left columns">CalculatedWage</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="LaborerWage in LaborerWages" :key="LaborerWage.Name">
                <td class="columns">{{ LaborerWage.Name }}</td>
                <td class="columns">{{ LaborerWage.HoursWorked }}</td>
                <td class="columns">{{ LaborerWage.HourlyRate }}</td>
                <td class="columns">{{ LaborerWage.CalculatedWage }}</td>
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
import { ref, onMounted } from "vue";
import axios from "axios";

// Define a reactive variable to hold the report data
const LaborerWages = ref([]);

// Function to fetch the client payments report from the API endpoint
const fetchLaborerWages = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/reports/laborer-wages-calculation"
    );
    LaborerWages.value = response.data;
  } catch (error) {
    console.error("Error fetching laborer wages:", error);
  }
};

// Call the fetch function when the component is mounted
onMounted(() => {
  fetchLaborerWages();
});
</script>

<style scoped>
.columns {
  border-right: 2px solid black;
}
</style>
