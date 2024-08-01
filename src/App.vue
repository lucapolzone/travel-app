<script>
  import AppNavElements from './components/AppNavElements.vue';


  // import { fetchLocations, saveLocations } from './storage';

  export default {
    data() {
      return {
        // activeIndex: 0,
      }
    },

    components: { AppNavElements }

  }
  
</script>

<template>
  <div style="background-color: #8eee76;" class="p-1 mb-4 rounded-4">
    <h1>Travel App</h1>
  </div>

  <router-view />

</template>

<style lang="scss" scoped>
</style>