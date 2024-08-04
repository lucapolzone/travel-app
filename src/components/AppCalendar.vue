<script>
import { getLocations } from '../db/storage.js';

  export default {
    data() {
      return {
      }
    },

    props: {
      juneDays: Array,
      julyDays: Array,
      augustDays: Array,
    },
   
    methods: {
    goToLocation(dayNumber, month) {
      const slug = `${dayNumber}-${month}`;
      this.$router.push(`/new-location/${slug}`);
    },


  },
  mounted() {
    // Ottieni le date delle tappe aggiunte da localStorage o da una fonte di dati
    getLocations();
  }
}
  
</script>
<template>
  <div class="container text-center">

    <h2 class="mt-5">Calendario</h2>

    <div id="carouselCalendar" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row gy-2">
            <h3>Giugno</h3>
            <div v-for="juneDay in juneDays" class="col-2" @click="goToLocation(juneDay.dayNumber, juneDay.month)">
              <div class="card">
                <p>{{ juneDay.dayNumber }}</p>
                <p>{{ juneDay.dayName }}</p>
              </div>
            </div>
          </div>     
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
            <h3>Luglio</h3>
            <div v-for="julyDay in julyDays" class="col-2">
              <div class="card">
                <p>{{ julyDay.dayNumber }}</p>
                <p>{{ julyDay.dayName }}</p>
              </div>
            </div>
          </div>   
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
          <h3>Agosto</h3>
           <div v-for="augustDay in augustDays" class="col-2">
              <div class="card">
                <p>
                  {{ augustDay.dayNumber }}
                </p>
                <p>
                  {{ augustDay.dayName }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselCalendar" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselCalendar" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>

</template>
<style lang="scss" scoped>
  .carousel-item {
    padding: 0 5rem;
  }

  .card {
    width: 125px;
    aspect-ratio: 1;
    // height: 125px;
    background-color: #999;

    &.active {
      background-color: rgb(255, 52, 52);
      color: #ffffff;
    }
  }


  .carousel-control-prev, .carousel-control-next {
    width: 32px;
  }

</style>