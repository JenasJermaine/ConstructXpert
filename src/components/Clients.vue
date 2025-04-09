<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent="handleSubmit">
      <v-container>
        <v-text style="margin-left: 24px">Client Registration</v-text>
        <v-card
          class="bg-grey-lighten-2 rounded-lg ma-10 pa-1"
          width="500"
          variant="outlined"
          style="border-width: 2px"
        >
          <v-row justify="center">
            <v-col cols="12" md="6" class="d-flex flex-column align-center">
              <v-text-field
                v-model="Name"
                :rules="rules"
                label="Name"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="ContactPerson"
                :rules="rules"
                label="Contact Person"
                type="text"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="Phone"
                :rules="rules"
                label="Phone Number"
                type="number"
                outlined
                prefix="+254"
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="Email"
                :rules="rules"
                label="Email"
                type="email"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="Address"
                :rules="rules"
                label="Address"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="ContractDetails"
                :rules="rules"
                label="Contract Details"
                outlined
                class="input rounded-lg"
                style="margin-bottom: 50px"
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

const Name = ref("");
const ContactPerson = ref("");
const Phone = ref("");
const Email = ref("");
const Address = ref("");
const ContractDetails = ref("");

const rules = [
  (value) => {
    if (value) return true;
    return "This field is required.";
  },
];

const handleSubmit = async () => {
  // Prepare the payload
  const payload = {
    Name: Name.value,
    ContactPerson: ContactPerson.value,
    Phone: Phone.value,
    Email: Email.value,
    Address: Address.value,
    ContractDetails: ContractDetails.value,
  };

  try {
    // Send a POST request to your Laravel endpoint; adjust the URL as needed.
    const response = await axios.post(
      "http://127.0.0.1:8000/api/clients",
      payload
    );
    console.log("Client created:", response.data);

    // Optionally, reset the form fields
    Name.value = "";
    ContactPerson.value = "";
    Phone.value = "";
    Email.value = "";
    Address.value = "";
    ContractDetails.value = "";
  } catch (error) {
    console.error("Error creating client:", error);
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
  width: 300px;
  border-style: solid;
  border-radius: 25px;
  height: 50px;
  background-color: #000000;
}
</style>
