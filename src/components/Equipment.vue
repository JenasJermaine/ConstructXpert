<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent>
      <v-container>
        <v-text style="margin-left: 24px">Equipment</v-text>
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
                v-model="EquipmentType"
                :rules="rules"
                label="Equipment Type"
                type="number"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="EquipmentName"
                :rules="rules"
                label="Equipment Name"
                type="text"
                outlined
                class="input rounded-lg"
              ></v-text-field>
              <v-text-field
                v-model="RentalRate"
                :rules="rules"
                label="RentalRate(Ksh.)"
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
                  'Available',
                  'Assigned',
                ]"
                outlined
                style="margin-bottom: 50px;"
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

const EquipmentType = ref("");
const EquipmentName = ref("");
const RentalRate = ref("");
const Status = ref("");

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
