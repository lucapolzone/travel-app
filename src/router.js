import { createRouter, createWebHistory } from "vue-router";

import Home from './components/Home.vue'; 
import NewLocation from './components/NewLocation.vue'; 

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/new-location/:slug",
      name: "new-location-slug",
      component: NewLocation,
      //route è l'oggetto rotta
      //params è una proprietà dell'oggetto. Contiene i parametri dinamici
      //slug è la definizione del parametro dinamico: 01-06, 02-06, ecc 
      props: route => ({ slug: route.params.slug })
    },

  ],
});

export { router };