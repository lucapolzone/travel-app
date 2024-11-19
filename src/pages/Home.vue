<script>
  import AppLocations from '../components/AppLocations.vue';
  import AppCalendar from '../components/AppCalendar.vue';
  import AppMap from '../components/AppMap.vue';

  import { monthsData } from '../data/mothsData';

  export default {
    data() {
      return {
        months: monthsData
      }
    },

    components: { AppLocations, AppCalendar, AppMap}

  }
  
</script>

<template>
  
    <app-locations />
    <app-calendar :months="months" />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>