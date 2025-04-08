<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-form @submit.prevent>
      <v-container>
        <v-text style="margin-left: 24px">Available Material Quantity</v-text>
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
                <th class="text-left columns">MaterialName</th>
                <th class="text-left columns">TotalQuantityBought</th>
                <th class="text-left columns">TotalQuantityUsed</th>
                <th class="text-left">AvailableQuantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Material in Materials" :key="Material.MaterialName">
                <td class="columns">{{ Material.MaterialName }}</td>
                <td class="columns">{{ Material.TotalQuantityBought }}</td>
                <td class="columns">{{ Material.TotalQuantityUsed }}</td>
                <td>{{ Material.AvailableQuantity }}</td>
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
const Materials = [];
</script>

<style scoped>
.columns {
  border-right: 2px solid black;
}
</style>
