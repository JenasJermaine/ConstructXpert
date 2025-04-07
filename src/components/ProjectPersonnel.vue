<template>
    <v-container class="d-flex flex-column align-center justify-center">
      <v-form @submit.prevent>
        <v-container>
          <v-text style="margin-left: 24px">Project Personnel</v-text>
          <v-card
            class="bg-grey-lighten-2 rounded-lg ma-10 pa-1"
            variant="outlined"
            style="border-width: 2px"
          >
            <v-table class="bg-grey-lighten-2" style="border-width: 2px">
              <thead>
                <tr>
                  <th class="text-left">No.</th>
                  <th class="text-left">ProjectID</th>
                  <th class="text-left">PersonnelID</th>
                  <th class="text-left">StartDate</th>
                  <th class="text-left">EndDate</th>
                  <th class="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="(row, index) in rows" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <v-text-field
                      v-model="row.ProjectID"
                      :rules="rules"
                      label="Project ID"
                      type="number"
                      outlined
                      dense
                      class="input rounded-lg"

                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="row.PerssonelID"
                      :rules="rules"
                      label="Personnel ID"
                      type="number"
                      outlined
                      dense
                      class="input rounded-lg"

                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="row.StartDate"
                      :rules="rules"
                      label="Start Date"
                      type="date"
                      outlined
                      dense
                      class="input rounded-lg"

                    ></v-text-field>
                  </td>
                  <td>
                    <v-text-field
                      v-model="row.EndDate"
                      :rules="rules"
                      label="End Date"
                      type="date"
                      outlined
                      dense
                      class="input rounded-lg"

                    ></v-text-field>
                  </td>
                  <td>
                    <v-btn icon color="red" @click="deleteRow(index)">
                      <v-icon>fas fa-trash</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
            <div class="d-flex justify-end">
              <v-btn icon color="primary" class="ma-4" @click="addRow">
                <v-icon>fas fa-plus</v-icon>
              </v-btn>
            </div>
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
import Personnel from "./Personnel.vue";
  
  const rows = ref([]);
  
  const addRow = () => {
    rows.value.push({
      ProjectID: "",
      PersonnelID: "",
      StartDate: "",
      EndDate: "",
    });
  };
  
  const deleteRow = (index) => {
    rows.value.splice(index, 1);
  };
  
  const rules = [
    (value) => value ? true : "This field is required."
  ];
  </script>
  
  <style scoped>
  .input {
    margin: 10px;
    height: 80px;
    width: 200px;
    background-color: #f5f5f5cc;
    border: 2px solid #000; 
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
  