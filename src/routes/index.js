import { createRouter, createWebHistory } from "vue-router";

import Clients from "./../components/Clients.vue";
import ClientPayments from "./../components/ClientPayments.vue";
import Equipment from "./../components/Equipment.vue";
import EquipmentAssignment from "./../components/EquipmentAssignment.vue";
import Home from "./../components/Home.vue";
import Login from "./../components/Login.vue";
import MaterialPurchases from "./../components/MaterialPurchases.vue";
import Materials from "./../components/Materials.vue";
import Personnel from "./../components/Personnel.vue";
import PersonnelSalaries from "./../components/PersonnelSalaries.vue";
import ProjectMaterials from "./../components/ProjectMaterials.vue";
import ProjectPersonnel from "./../components/ProjectPersonnel.vue";
import Projects from "./../components/Projects.vue";
import Roles from "./../components/Roles.vue";
import Suppliers from "./../components/Suppliers.vue";
import amq from "./../components/AvailableMaterials.vue";
import cms from "./../components/ClientPaymentSummary.vue";
import MaterialsPerProject from "./../components/MaterialsPerProject.vue";
import mps from "./../components/MonthlyPersonnelSalaries.vue";
import SupplierBills from "./../components/SupplierBills.vue";
import tne from "./../components/TotalNetEarnings.vue";
import wlw from "./../components/WeeklyLaborerWages.vue";

const routes = [
  {
    path: "/Clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/ClientPayments",
    name: "ClientPayments",
    component: ClientPayments,
  },
  {
    path: "/Equipment",
    name: "Equipment",
    component: Equipment,
  },
  {
    path: "/EquipmentAssignment",
    name: "EquipmentAssignment",
    component: EquipmentAssignment,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/MaterialPurchases",
    name: "MaterialPurchases",
    component: MaterialPurchases,
  },
  {
    path: "/Materials",
    name: "Materials",
    component: Materials,
  },
  {
    path: "/Personnel",
    name: "Personnel",
    component: Personnel,
  },
  {
    path: "/PersonnelSalaries",
    name: "PersonnelSalaries",
    component: PersonnelSalaries,
  },
  {
    path: "/ProjectMaterials",
    name: "ProjectMaterials",
    component: ProjectMaterials,
  },
  {
    path: "/ProjectPersonnel",
    name: "ProjectPersonnel",
    component: ProjectPersonnel,
  },
  {
    path: "/Projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/Roles",
    name: "Roles",
    component: Roles,
  },
  {
    path: "/Suppliers",
    name: "Suppliers",
    component: Suppliers,
  },
  {
    path: "/amq",
    name: "amq",
    component: amq,
  },
  {
    path: "/cms",
    name: "cms",
    component: cms,
  },
  {
    path: "/MaterialsPerProject",
    name: "MaterialsPerProject",
    component: MaterialsPerProject,
  },
  {
    path: "/mps",
    name: "mps",
    component: mps,
  },
  {
    path: "/SupplierBills",
    name: "SupplierBills",
    component: SupplierBills,
  },
  {
    path: "/tne",
    name: "tne",
    component: tne,
  },
  {
    path: "/wlw",
    name: "wlw",
    component: wlw,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
