<template>
  <v-sheet
    style="display: flex; flex-direction: column; align-items: center"
    class="h-100 bg-grey-lighten-2"
  >
    <v-form @submit.prevent="login">
      <v-card
        style="height: 600px; width: 400px"
        title="ConstructXpert"
        variant="elevated"
        class="rounded-xl ma-12 text-center"
      >
        <v-row justify="center">
          <v-col cols="12" md="6" class="d-flex flex-column align-center">
            <v-text-field
              style="margin-top: 50px"
              v-model="Username"
              :rules="rules"
              label="Username"
              type="text"
              outlined
              class="input rounded-lg"
            ></v-text-field>
            <v-text-field
              v-model="Password"
              :append-inner-icon="show1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :rules="rules"
              :type="show1 ? 'text' : 'password'"
              hint="At least 8 characters"
              label="Password"
              counter
              @click:append-inner="show1 = !show1"
              class="input rounded-lg"
            ></v-text-field>
            <v-container class="d-flex flex-column align-center">
              <v-btn class="mt-2 submit rounded-xl" type="submit">Submit</v-btn>
            </v-container>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";  // Import useRouter hook
import axios from "axios";

const Username = ref("");
const Password = ref("");
const show1 = ref(false);
const router = useRouter();  // Get router instance

const rules = [
  (value) => {
    return value ? true : "This field is required.";
  },
];

const login = async () => {
  // Validate locally before sending the request
  if (!Username.value || !Password.value) {
    alert("Please fill out both fields.");
    return;
  }

  try {
    // Send the login data to Laravel
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      username: Username.value,
      password: Password.value,
    });
    
    console.log("Login successful:", response.data);
    alert(response.data.message);
    
    // Proceed to the /Home route only after a successful login.
    router.push('/Home');

  } catch (error) {
    // Check if response exists and log details to the console
    if (error.response) {
      console.error("Error response from API:", error.response.data);
      alert("Login failed: " + (error.response.data.message || JSON.stringify(error.response.data)));
    } else {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred.");
    }
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
