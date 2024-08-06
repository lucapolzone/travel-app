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
  
  props: {
    locations2: Array
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


    <h2 class="mt-5">Tappe viaggio</h2>

    <table class="table table-bordered" v-for="locationGroup in locations">
      <thead class="table-primary">
        <tr>
          <th scope="col" colspan="3" class="text-center">{{ locationGroup.date }}</th>
        </tr>
        <tr>
          <th scope="col" colspan="3" class="text-center text-danger">{{ locationGroup.id }}</th>
        </tr>
        <tr>
          <th scope="col" style="width: 200px;">Nome</th>
          <th scope="col">Descrizione</th>
        </tr>
      </thead>      
      <tbody>
        <tr v-for="stage in locationGroup.stages">
          <td>{{ stage.name }}</td>
          <td>{{ stage.description }}</td>
        </tr>
      </tbody>
    </table>
    
    <!-- 
    <div id="carouselLocations" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <table class="table table-bordered mt-3">
            <thead class="table-primary">
              <tr>
                <th colspan="5">01/06/2024</th>
              </tr>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrizione</th>
                <th scope="col">Modifica</th>
                <th scope="col">Cancella</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ locations[0].date }}</td>
                <td>{{ locations[0].name }}</td>
                <td>{{ locations[0].description }}</td>
                <td>
                  <a href="#" class="btn btn-warning">
                    <i class="fa-solid fa-pen"></i>
                  </a>
                </td>
                <td>
                  <a href="#" class="btn btn-danger">
                    <i class="fa-solid fa-trash-can"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="carousel-item">
          <table class="table table-bordered mt-3">
            <thead class="table-primary">
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ locations[1].date }}</td>
                <td>{{ locations[1].name }}</td>
                <td>{{ locations[1].description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="carousel-item">
          <table class="table table-bordered mt-3">
            <thead class="table-primary">
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ locations[2].date }}</td>
                <td>{{ locations[2].name }}</td>
                <td>{{ locations[2].description }}</td>
              </tr>
            </tbody>
          </table>
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
      -->
    
    
  </div>

</template>
<style lang="scss" scoped>

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