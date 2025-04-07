import { createRouter, createWebHistory } from "vue-router";

import Clients from "./../components/Clients.vue";
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

const routes = [
  {
    path: "/Clients",
    name: "Clients",
    component: Clients,
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
