<template>
  <v-sheet
    style="display: flex; flex-direction: column; align-items: center"
    class="h-100 bg-grey-lighten-2"
  >
    <v-form @submit.prevent>
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
              name="input-10-1"
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

const Username = ref("");
const show1 = ref(false);
const Password = ref("Password");

const rules = [
  (value) => {
    if (value) return true;
    return "This field is required.";
  },
];
 
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
