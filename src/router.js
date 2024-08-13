import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'; 
import NewLocation from './pages/NewLocation.vue'; 
import EditLocation from './pages/EditLocation.vue';

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
      props: route => ({ slug: route.params.slug })
    },
    {
      path: "/edit-location/:slug/:stageIndex",
      name: "edit-location-slug",
      component: EditLocation,
      props: route => ({ slug: route.params.slug, stageIndex: parseInt(route.params.stageIndex) })
    }
  ],
});

export { router };