<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent="handleSubmit">
      <v-container>
        <v-text style="margin-left: 24px">Client Payments</v-text>
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
                v-model="ProjectID"
                :rules="rules"
                label="Project ID"
                type="number"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="ClientID"
                :rules="rules"
                label="Client ID"
                type="number"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="Amount"
                :rules="rules"
                label="Amount(Ksh.)"
                type="number"
                outlined
                class="input rounded-lg"
                prefix="Ksh."
              ></v-text-field>
              <v-text-field
                v-model="PaymentDate"
                :rules="rules"
                label="Payment Date"
                type="date"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-select
                v-model="PaymentMethod"
                :rules="rules"
                label="Payment Method"
                class="input rounded-lg"
                :items="['Bank Transfer', 'Cash', 'Cheque']"
                outlined
              ></v-select>
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


const ProjectID = ref("");
const ClientID = ref("");
const Amount = ref("");
const PaymentDate = ref("");
const PaymentMethod = ref("");

const rules = [
  (value) => {
    if (value) return true;
    return "This field is required.";
  },
];

const handleSubmit = async () => {
    // Convert "Yes" to true and "No" to false
  
    // Prepare the payload
    const payload = {
      ProjectID: ProjectID.value,
      ClientID: ClientID.value,
      Amount: Amount.value,
      PaymentDate: PaymentDate.value,
      PaymentMethod: PaymentMethod.value,

    };
  
    try {
      // Send a POST request to your Laravel endpoint; adjust the URL as needed.
      const response = await axios.post("http://127.0.0.1:8000/api/client-payments", payload);
      console.log("payment created:", response.data);
      
      // Optionally, reset the form fields
      ProjectID.value= "";
      ClientID.value= "";
      Amount.value= "";
      PaymentDate.value= "";
      PaymentMethod.value= "";
    } catch (error) {
      console.error("Error creating payment:", error.response ? error.response.data : error);
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
