<script>
import { getLocations, setLocations } from '../db/storage.js'; 

export default {
  data() {
    return {
      locations: []
    };
  },
  methods: {
    //Funzione per cancellare tappa
    deleteStage(locationId, stageName) {
      // Trova il locationGroup corrispondente per ID
      const locationIndex = this.locations.findIndex(location => location.id === locationId);
      
      if (locationIndex !== -1) {
        // Trova l'indice della tappa specifica nel gruppo
        const stageIndex = this.locations[locationIndex].stages.findIndex(stage => stage.name === stageName);

        if (stageIndex !== -1) {
          // Rimuove la tappa specifica
          this.locations[locationIndex].stages.splice(stageIndex, 1);

          // Aggiorna il localStorage
          setLocations(this.locations);
        }
      }
    },

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
                  <th scope="col" colspan="5" class="text-center text-light">{{ locationGroup.date }}</th>
                </tr>
                <tr>
                  <!-- <th scope="col" colspan="5" class="text-center text-danger">{{ locationGroup.id }}</th> -->
                </tr>
                <tr>
                  <th scope="col" class="text-light"style="width: 200px;">Nome</th>
                  <th scope="col" class="text-light">Descrizione</th>
                  <th scope="col" class="text-light text-center">Modifica</th>
                  <th scope="col" class="text-light text-center">Cancella</th>
                </tr>
              </thead>      
              <tbody>
                <tr v-for="(stage, stageIndex) in locationGroup.stages" :key="stage.name">
                  <td>{{ stage.name }}</td>
                  <td>{{ stage.description }}</td>
                  <td class="text-center">
                    <router-link :to="{ name: 'edit-location-slug', params: { slug: locationGroup.id, stageIndex: stageIndex } }">
                      <button class="btn btn-warning">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                    </router-link>            
                  </td>
                  <td class="text-center">
                    <button @click="deleteStage(locationGroup.id, stage.name)" class="btn btn-danger">
                      <i class="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
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

    .carousel-control-prev-icon, .carousel-control-next-icon {
      background-color: red;
    }


    table {
      margin-bottom: 0;
    }

</style>