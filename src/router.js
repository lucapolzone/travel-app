import { createRouter, createWebHistory } from "vue-router";

import Home from './components/Home.vue'; 
import NewLocation from './components/NewLocation.vue'; 
import EditLocation from './components/EditLocation.vue';

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