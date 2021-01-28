import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCard from "../views/AddCard.vue";

Vue.use(VueRouter);

const routes = [
  // TODO:
  // XXX Få till as-enkel kommunikation med "main.js" XXX
  // XXX Kopiera över cardData till "main.js" XXX
  // XXX Kolla så att det funkar XXX
  // Fixa cardform
  // -XXX Fyll i input, skriv ut i en paragraf XXX
  // -XXX Fyll i input, skicka data till main.js, skriv ut i Home XXX

  // Synka med CardItem
  // - Ska vara tomt från början, men vänta på kortdatan
  // - Ska hämta kortdata från main.js?
  // - Ska ha en paragraf som innehåller 

  {
    path: "/",
    component: Home
  },
  {
    path: "/addcard",
    component: AddCard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
