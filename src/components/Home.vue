<script>
  import AppLocations from './AppLocations.vue';
  import AppCalendar from './AppCalendar.vue';
  import AppMap from './AppMap.vue';

  export default {
    data() {
      return {
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
            year: 2024
          },
          {
            dayNumber: "02",
            dayName: "DOM",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "03",
            dayName: "LUN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "04",
            dayName: "MAR",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "05",
            dayName: "MER",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "06",
            dayName: "GIO",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "07",
            dayName: "VEN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "08",
            dayName: "SAB",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "09",
            dayName: "DOM",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "10",
            dayName: "LUN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "11",
            dayName: "MAR",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "12",
            dayName: "MER",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "13",
            dayName: "GIO",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "14",
            dayName: "VEN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "15",
            dayName: "SAB",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "16",
            dayName: "DOM",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "17",
            dayName: "LUN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "18",
            dayName: "MAR",
            month: "06",
            year: 2024
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
            year: 2024
          },
          {
            dayNumber: "21",
            dayName: "VEN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "22",
            dayName: "SAB",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "23",
            dayName: "DOM",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "24",
            dayName: "LUN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "25",
            dayName: "MAR",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "26",
            dayName: "MER",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "27",
            dayName: "GIO",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "28",
            dayName: "VEN",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "29",
            dayName: "SAB",
            month: "06",
            year: 2024
          },
          {
            dayNumber: "30",
            dayName: "DOM",
            month: "06",
            year: 2024
          },
        ],

        julyDays: [
          {
            dayNumber: "01",
            dayName: "LUN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "02",
            dayName: "MAR",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "03",
            dayName: "MER",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "04",
            dayName: "GIO",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "05",
            dayName: "VEN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "06",
            dayName: "SAB",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "07",
            dayName: "DOM",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "08",
            dayName: "LUN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "09",
            dayName: "MAR",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "10",
            dayName: "MER",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "11",
            dayName: "GIO",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "12",
            dayName: "VEN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "13",
            dayName: "SAB",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "14",
            dayName: "DOM",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "15",
            dayName: "LUN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "16",
            dayName: "MAR",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "17",
            dayName: "MER",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "18",
            dayName: "GIO",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "19",
            dayName: "VEN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "20",
            dayName: "SAB",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "21",
            dayName: "DOM",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "22",
            dayName: "LUN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "23",
            dayName: "MAR",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "24",
            dayName: "MER",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "25",
            dayName: "GIO",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "26",
            dayName: "VEN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "27",
            dayName: "SAB",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "28",
            dayName: "DOM",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "29",
            dayName: "LUN",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "30",
            dayName: "MAR",
            month: "07",
            year: 2024
          },
          {
            dayNumber: "31",
            dayName: "MER",
            month: "07",
            year: 2024
          },
        ],

        augustDays: [
          {
            dayNumber: "01",
            dayName: "GIO",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "02",
            dayName: "VEN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "03",
            dayName: "SAB",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "04",
            dayName: "DOM",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "05",
            dayName: "LUN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "06",
            dayName: "MAR",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "07",
            dayName: "MER",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "08",
            dayName: "GIO",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "09",
            dayName: "VEN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "10",
            dayName: "SAB",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "11",
            dayName: "DOM",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "12",
            dayName: "LUN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "13",
            dayName: "MAR",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "14",
            dayName: "MER",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "15",
            dayName: "GIO",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "16",
            dayName: "VEN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "17",
            dayName: "SAB",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "18",
            dayName: "DOM",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "19",
            dayName: "LUN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "20",
            dayName: "MAR",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "21",
            dayName: "MER",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "22",
            dayName: "GIO",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "23",
            dayName: "VEN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "24",
            dayName: "SAB",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "25",
            dayName: "DOM",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "26",
            dayName: "LUN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "27",
            dayName: "MAR",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "28",
            dayName: "MER",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "29",
            dayName: "GIO",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "30",
            dayName: "VEN",
            month: "08",
            year: 2024
          },
          {
            dayNumber: "31",
            dayName: "SAB",
            month: "08",
            year: 2024
          },
        ],
        
        /*
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
        */

      }
    },

    components: { AppLocations, AppCalendar, AppMap}

  }
  
</script>

<template>
  
    <app-locations />
    <app-calendar :juneDays="juneDays" :julyDays="julyDays" :augustDays="augustDays" />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>