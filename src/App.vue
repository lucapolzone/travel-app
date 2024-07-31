<script>
  import AppTravelStages from './components/AppTravelStages.vue';
  import AppCalendar from './components/AppCalendar.vue';
  import AppMap from './components/AppMap.vue';


  export default {
    data() {
      return {
        // activeIndex: 0,
        juneDays: [
          {
            dayNumber: 1,
            dayName: "SAT",
          },
          {
            dayNumber: 2,
            dayName: "SUN",
          },
          {
            dayNumber: 3,
            dayName: "MON",
          },
          {
            dayNumber: 4,
            dayName: "TUE",
          },
          {
            dayNumber: 5,
            dayName: "WED",
          },
          {
            dayNumber: 6,
            dayName: "THU",
          },
          {
            dayNumber: 7,
            dayName: "FRI",
          },
          {
            dayNumber: 8,
            dayName: "SAT",
          },
          {
            dayNumber: 9,
            dayName: "SUN",
          },
          {
            dayNumber: 10,
            dayName: "MON",
          },
          {
            dayNumber: 11,
            dayName: "TUE",
          },
          {
            dayNumber: 12,
            dayName: "WED",
          },
          {
            dayNumber: 13,
            dayName: "THU",
          },
          {
            dayNumber: 14,
            dayName: "FRI",
          },
          {
            dayNumber: 15,
            dayName: "SAT",
          },
          {
            dayNumber: 16,
            dayName: "SUN",
          },
          {
            dayNumber: 17,
            dayName: "MON",
          },
          {
            dayNumber: 18,
            dayName: "TUE",
          },
          {
            dayNumber: 19,
            dayName: "WED",
          },
          {
            dayNumber: 20,
            dayName: "THU",
          },
          {
            dayNumber: 21,
            dayName: "FRI",
          },
          {
            dayNumber: 22,
            dayName: "SAT",
          },
          {
            dayNumber: 23,
            dayName: "SUN",
          },
          {
            dayNumber: 24,
            dayName: "MON",
          },
          {
            dayNumber: 25,
            dayName: "TUE",
          },
          {
            dayNumber: 26,
            dayName: "WED",
          },
          {
            dayNumber: 27,
            dayName: "THU",
          },
          {
            dayNumber: 28,
            dayName: "FRI",
          },
          {
            dayNumber: 29,
            dayName: "SAT",
          },
          {
            dayNumber: 30,
            dayName: "SUN",
          },
        ],

        julyDays: [
          {
            dayNumber: 1,
            dayName: "MON",
          },
          {
            dayNumber: 2,
            dayName: "TUE",
          },
          {
            dayNumber: 3,
            dayName: "WED",
          },
          {
            dayNumber: 4,
            dayName: "THU",
          },
          {
            dayNumber: 5,
            dayName: "FRI",
          },
          {
            dayNumber: 6,
            dayName: "SAT",
          },
          {
            dayNumber: 7,
            dayName: "SUN",
          },
          {
            dayNumber: 8,
            dayName: "MON",
          },
          {
            dayNumber: 9,
            dayName: "TUE",
          },
          {
            dayNumber: 10,
            dayName: "WED",
          },
          {
            dayNumber: 11,
            dayName: "THU",
          },
          {
            dayNumber: 12,
            dayName: "FRI",
          },
          {
            dayNumber: 13,
            dayName: "SAT",
          },
          {
            dayNumber: 14,
            dayName: "SUN",
          },
          {
            dayNumber: 15,
            dayName: "MON",
          },
          {
            dayNumber: 16,
            dayName: "TUE",
          },
          {
            dayNumber: 17,
            dayName: "WED",
          },
          {
            dayNumber: 18,
            dayName: "THU",
          },
          {
            dayNumber: 19,
            dayName: "FRI",
          },
          {
            dayNumber: 20,
            dayName: "SAT",
          },
          {
            dayNumber: 21,
            dayName: "SUN",
          },
          {
            dayNumber: 22,
            dayName: "MON",
          },
          {
            dayNumber: 23,
            dayName: "TUE",
          },
          {
            dayNumber: 24,
            dayName: "WED",
          },
          {
            dayNumber: 25,
            dayName: "THU",
          },
          {
            dayNumber: 26,
            dayName: "FRI",
          },
          {
            dayNumber: 27,
            dayName: "SAT",
          },
          {
            dayNumber: 28,
            dayName: "SUN",
          },
          {
            dayNumber: 29,
            dayName: "MON",
          },
          {
            dayNumber: 30,
            dayName: "TUE",
          },
          {
            dayNumber: 31,
            dayName: "WED",
          },
        ],

        augustDays: [
          {
            dayNumber: 1,
            dayName: "THU",
          },
          {
            dayNumber: 2,
            dayName: "FRI",
          },
          {
            dayNumber: 3,
            dayName: "SAT",
          },
          {
            dayNumber: 4,
            dayName: "SUN",
          },
          {
            dayNumber: 5,
            dayName: "MON",
          },
          {
            dayNumber: 6,
            dayName: "TUE",
          },
          {
            dayNumber: 7,
            dayName: "WED",
          },
          {
            dayNumber: 8,
            dayName: "THU",
          },
          {
            dayNumber: 9,
            dayName: "FRI",
          },
          {
            dayNumber: 10,
            dayName: "SAT",
          },
          {
            dayNumber: 11,
            dayName: "SUN",
          },
          {
            dayNumber: 12,
            dayName: "MON",
          },
          {
            dayNumber: 13,
            dayName: "TUE",
          },
          {
            dayNumber: 14,
            dayName: "WED",
          },
          {
            dayNumber: 15,
            dayName: "THU",
          },
          {
            dayNumber: 16,
            dayName: "FRI",
          },
          {
            dayNumber: 17,
            dayName: "SAT",
          },
          {
            dayNumber: 18,
            dayName: "SUN",
          },
          {
            dayNumber: 19,
            dayName: "MON",
          },
          {
            dayNumber: 20,
            dayName: "TUE",
          },
          {
            dayNumber: 21,
            dayName: "WED",
          },
          {
            dayNumber: 22,
            dayName: "THU",
          },
          {
            dayNumber: 23,
            dayName: "FRI",
          },
          {
            dayNumber: 24,
            dayName: "SAT",
          },
          {
            dayNumber: 25,
            dayName: "SUN",
          },
          {
            dayNumber: 26,
            dayName: "MON",
          },
          {
            dayNumber: 27,
            dayName: "TUE",
          },
          {
            dayNumber: 28,
            dayName: "WED",
          },
          {
            dayNumber: 29,
            dayName: "THU",
          },
          {
            dayNumber: 30,
            dayName: "FRI",
          },
          {
            dayNumber: 31,
            dayName: "SAT",
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
    <app-calendar :juneDays="juneDays" :julyDays="julyDays" :augustDays="augustDays" />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>