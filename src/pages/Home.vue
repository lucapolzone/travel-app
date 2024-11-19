<script>
  import AppLocations from '../components/AppLocations.vue';
  import AppCalendar from '../components/AppCalendar.vue';
  import AppMap from '../components/AppMap.vue';

  export default {
    data() {
      return {
        // calendarController: {
        //   juneMonth: "06",
        //   julyMonth: "07",
        //   augustMonth: "08",
        //   year: "2024"
        // },
        januaryDays: [
          { dayNumber: "01", dayName: "LUN", month: "01", year: 2024 },
          { dayNumber: "02", dayName: "MAR", month: "01", year: 2024 },
          { dayNumber: "03", dayName: "MER", month: "01", year: 2024 },
          { dayNumber: "04", dayName: "GIO", month: "01", year: 2024 },
          { dayNumber: "05", dayName: "VEN", month: "01", year: 2024 },
          { dayNumber: "06", dayName: "SAB", month: "01", year: 2024 },
          { dayNumber: "07", dayName: "DOM", month: "01", year: 2024 },
          { dayNumber: "08", dayName: "LUN", month: "01", year: 2024 },
          { dayNumber: "09", dayName: "MAR", month: "01", year: 2024 },
          { dayNumber: "10", dayName: "MER", month: "01", year: 2024 },
          { dayNumber: "11", dayName: "GIO", month: "01", year: 2024 },
          { dayNumber: "12", dayName: "VEN", month: "01", year: 2024 },
          { dayNumber: "13", dayName: "SAB", month: "01", year: 2024 },
          { dayNumber: "14", dayName: "DOM", month: "01", year: 2024 },
          { dayNumber: "15", dayName: "LUN", month: "01", year: 2024 },
          { dayNumber: "16", dayName: "MAR", month: "01", year: 2024 },
          { dayNumber: "17", dayName: "MER", month: "01", year: 2024 },
          { dayNumber: "18", dayName: "GIO", month: "01", year: 2024 },
          { dayNumber: "19", dayName: "VEN", month: "01", year: 2024 },
          { dayNumber: "20", dayName: "SAB", month: "01", year: 2024 },
          { dayNumber: "21", dayName: "DOM", month: "01", year: 2024 },
          { dayNumber: "22", dayName: "LUN", month: "01", year: 2024 },
          { dayNumber: "23", dayName: "MAR", month: "01", year: 2024 },
          { dayNumber: "24", dayName: "MER", month: "01", year: 2024 },
          { dayNumber: "25", dayName: "GIO", month: "01", year: 2024 },
          { dayNumber: "26", dayName: "VEN", month: "01", year: 2024 },
          { dayNumber: "27", dayName: "SAB", month: "01", year: 2024 },
          { dayNumber: "28", dayName: "DOM", month: "01", year: 2024 },
          { dayNumber: "29", dayName: "LUN", month: "01", year: 2024 },
          { dayNumber: "30", dayName: "MAR", month: "01", year: 2024 },
          { dayNumber: "31", dayName: "MER", month: "01", year: 2024 }
        ],

        februaryDays: [
          { dayNumber: "01", dayName: "GIO", month: "02", year: 2024 },
          { dayNumber: "02", dayName: "VEN", month: "02", year: 2024 },
          { dayNumber: "03", dayName: "SAB", month: "02", year: 2024 },
          { dayNumber: "04", dayName: "DOM", month: "02", year: 2024 },
          { dayNumber: "05", dayName: "LUN", month: "02", year: 2024 },
          { dayNumber: "06", dayName: "MAR", month: "02", year: 2024 },
          { dayNumber: "07", dayName: "MER", month: "02", year: 2024 },
          { dayNumber: "08", dayName: "GIO", month: "02", year: 2024 },
          { dayNumber: "09", dayName: "VEN", month: "02", year: 2024 },
          { dayNumber: "10", dayName: "SAB", month: "02", year: 2024 },
          { dayNumber: "11", dayName: "DOM", month: "02", year: 2024 },
          { dayNumber: "12", dayName: "LUN", month: "02", year: 2024 },
          { dayNumber: "13", dayName: "MAR", month: "02", year: 2024 },
          { dayNumber: "14", dayName: "MER", month: "02", year: 2024 },
          { dayNumber: "15", dayName: "GIO", month: "02", year: 2024 },
          { dayNumber: "16", dayName: "VEN", month: "02", year: 2024 },
          { dayNumber: "17", dayName: "SAB", month: "02", year: 2024 },
          { dayNumber: "18", dayName: "DOM", month: "02", year: 2024 },
          { dayNumber: "19", dayName: "LUN", month: "02", year: 2024 },
          { dayNumber: "20", dayName: "MAR", month: "02", year: 2024 },
          { dayNumber: "21", dayName: "MER", month: "02", year: 2024 },
          { dayNumber: "22", dayName: "GIO", month: "02", year: 2024 },
          { dayNumber: "23", dayName: "VEN", month: "02", year: 2024 },
          { dayNumber: "24", dayName: "SAB", month: "02", year: 2024 },
          { dayNumber: "25", dayName: "DOM", month: "02", year: 2024 },
          { dayNumber: "26", dayName: "LUN", month: "02", year: 2024 },
          { dayNumber: "27", dayName: "MAR", month: "02", year: 2024 },
          { dayNumber: "28", dayName: "MER", month: "02", year: 2024 },
          { dayNumber: "29", dayName: "GIO", month: "02", year: 2024 }
        ],

        marchDays: [
          { dayNumber: "01", dayName: "VEN", month: "03", year: 2024 },
          { dayNumber: "02", dayName: "SAB", month: "03", year: 2024 },
          { dayNumber: "03", dayName: "DOM", month: "03", year: 2024 },
          { dayNumber: "04", dayName: "LUN", month: "03", year: 2024 },
          { dayNumber: "05", dayName: "MAR", month: "03", year: 2024 },
          { dayNumber: "06", dayName: "MER", month: "03", year: 2024 },
          { dayNumber: "07", dayName: "GIO", month: "03", year: 2024 },
          { dayNumber: "08", dayName: "VEN", month: "03", year: 2024 },
          { dayNumber: "09", dayName: "SAB", month: "03", year: 2024 },
          { dayNumber: "10", dayName: "DOM", month: "03", year: 2024 },
          { dayNumber: "11", dayName: "LUN", month: "03", year: 2024 },
          { dayNumber: "12", dayName: "MAR", month: "03", year: 2024 },
          { dayNumber: "13", dayName: "MER", month: "03", year: 2024 },
          { dayNumber: "14", dayName: "GIO", month: "03", year: 2024 },
          { dayNumber: "15", dayName: "VEN", month: "03", year: 2024 },
          { dayNumber: "16", dayName: "SAB", month: "03", year: 2024 },
          { dayNumber: "17", dayName: "DOM", month: "03", year: 2024 },
          { dayNumber: "18", dayName: "LUN", month: "03", year: 2024 },
          { dayNumber: "19", dayName: "MAR", month: "03", year: 2024 },
          { dayNumber: "20", dayName: "MER", month: "03", year: 2024 },
          { dayNumber: "21", dayName: "GIO", month: "03", year: 2024 },
          { dayNumber: "22", dayName: "VEN", month: "03", year: 2024 },
          { dayNumber: "23", dayName: "SAB", month: "03", year: 2024 },
          { dayNumber: "24", dayName: "DOM", month: "03", year: 2024 },
          { dayNumber: "25", dayName: "LUN", month: "03", year: 2024 },
          { dayNumber: "26", dayName: "MAR", month: "03", year: 2024 },
          { dayNumber: "27", dayName: "MER", month: "03", year: 2024 },
          { dayNumber: "28", dayName: "GIO", month: "03", year: 2024 },
          { dayNumber: "29", dayName: "VEN", month: "03", year: 2024 },
          { dayNumber: "30", dayName: "SAB", month: "03", year: 2024 },
          { dayNumber: "31", dayName: "DOM", month: "03", year: 2024 }
        ],

        aprilDays: [
          { dayNumber: "01", dayName: "LUN", month: "04", year: 2024 },
          { dayNumber: "02", dayName: "MAR", month: "04", year: 2024 },
          { dayNumber: "03", dayName: "MER", month: "04", year: 2024 },
          { dayNumber: "04", dayName: "GIO", month: "04", year: 2024 },
          { dayNumber: "05", dayName: "VEN", month: "04", year: 2024 },
          { dayNumber: "06", dayName: "SAB", month: "04", year: 2024 },
          { dayNumber: "07", dayName: "DOM", month: "04", year: 2024 },
          { dayNumber: "08", dayName: "LUN", month: "04", year: 2024 },
          { dayNumber: "09", dayName: "MAR", month: "04", year: 2024 },
          { dayNumber: "10", dayName: "MER", month: "04", year: 2024 },
          { dayNumber: "11", dayName: "GIO", month: "04", year: 2024 },
          { dayNumber: "12", dayName: "VEN", month: "04", year: 2024 },
          { dayNumber: "13", dayName: "SAB", month: "04", year: 2024 },
          { dayNumber: "14", dayName: "DOM", month: "04", year: 2024 },
          { dayNumber: "15", dayName: "LUN", month: "04", year: 2024 },
          { dayNumber: "16", dayName: "MAR", month: "04", year: 2024 },
          { dayNumber: "17", dayName: "MER", month: "04", year: 2024 },
          { dayNumber: "18", dayName: "GIO", month: "04", year: 2024 },
          { dayNumber: "19", dayName: "VEN", month: "04", year: 2024 },
          { dayNumber: "20", dayName: "SAB", month: "04", year: 2024 },
          { dayNumber: "21", dayName: "DOM", month: "04", year: 2024 },
          { dayNumber: "22", dayName: "LUN", month: "04", year: 2024 },
          { dayNumber: "23", dayName: "MAR", month: "04", year: 2024 },
          { dayNumber: "24", dayName: "MER", month: "04", year: 2024 },
          { dayNumber: "25", dayName: "GIO", month: "04", year: 2024 },
          { dayNumber: "26", dayName: "VEN", month: "04", year: 2024 },
          { dayNumber: "27", dayName: "SAB", month: "04", year: 2024 },
          { dayNumber: "28", dayName: "DOM", month: "04", year: 2024 },
          { dayNumber: "29", dayName: "LUN", month: "04", year: 2024 },
          { dayNumber: "30", dayName: "MAR", month: "04", year: 2024 }
        ],

        mayDays: [
          { dayNumber: "01", dayName: "MER", month: "05", year: 2024 },
          { dayNumber: "02", dayName: "GIO", month: "05", year: 2024 },
          { dayNumber: "03", dayName: "VEN", month: "05", year: 2024 },
          { dayNumber: "04", dayName: "SAB", month: "05", year: 2024 },
          { dayNumber: "05", dayName: "DOM", month: "05", year: 2024 },
          { dayNumber: "06", dayName: "LUN", month: "05", year: 2024 },
          { dayNumber: "07", dayName: "MAR", month: "05", year: 2024 },
          { dayNumber: "08", dayName: "MER", month: "05", year: 2024 },
          { dayNumber: "09", dayName: "GIO", month: "05", year: 2024 },
          { dayNumber: "10", dayName: "VEN", month: "05", year: 2024 },
          { dayNumber: "11", dayName: "SAB", month: "05", year: 2024 },
          { dayNumber: "12", dayName: "DOM", month: "05", year: 2024 },
          { dayNumber: "13", dayName: "LUN", month: "05", year: 2024 },
          { dayNumber: "14", dayName: "MAR", month: "05", year: 2024 },
          { dayNumber: "15", dayName: "MER", month: "05", year: 2024 },
          { dayNumber: "16", dayName: "GIO", month: "05", year: 2024 },
          { dayNumber: "17", dayName: "VEN", month: "05", year: 2024 },
          { dayNumber: "18", dayName: "SAB", month: "05", year: 2024 },
          { dayNumber: "19", dayName: "DOM", month: "05", year: 2024 },
          { dayNumber: "20", dayName: "LUN", month: "05", year: 2024 },
          { dayNumber: "21", dayName: "MAR", month: "05", year: 2024 },
          { dayNumber: "22", dayName: "MER", month: "05", year: 2024 },
          { dayNumber: "23", dayName: "GIO", month: "05", year: 2024 },
          { dayNumber: "24", dayName: "VEN", month: "05", year: 2024 },
          { dayNumber: "25", dayName: "SAB", month: "05", year: 2024 },
          { dayNumber: "26", dayName: "DOM", month: "05", year: 2024 },
          { dayNumber: "27", dayName: "LUN", month: "05", year: 2024 },
          { dayNumber: "28", dayName: "MAR", month: "05", year: 2024 },
          { dayNumber: "29", dayName: "MER", month: "05", year: 2024 },
          { dayNumber: "30", dayName: "GIO", month: "05", year: 2024 },
          { dayNumber: "31", dayName: "VEN", month: "05", year: 2024 }
        ],

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

        septemberDays: [
          { dayNumber: "01", dayName: "DOM", month: "09", year: 2024 },
          { dayNumber: "02", dayName: "LUN", month: "09", year: 2024 },
          { dayNumber: "03", dayName: "MAR", month: "09", year: 2024 },
          { dayNumber: "04", dayName: "MER", month: "09", year: 2024 },
          { dayNumber: "05", dayName: "GIO", month: "09", year: 2024 },
          { dayNumber: "06", dayName: "VEN", month: "09", year: 2024 },
          { dayNumber: "07", dayName: "SAB", month: "09", year: 2024 },
          { dayNumber: "08", dayName: "DOM", month: "09", year: 2024 },
          { dayNumber: "09", dayName: "LUN", month: "09", year: 2024 },
          { dayNumber: "10", dayName: "MAR", month: "09", year: 2024 },
          { dayNumber: "11", dayName: "MER", month: "09", year: 2024 },
          { dayNumber: "12", dayName: "GIO", month: "09", year: 2024 },
          { dayNumber: "13", dayName: "VEN", month: "09", year: 2024 },
          { dayNumber: "14", dayName: "SAB", month: "09", year: 2024 },
          { dayNumber: "15", dayName: "DOM", month: "09", year: 2024 },
          { dayNumber: "16", dayName: "LUN", month: "09", year: 2024 },
          { dayNumber: "17", dayName: "MAR", month: "09", year: 2024 },
          { dayNumber: "18", dayName: "MER", month: "09", year: 2024 },
          { dayNumber: "19", dayName: "GIO", month: "09", year: 2024 },
          { dayNumber: "20", dayName: "VEN", month: "09", year: 2024 },
          { dayNumber: "21", dayName: "SAB", month: "09", year: 2024 },
          { dayNumber: "22", dayName: "DOM", month: "09", year: 2024 },
          { dayNumber: "23", dayName: "LUN", month: "09", year: 2024 },
          { dayNumber: "24", dayName: "MAR", month: "09", year: 2024 },
          { dayNumber: "25", dayName: "MER", month: "09", year: 2024 },
          { dayNumber: "26", dayName: "GIO", month: "09", year: 2024 },
          { dayNumber: "27", dayName: "VEN", month: "09", year: 2024 },
          { dayNumber: "28", dayName: "SAB", month: "09", year: 2024 },
          { dayNumber: "29", dayName: "DOM", month: "09", year: 2024 },
          { dayNumber: "30", dayName: "LUN", month: "09", year: 2024 }
        ],

        octoberDays: [
          { dayNumber: "01", dayName: "MAR", month: "10", year: 2024 },
          { dayNumber: "02", dayName: "MER", month: "10", year: 2024 },
          { dayNumber: "03", dayName: "GIO", month: "10", year: 2024 },
          { dayNumber: "04", dayName: "VEN", month: "10", year: 2024 },
          { dayNumber: "05", dayName: "SAB", month: "10", year: 2024 },
          { dayNumber: "06", dayName: "DOM", month: "10", year: 2024 },
          { dayNumber: "07", dayName: "LUN", month: "10", year: 2024 },
          { dayNumber: "08", dayName: "MAR", month: "10", year: 2024 },
          { dayNumber: "09", dayName: "MER", month: "10", year: 2024 },
          { dayNumber: "10", dayName: "GIO", month: "10", year: 2024 },
          { dayNumber: "11", dayName: "VEN", month: "10", year: 2024 },
          { dayNumber: "12", dayName: "SAB", month: "10", year: 2024 },
          { dayNumber: "13", dayName: "DOM", month: "10", year: 2024 },
          { dayNumber: "14", dayName: "LUN", month: "10", year: 2024 },
          { dayNumber: "15", dayName: "MAR", month: "10", year: 2024 },
          { dayNumber: "16", dayName: "MER", month: "10", year: 2024 },
          { dayNumber: "17", dayName: "GIO", month: "10", year: 2024 },
          { dayNumber: "18", dayName: "VEN", month: "10", year: 2024 },
          { dayNumber: "19", dayName: "SAB", month: "10", year: 2024 },
          { dayNumber: "20", dayName: "DOM", month: "10", year: 2024 },
          { dayNumber: "21", dayName: "LUN", month: "10", year: 2024 },
          { dayNumber: "22", dayName: "MAR", month: "10", year: 2024 },
          { dayNumber: "23", dayName: "MER", month: "10", year: 2024 },
          { dayNumber: "24", dayName: "GIO", month: "10", year: 2024 },
          { dayNumber: "25", dayName: "VEN", month: "10", year: 2024 },
          { dayNumber: "26", dayName: "SAB", month: "10", year: 2024 },
          { dayNumber: "27", dayName: "DOM", month: "10", year: 2024 },
          { dayNumber: "28", dayName: "LUN", month: "10", year: 2024 },
          { dayNumber: "29", dayName: "MAR", month: "10", year: 2024 },
          { dayNumber: "30", dayName: "MER", month: "10", year: 2024 },
          { dayNumber: "31", dayName: "GIO", month: "10", year: 2024 }
        ],

        novemberDays: [
          { dayNumber: "01", dayName: "VEN", month: "11", year: 2024 },
          { dayNumber: "02", dayName: "SAB", month: "11", year: 2024 },
          { dayNumber: "03", dayName: "DOM", month: "11", year: 2024 },
          { dayNumber: "04", dayName: "LUN", month: "11", year: 2024 },
          { dayNumber: "05", dayName: "MAR", month: "11", year: 2024 },
          { dayNumber: "06", dayName: "MER", month: "11", year: 2024 },
          { dayNumber: "07", dayName: "GIO", month: "11", year: 2024 },
          { dayNumber: "08", dayName: "VEN", month: "11", year: 2024 },
          { dayNumber: "09", dayName: "SAB", month: "11", year: 2024 },
          { dayNumber: "10", dayName: "DOM", month: "11", year: 2024 },
          { dayNumber: "11", dayName: "LUN", month: "11", year: 2024 },
          { dayNumber: "12", dayName: "MAR", month: "11", year: 2024 },
          { dayNumber: "13", dayName: "MER", month: "11", year: 2024 },
          { dayNumber: "14", dayName: "GIO", month: "11", year: 2024 },
          { dayNumber: "15", dayName: "VEN", month: "11", year: 2024 },
          { dayNumber: "16", dayName: "SAB", month: "11", year: 2024 },
          { dayNumber: "17", dayName: "DOM", month: "11", year: 2024 },
          { dayNumber: "18", dayName: "LUN", month: "11", year: 2024 },
          { dayNumber: "19", dayName: "MAR", month: "11", year: 2024 },
          { dayNumber: "20", dayName: "MER", month: "11", year: 2024 },
          { dayNumber: "21", dayName: "GIO", month: "11", year: 2024 },
          { dayNumber: "22", dayName: "VEN", month: "11", year: 2024 },
          { dayNumber: "23", dayName: "SAB", month: "11", year: 2024 },
          { dayNumber: "24", dayName: "DOM", month: "11", year: 2024 },
          { dayNumber: "25", dayName: "LUN", month: "11", year: 2024 },
          { dayNumber: "26", dayName: "MAR", month: "11", year: 2024 },
          { dayNumber: "27", dayName: "MER", month: "11", year: 2024 },
          { dayNumber: "28", dayName: "GIO", month: "11", year: 2024 },
          { dayNumber: "29", dayName: "VEN", month: "11", year: 2024 },
          { dayNumber: "30", dayName: "SAB", month: "11", year: 2024 }
        ],

        decemberDays: [
          { dayNumber: "01", dayName: "DOM", month: "12", year: 2024 },
          { dayNumber: "02", dayName: "LUN", month: "12", year: 2024 },
          { dayNumber: "03", dayName: "MAR", month: "12", year: 2024 },
          { dayNumber: "04", dayName: "MER", month: "12", year: 2024 },
          { dayNumber: "05", dayName: "GIO", month: "12", year: 2024 },
          { dayNumber: "06", dayName: "VEN", month: "12", year: 2024 },
          { dayNumber: "07", dayName: "SAB", month: "12", year: 2024 },
          { dayNumber: "08", dayName: "DOM", month: "12", year: 2024 },
          { dayNumber: "09", dayName: "LUN", month: "12", year: 2024 },
          { dayNumber: "10", dayName: "MAR", month: "12", year: 2024 },
          { dayNumber: "11", dayName: "MER", month: "12", year: 2024 },
          { dayNumber: "12", dayName: "GIO", month: "12", year: 2024 },
          { dayNumber: "13", dayName: "VEN", month: "12", year: 2024 },
          { dayNumber: "14", dayName: "SAB", month: "12", year: 2024 },
          { dayNumber: "15", dayName: "DOM", month: "12", year: 2024 },
          { dayNumber: "16", dayName: "LUN", month: "12", year: 2024 },
          { dayNumber: "17", dayName: "MAR", month: "12", year: 2024 },
          { dayNumber: "18", dayName: "MER", month: "12", year: 2024 },
          { dayNumber: "19", dayName: "GIO", month: "12", year: 2024 },
          { dayNumber: "20", dayName: "VEN", month: "12", year: 2024 },
          { dayNumber: "21", dayName: "SAB", month: "12", year: 2024 },
          { dayNumber: "22", dayName: "DOM", month: "12", year: 2024 },
          { dayNumber: "23", dayName: "LUN", month: "12", year: 2024 },
          { dayNumber: "24", dayName: "MAR", month: "12", year: 2024 },
          { dayNumber: "25", dayName: "MER", month: "12", year: 2024 },
          { dayNumber: "26", dayName: "GIO", month: "12", year: 2024 },
          { dayNumber: "27", dayName: "VEN", month: "12", year: 2024 },
          { dayNumber: "28", dayName: "SAB", month: "12", year: 2024 },
          { dayNumber: "29", dayName: "DOM", month: "12", year: 2024 },
          { dayNumber: "30", dayName: "LUN", month: "12", year: 2024 },
          { dayNumber: "31", dayName: "MAR", month: "12", year: 2024 }
        ],

      }
    },

    components: { AppLocations, AppCalendar, AppMap}

  }
  
</script>

<template>
  
    <app-locations />
    <app-calendar 
      :januaryDays="januaryDays" 
      :februaryDays="februaryDays" 
      :marchDays="marchDays" 
      :aprilDays="aprilDays" 
      :mayDays="mayDays" 
      :juneDays="juneDays" 
      :julyDays="julyDays" 
      :augustDays="augustDays" 
      :septemberDays="septemberDays" 
      :octoberDays="octoberDays" 
      :novemberDays="novemberDays" 
      :decemberDays="decemberDays" 
    />
    <app-map />
  
</template>

<style lang="scss" scoped>
</style>