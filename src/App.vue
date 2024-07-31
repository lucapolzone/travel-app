<script>
  import AppTravelStages from './components/AppTravelStages.vue';
  import AppCalendar from './components/AppCalendar.vue';
  import AppMap from './components/AppMap.vue';


  export default {
    data() {
      return {
        // activeIndex: 0,
      }
    },

    components: { AppTravelStages, AppCalendar, AppMap}

  }
  
</script>

<template>
    <h1>Travel App</h1>

    <app-travel-stages />
    <app-calendar />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>