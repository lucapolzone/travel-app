<script>
  import AppTravelStages from './components/AppTravelStages.vue';
  import AppCalendar from './components/AppCalendar.vue';
  import AppMap from './components/AppMap.vue';


  export default {
    data() {
      return {
        // activeIndex: 0,
        januaryDays: [
          {
            dayNumber: 1,
            dayName: "LUN",
          },
          {
            dayNumber: 2,
            dayName: "MAR",
          },
          {
            dayNumber: 3,
            dayName: "MER",
          },
          {
            dayNumber: 4,
            dayName: "GIO",
          },
          {
            dayNumber: 5,
            dayName: "VEN",
          },
          {
            dayNumber: 6,
            dayName: "SAB",
          },
        ]
      }
    },

    components: { AppTravelStages, AppCalendar, AppMap}

  }
  
</script>

<template>
    <h1>Travel App</h1>

    <app-travel-stages />
    <app-calendar :januaryDays=januaryDays />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>