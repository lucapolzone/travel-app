<script>
  import AppNavElements from './AppNavElements.vue';
  import AppLocations from './AppLocations.vue';
  import AppCalendar from './AppCalendar.vue';
  import AppMap from './AppMap.vue';

  export default {
    data() {
      return {
        // activeIndex: 0,
        calendarController: {
          month: "06",
          month: "07",
          month: "08",
          year: 2024
        },

        juneDays: [
          {
            dayNumber: 1,
            dayName: "SAB",
            month: "calendarController.month",
            year: "calendarController.year"
          },
          {
            dayNumber: 2,
            dayName: "DOM",
          },
          {
            dayNumber: 3,
            dayName: "LUN",
          },
          {
            dayNumber: 4,
            dayName: "MAR",
          },
          {
            dayNumber: 5,
            dayName: "MER",
          },
          {
            dayNumber: 6,
            dayName: "GIO",
          },
          {
            dayNumber: 7,
            dayName: "VEN",
          },
          {
            dayNumber: 8,
            dayName: "SAB",
          },
          {
            dayNumber: 9,
            dayName: "DOM",
          },
          {
            dayNumber: 10,
            dayName: "LUN",
          },
          {
            dayNumber: 11,
            dayName: "MAR",
          },
          {
            dayNumber: 12,
            dayName: "MER",
          },
          {
            dayNumber: 13,
            dayName: "GIO",
          },
          {
            dayNumber: 14,
            dayName: "VEN",
          },
          {
            dayNumber: 15,
            dayName: "SAB",
          },
          {
            dayNumber: 16,
            dayName: "DOM",
          },
          {
            dayNumber: 17,
            dayName: "LUN",
          },
          {
            dayNumber: 18,
            dayName: "MAR",
          },
          {
            dayNumber: 19,
            dayName: "MER",
          },
          {
            dayNumber: 20,
            dayName: "GIO",
          },
          {
            dayNumber: 21,
            dayName: "VEN",
          },
          {
            dayNumber: 22,
            dayName: "SAB",
          },
          {
            dayNumber: 23,
            dayName: "DOM",
          },
          {
            dayNumber: 24,
            dayName: "LUN",
          },
          {
            dayNumber: 25,
            dayName: "MAR",
          },
          {
            dayNumber: 26,
            dayName: "MER",
          },
          {
            dayNumber: 27,
            dayName: "GIO",
          },
          {
            dayNumber: 28,
            dayName: "VEN",
          },
          {
            dayNumber: 29,
            dayName: "SAB",
          },
          {
            dayNumber: 30,
            dayName: "DOM",
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
        
        locations: [
          {
            date: "02/06/2024",
            name: "Pitigliano",
            description: "molto bella, sembra un presepe"
          },
          {
            date: "03/06/2024",
            name: "Manciano",
            description: "ci siamo stati di sera, c'è una fontana affascinante"
          },
          {
            date: "04/06/2024",
            name: "Saturnia",
            description: "ho scoperto che la carta non autorizzava il prelievo, bella la cascata del mulino, le terme spa sono piene di tafani"
          },
          {
            date: "05/06/2024",
            name: "Orbetello",
            description: "magnifica nelle sere d'estate, tramonti incredibili, sembra di stare in africa"
          },
          {
            date: "06/06/2024",
            name: "Porto Ercole",
            description: "bei muraglioni, da l'idea di una forza erculea"
          },
                                                  
        ],

       
        locations2: [
          {
            day02062024: [
              {
                name: "Pitigliano",
                description: "molto bella, sembra un presepe"
              },
              {
                name: "Pitigliano",
                description: "molto bella, sembra un presepe"
              },
            ],
          },
          {
            day03062024: [
              {
                name: "Manciano",
                description: "ci siamo stati di sera, c'è una fontana affascinante"
              },
              {
                name: "Pitigliano",
                description: "molto bella, sembra un presepe"
              },
            ],
          }
        ]

      }
    },

    components: { AppNavElements, AppLocations, AppCalendar, AppMap}

  }
  
</script>

<template>
  
    <app-nav-elements />
    <app-locations :locations="locations" />
    <app-calendar :juneDays="juneDays" :julyDays="julyDays" :augustDays="augustDays" />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>