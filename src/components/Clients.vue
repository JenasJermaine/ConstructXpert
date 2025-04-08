<template>
    <v-container class="d-flex flex-column align-center justify-center">
        <v-form @submit.prevent="createClient">
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
                                v-model="newClient.Name"
                                :rules="rules"
                                label="Name"
                                outlined
                                class="input rounded-lg"
                            ></v-text-field>
                            <v-text-field
                                v-model="newClient.ContactPerson"
                                :rules="rules"
                                label="Contact Person"
                                type="text"
                                outlined
                                class="input rounded-lg"
                            ></v-text-field>
                            <v-text-field
                                v-model="newClient.Phone"
                                :rules="rules"
                                label="Phone Number"
                                type="number"
                                outlined
                                prefix="+254"
                                class="input rounded-lg"
                            ></v-text-field>
                            <v-text-field
                                v-model="newClient.Email"
                                :rules="rules"
                                label="Email"
                                type="email"
                                outlined
                                class="input rounded-lg"
                            ></v-text-field>
                            <v-text-field
                                v-model="newClient.Address"
                                :rules="rules"
                                label="Address"
                                outlined
                                class="input rounded-lg"
                            ></v-text-field>
                            <v-text-field
                                v-model="newClient.ContractDetails"
                                :rules="rules"
                                label="Contract Details"
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

<script>
import { ref } from "vue";
import axios from "axios";

export default {
    name: "Clients",
    data() {
        return {
            // Stores the list of clients fetched from the API
            clients: [],
            // Object to hold new client form data
            newClient: {
                Name: "",
                Email: "",
                ContactPerson: "",
                Phone: "",
                Address: "",
                ContractDetails: "",
            },
            rules: [
                (value) => {
                    if (value) return true;
                    return "This field is required.";
                },
            ],
        };
    },
    mounted() {
        // Call the index route to fetch all clients
        axios
            .get("http://127.0.0.1:8000/api/clients")
            .then((response) => {
                this.clients = response.data;
            })
            .catch((error) => {
                console.error("Error fetching clients:", error);
            });
    },
    methods: {
        createClient() {
            console.log("Submitting data:", this.newClient);
            axios
                .post("http://127.0.0.1:8000/api/clients", this.newClient)
                .then((response) => {
                    // Optionally push the new client to the clients array to update the UI immediately
                    this.clients.push(response.data);
                    // Reset the new client form
                    this.newClient = {
                        Name: "",
                        Email: "",
                        ContactPerson: "",
                        Phone: "",
                        Address: "",
                        ContractDetails: "",
                    };
                })
                .catch((error) => {
                    console.error("Error creating client:", error);
                });
        },
    },
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
