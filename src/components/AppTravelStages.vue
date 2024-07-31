<script>
  export default {
    data() {
      return {
        // activeIndex: 0,
      }
    },

    props: {
      locations: Array,
    }
  }
  
</script>
<template>

  <div class="container">
    <h2 class="mt-5">Tappa viaggio</h2>

    <div id="carouselLocations" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
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
                <td>{{ locations[0].date }}</td>
                <td>{{ locations[0].name }}</td>
                <td>{{ locations[0].description }}</td>
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
    
    
  </div>

</template>
<style lang="scss" scoped>

  .carousel-item {
    padding: 0 5rem;
  }

  .carousel-control-prev, .carousel-control-next {
    width: 32px;
  }

</style>