<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent="handleSubmit">
      <v-container>
        <v-text style="margin-left: 24px">Projects</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-lg ma-10 pa-1"
          width="500"
          variant="outlined"
          style="border-width: 2px"
        >
          <v-row justify="center">
            <v-col cols="12" md="6" class="d-flex flex-column align-center">
              <v-text-field
                style="margin-top: 50px"
                v-model="ClientID"
                :rules="rules"
                label="Client ID"
                type="number"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="ProjectName"
                :rules="rules"
                label="Project Name"
                type="text"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="Budget"
                :rules="rules"
                label="Budget(Ksh.)"
                type="number"
                outlined
                class="input rounded-lg"
                prefix="Ksh."
              ></v-text-field>
              <v-select
                v-model="Status"
                :rules="rules"
                label="Status"
                class="input rounded-lg"
                :items="[
                  'In Progress',
                  'Planning',
                  'Completed',
                ]"
                outlined
              ></v-select>
              <v-text-field
                v-model="StartDate"
                :rules="rules"
                label="Start Date"
                type="date"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
              v-model="ExpectedEndDate"
                :rules="rules"
                label="Expected End Date"
                type="date"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
              style="margin-bottom: 50px"
              v-model="ActualEndDate"
                :rules="rules"
                label="Actual End Date"
                type="date"
                outlined
                class="input rounded-lg"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </v-container>

      <v-container class="d-flex flex-column align-center">
        <v-btn class="mt-2 submit rounded-xl" type="submit">Submit</v-btn>
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
import { ref } from "vue";
import axios from "axios";

const ClientID = ref("");
const ProjectName = ref("");
const Budget = ref("");
const Status = ref("");
const StartDate = ref("");
const ExpectedEndDate = ref("");
const ActualEndDate = ref("");

const handleSubmit = async () => {
      // Prepare the payload
    const payload = {
      ClientID: ClientID.value,
      ProjectName: ProjectName.value,
      Budget: Budget.value,
      Status: Status.value,
      StartDate: StartDate.value,
      ExpectedEndDate: ExpectedEndDate.value,
      ActualEndDate: ActualEndDate.value,
    };
  
    try {
      // Send a POST request to your Laravel endpoint; adjust the URL as needed.
      const response = await axios.post("http://127.0.0.1:8000/api/projects", payload);
      console.log("Project created:", response.data);
      
      // Optionally, reset the form fields
      ClientID.value = "";
      ProjectName.value = "";
      Budget.value = "";
      Status.value = "";
      StartDate.value = "";
      ExpectedEndDate.value = "";
      ActualEndDate.value = "";
    } catch (error) {
      console.error("Error creating project:", error);
      // Optionally handle errors (e.g., display a message to the user)
    }
  };
</script>

<style scoped>
.input {
  margin: 10px;
  height: 80px;
  width: 280px;
  background-color: #f5f5f5cc;
  border: 2px solid #000; /* Adjust thickness and color as needed */
  border-radius: 5px;
}

.submit {
  color: aliceblue;
  font-weight: bold;
  margin: 10px;
  width: 280px;
  height: 50px;
  background-color: #000000;
}
</style>
