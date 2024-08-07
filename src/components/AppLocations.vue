<script>
import { getLocations } from '../db/storage.js'; 

export default {
  data() {
    return {
      locations: []
    };
  },
  methods: {

  },
  
  created() {
    // Il data locations[] viene associato a getLocations() dello storage
    this.locations = getLocations();
  },

  mounted(){
    // console.log(this.locations);
  }
}


</script>

<template>

  <div class="container">

    <h3 class="fw-bold mt-5 text-center">TAPPE DI VIAGGIO</h3>

    <div v-if="locations.length == 0" class="text-center mt-4 text-warning">
      <h3>Aggiungi una tappa di viaggio!</h3>
    </div>

    <div v-if="locations.length != 0" id="carouselLocations" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div
          v-for="(locationGroup, index) in locations" 
          :key="locationGroup.id" 
          class="carousel-item" 
          :class="{ active: index === 0 }"
        >
          <h3 class="my-4 text-center text-success">{{ index + 1 }}° giorno di viaggio</h3>
          <div class="table-container">
            <table class="table table-bordered">
              
              <thead class="table-primary">
                <tr>
                  <th scope="col" colspan="3" class="text-center text-light">{{ locationGroup.date }}</th>
                </tr>
                <tr>
                  <th scope="col" colspan="3" class="text-center text-danger">{{ locationGroup.id }}</th>
                </tr>
                <tr>
                  <th scope="col" class="text-light"style="width: 200px;">Nome</th>
                  <th scope="col" class="text-light">Descrizione</th>
                </tr>
              </thead>      
              <tbody>
                <tr v-for="stage in locationGroup.stages">
                  <td>{{ stage.name }}</td>
                  <td>{{ stage.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselLocations" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselLocations" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    
  </div>

</template>
<style lang="scss" scoped>

  .table-primary {
    --bs-border-width: 2px;
    --bs-table-bg: var(--bs-primary);
  }


  .table-container {
      min-height: 275px;
      max-height: 290px;
      overflow-y: auto;
  }

    .carousel-item {
      padding: 0 5rem;
    }

    .carousel-control-prev, .carousel-control-next {
      width: 32px;
    }

    table {
      margin-bottom: 0;
    }

</style>