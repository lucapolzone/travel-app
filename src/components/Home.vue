<script>
  import AppNavElements from './AppNavElements.vue';
  import AppLocations from './AppLocations.vue';
  import AppCalendar from './AppCalendar.vue';
  import AppMap from './AppMap.vue';

  export default {
    data() {
      return {
        // activeIndex: 0,

        // calendarController: {
        //   juneMonth: "06",
        //   julyMonth: "07",
        //   augustMonth: "08",
        //   year: "2024"
        // },

        juneDays: [
          {
            dayNumber: "01",
            dayName: "SAB",
            month: "06",
          },
          {
            dayNumber: "02",
            dayName: "DOM",
            month: "06",
          },
          {
            dayNumber: "03",
            dayName: "LUN",
            month: "06",
          },
          {
            dayNumber: "04",
            dayName: "MAR",
            month: "06",
          },
          {
            dayNumber: "05",
            dayName: "MER",
            month: "06",
          },
          {
            dayNumber: "06",
            dayName: "GIO",
            month: "06",
          },
          {
            dayNumber: "07",
            dayName: "VEN",
            month: "06",
          },
          {
            dayNumber: "08",
            dayName: "SAB",
            month: "06",
          },
          {
            dayNumber: "09",
            dayName: "DOM",
            month: "06",
          },
          {
            dayNumber: "10",
            dayName: "LUN",
            month: "06",
          },
          {
            dayNumber: "11",
            dayName: "MAR",
            month: "06",
          },
          {
            dayNumber: "12",
            dayName: "MER",
            month: "06",
          },
          {
            dayNumber: "13",
            dayName: "GIO",
            month: "06",
          },
          {
            dayNumber: "14",
            dayName: "VEN",
            month: "06",
          },
          {
            dayNumber: "15",
            dayName: "SAB",
            month: "06",
          },
          {
            dayNumber: "16",
            dayName: "DOM",
            month: "06",
          },
          {
            dayNumber: "17",
            dayName: "LUN",
            month: "06",
          },
          {
            dayNumber: "18",
            dayName: "MAR",
            month: "06",
          },
          {
            dayNumber: "19",
            dayName: "MER",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "20",
            dayName: "GIO",
            month: "06",
          },
          {
            dayNumber: "21",
            dayName: "VEN",
            month: "06",
          },
          {
            dayNumber: "22",
            dayName: "SAB",
            month: "06",
          },
          {
            dayNumber: "23",
            dayName: "DOM",
            month: "06",
          },
          {
            dayNumber: "24",
            dayName: "LUN",
            month: "06",
          },
          {
            dayNumber: "25",
            dayName: "MAR",
            month: "06",
          },
          {
            dayNumber: "26",
            dayName: "MER",
            month: "06",
          },
          {
            dayNumber: "27",
            dayName: "GIO",
            month: "06",
          },
          {
            dayNumber: "28",
            dayName: "VEN",
            month: "06",
          },
          {
            dayNumber: "29",
            dayName: "SAB",
            month: "06",
          },
          {
            dayNumber: "30",
            dayName: "DOM",
            month: "06",
          },
        ],

        julyDays: [
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
          {
            dayNumber: 7,
            dayName: "DOM",
          },
          {
            dayNumber: 8,
            dayName: "LUN",
          },
          {
            dayNumber: 9,
            dayName: "MAR",
          },
          {
            dayNumber: 10,
            dayName: "MER",
          },
          {
            dayNumber: 11,
            dayName: "GIO",
          },
          {
            dayNumber: 12,
            dayName: "VEN",
          },
          {
            dayNumber: 13,
            dayName: "SAB",
          },
          {
            dayNumber: 14,
            dayName: "DOM",
          },
          {
            dayNumber: 15,
            dayName: "LUN",
          },
          {
            dayNumber: 16,
            dayName: "MAR",
          },
          {
            dayNumber: 17,
            dayName: "MER",
          },
          {
            dayNumber: 18,
            dayName: "GIO",
          },
          {
            dayNumber: 19,
            dayName: "VEN",
          },
          {
            dayNumber: 20,
            dayName: "SAB",
          },
          {
            dayNumber: 21,
            dayName: "DOM",
          },
          {
            dayNumber: 22,
            dayName: "LUN",
          },
          {
            dayNumber: 23,
            dayName: "MAR",
          },
          {
            dayNumber: 24,
            dayName: "MER",
          },
          {
            dayNumber: 25,
            dayName: "GIO",
          },
          {
            dayNumber: 26,
            dayName: "VEN",
          },
          {
            dayNumber: 27,
            dayName: "SAB",
          },
          {
            dayNumber: 28,
            dayName: "DOM",
          },
          {
            dayNumber: 29,
            dayName: "LUN",
          },
          {
            dayNumber: 30,
            dayName: "MAR",
          },
          {
            dayNumber: 31,
            dayName: "MER",
          },
        ],

        augustDays: [
          {
            dayNumber: 1,
            dayName: "GIO",
          },
          {
            dayNumber: 2,
            dayName: "VEN",
          },
          {
            dayNumber: 3,
            dayName: "SAB",
          },
          {
            dayNumber: 4,
            dayName: "DOM",
          },
          {
            dayNumber: 5,
            dayName: "LUN",
          },
          {
            dayNumber: 6,
            dayName: "MAR",
          },
          {
            dayNumber: 7,
            dayName: "MER",
          },
          {
            dayNumber: 8,
            dayName: "GIO",
          },
          {
            dayNumber: 9,
            dayName: "VEN",
          },
          {
            dayNumber: 10,
            dayName: "SAB",
          },
          {
            dayNumber: 11,
            dayName: "DOM",
          },
          {
            dayNumber: 12,
            dayName: "LUN",
          },
          {
            dayNumber: 13,
            dayName: "MAR",
          },
          {
            dayNumber: 14,
            dayName: "MER",
          },
          {
            dayNumber: 15,
            dayName: "GIO",
          },
          {
            dayNumber: 16,
            dayName: "VEN",
          },
          {
            dayNumber: 17,
            dayName: "SAB",
          },
          {
            dayNumber: 18,
            dayName: "DOM",
          },
          {
            dayNumber: 19,
            dayName: "LUN",
          },
          {
            dayNumber: 20,
            dayName: "MAR",
          },
          {
            dayNumber: 21,
            dayName: "MER",
          },
          {
            dayNumber: 22,
            dayName: "GIO",
          },
          {
            dayNumber: 23,
            dayName: "VEN",
          },
          {
            dayNumber: 24,
            dayName: "SAB",
          },
          {
            dayNumber: 25,
            dayName: "DOM",
          },
          {
            dayNumber: 26,
            dayName: "LUN",
          },
          {
            dayNumber: 27,
            dayName: "MAR",
          },
          {
            dayNumber: 28,
            dayName: "MER",
          },
          {
            dayNumber: 29,
            dayName: "GIO",
          },
          {
            dayNumber: 30,
            dayName: "VEN",
          },
          {
            dayNumber: 31,
            dayName: "SAB",
          },
        ],
        
        locations2: [
          {
            date: "02/06/2024",
            stages: [
              {
                name: "Pitigliano",
                description: "molto bella, sembra un presepe"
              },
              {
                name: "Manciano",
                description: "ci siamo stati di sera, c'è una fontana affascinante"
              },
              {
                name: "Orbetello",
                description: "magnifica nelle sere d'estate, tramonti incredibili, sembra di stare in africa"
              },
            ],
          },
          {
            date: "03/06/2024",
            stages: [
              {
                name: "Saturnia",
                description: "ho scoperto che la carta non autorizzava il prelievo, bella la cascata del mulino, le terme spa sono piene di tafani"
              },
              {
                name: "Porto Ercole",
                description: "bei muraglioni, da l'idea di una forza erculea"
              },
            ],
          },
          {
            date: "05/06/2024",
            stages: [
              {
                name: "Genova",
                description: "c'è il porto"
              },
              {
                name: "Milano",
                description: "c'è la nebbia"
              },
            ],
          },
          {
            date: "04/06/2024",
            stages: [
              {
                name: "Pisa",
                description: "c'è la torre"
              },
              {
                name: "Firenza",
                description: "culla del rinascimento"
              },
            ],
          },
        ]
      }
    },

    components: { AppNavElements, AppLocations, AppCalendar, AppMap}

  }
  
</script>

<template>
  
    <app-nav-elements />
    <app-locations />
    <app-calendar :juneDays="juneDays" :julyDays="julyDays" :augustDays="augustDays" />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>