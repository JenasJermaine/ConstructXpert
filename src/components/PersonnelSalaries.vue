<template>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-form @submit.prevent="handleSubmit">
        <v-container>
          <v-text style="margin-left: 24px">Personnel Salaries</v-text>
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
                  v-model="PersonnelID"
                  :rules="rules"
                  label="Personnel ID"
                  type="number"
                  outlined
                  class="input rounded-lg"
                ></v-text-field>
                <v-text-field
                  v-model="PaymentDate"
                  :rules="rules"
                  label="Payment Date"
                  type="date"
                  outlined
                  class="input rounded-lg"
                ></v-text-field>
                <v-text-field
                v-model="PaymentPeriod"
                  :rules="rules"
                  label="Payment Period"
                  type="text"
                  hint="Month,Year"
                  outlined
                  class="input rounded-lg"
                  style="margin-bottom: 50px;"
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

  
  const PersonnelID = ref("");
  const PaymentDate = ref("");
  const PaymentPeriod = ref("");
  
  const rules = [
    (value) => {
      if (value) return true;
      return "This field is required.";
    },
  ];

const handleSubmit = async () => {
      // Prepare the payload
    const payload = {
      PersonnelID: PersonnelID.value,
      PaymentDate: PaymentDate.value,
      PaymentPeriod: PaymentPeriod.value,
    };
  
    try {
      // Send a POST request to your Laravel endpoint; adjust the URL as needed.
      const response = await axios.post("http://127.0.0.1:8000/api/suppliers", payload);
      console.log("Personnel Salary created:", response.data);
      
      // Optionally, reset the form fields
      PersonnelID.value = "";
      PaymentDate.value = "";
      PaymentPeriod.value = "";
    } catch (error) {
      console.error("Error creating Personnel Salary:", error);
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
  