<script>
  export default {
    data() {
      return {
        // activeIndex: 0,
      }
    },

    props: {
      juneDays: Array,
      julyDays: Array,
      augustDays: Array,
    }
  }
  
</script>
<template>
  <div class="container text-center">

    <h2 class="mt-5">Calendario</h2>

    <div id="carouselExample" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row gy-2">
            <h3>Giugno</h3>
            <div v-for="juneDay in juneDays" class="col-2">
              <div class="card">
                <p>
                  {{ juneDay.dayNumber }}
                </p>
                <p>
                  {{ juneDay.dayName }}
                </p>
              </div>
            </div>
          </div>     
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
            <h3>Luglio</h3>
            <div v-for="julyDay in julyDays" class="col-2">
              <div class="card">
                <p>
                  {{ julyDay.dayNumber }}
                </p>
                <p>
                  {{ julyDay.dayName }}
                </p>
              </div>
            </div>
          </div>   
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
          <h3>Agosto</h3>
           <div v-for="augustDay in augustDays" class="col">
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
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>

</template>
<style lang="scss" scoped>
  .carousel-item {
    padding: 0 10rem;
  }

  .card {
    width: 125px;
    aspect-ratio: 1;
    // height: 125px;
  }
</style>