<script>
import { getLocations } from '../db/storage.js';

  export default {
    data() {
      return {
        activeDates: []  // Per memorizzare le date attive
      }
    },

    props: {
      juneDays: Array,
      julyDays: Array,
      augustDays: Array,
    },
   
    methods: {
      isActive(calendarDay) {
        const dateStr = `${calendarDay.dayNumber}/${calendarDay.month}/${calendarDay.year}`;
        // console.log(dateStr, this.activeDates.includes(dateStr));  // Controllo se le date vengono confrontate correttamente
        return this.activeDates.includes(dateStr);
      },

      goToLocationAndActiveCard(calendarDay) {
        const slug = `${calendarDay.dayNumber}-${calendarDay.month}`;
        this.$router.push(`/new-location/${slug}`);
      },

      showModal(day) {
        const slug = `${day.dayNumber}-${day.month}`;
        const modal = new bootstrap.Modal(document.getElementById(`modal-${slug}`));
        modal.show();
      },

      getLocationForModal(slug) {
        const locations = getLocations();
        return locations.find(location => location.id === slug) || {};
      }      
    },
    mounted() {
      // Ottiengo le date delle tappe aggiunte da localStorage
      const locations = getLocations();

      // Estraggo le date attive dall'array di locations e le assegno a activeDates
      this.activeDates = locations.map(location => location.date);
      // console.log(this.activeDates);  // Controllo se activeDates è popolato correttamente
    },
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
            <div v-for="juneDay in juneDays" class="col-2">
              <div 
                class="card"
                :class="{ active: isActive(juneDay) }"
                @click="isActive(juneDay) && showModal(juneDay)"
              >
                <p>{{ juneDay.dayNumber }}</p>
                <p>{{ juneDay.dayName }}</p>
              </div>
              <div class="text-start">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" @click="goToLocationAndActiveCard(juneDay)">
                  Aggiungi tappa
                </button>
                <!-- Modal -->
                <div class="modal fade" :id="`modal-${juneDay.dayNumber}-${juneDay.month}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {{ juneDay.dayNumber }}/{{ juneDay.month }}/{{ juneDay.year }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <!-- Table content -->
                        <table class="table table-bordered">
                          <thead class="table-primary">
                            <tr>
                              <th scope="col" colspan="3" class="text-center">{{ getLocationForModal(`${juneDay.dayNumber}-${juneDay.month}`).date }}</th>
                            </tr>
                            <tr>
                              <th scope="col" colspan="3" class="text-center text-danger">{{ juneDay.dayNumber }}-{{ juneDay.month }}</th>
                            </tr>
                            <tr>
                              <th scope="col" style="width: 200px;">Nome</th>
                              <th scope="col">Descrizione</th>
                            </tr>
                          </thead>      
                          <tbody>
                            <tr v-for="stage in getLocationForModal(`${juneDay.dayNumber}-${juneDay.month}`).stages" :key="stage.name">
                              <td>{{ stage.name }}</td>
                              <td>{{ stage.description }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>                      
              </div>
            </div>
          </div>     
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
            <h3>Luglio</h3>
            <div v-for="julyDay in julyDays" class="col-2">
              <div class="card"
                :class="{ active: isActive(julyDay) }"
                @click="isActive(julyDay) && showModal(julyDay)"
              >
                <p>{{ julyDay.dayNumber }}</p>
                <p>{{ julyDay.dayName }}</p>
              </div>
              <div class="text-start">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" @click="goToLocationAndActiveCard(julyDay)">
                  Aggiungi tappa
                </button>      
                <!-- Modal -->
                <div class="modal fade" :id="`modal-${julyDay.dayNumber}-${julyDay.month}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {{ julyDay.dayNumber }}/{{ julyDay.month }}/{{ julyDay.year }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <!-- Table content -->
                        <table class="table table-bordered">
                          <thead class="table-primary">
                            <tr>
                              <th scope="col" colspan="3" class="text-center">{{ getLocationForModal(`${julyDay.dayNumber}-${julyDay.month}`).date }}</th>
                            </tr>
                            <tr>
                              <th scope="col" colspan="3" class="text-center text-danger">{{ julyDay.dayNumber }}-{{ julyDay.month }}</th>
                            </tr>
                            <tr>
                              <th scope="col" style="width: 200px;">Nome</th>
                              <th scope="col">Descrizione</th>
                            </tr>
                          </thead>      
                          <tbody>
                            <tr v-for="stage in getLocationForModal(`${julyDay.dayNumber}-${julyDay.month}`).stages" :key="stage.name">
                              <td>{{ stage.name }}</td>
                              <td>{{ stage.description }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>                          
              </div>
            </div>
          </div>   
        </div>
        <div class="carousel-item">
          <div class="row gy-2">
          <h3>Agosto</h3>
           <div v-for="augustDay in augustDays" class="col-2">
              <div class="card"
                :class="{ active: isActive(augustDay) }"
                @click="isActive(augustDay) && showModal(augustDay)"
              >
                <p>
                  {{ augustDay.dayNumber }}
                </p>
                <p>
                  {{ augustDay.dayName }}
                </p>
              </div>
              <div class="text-start">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" @click="goToLocationAndActiveCard(augustDay)">
                  Aggiungi tappa
                </button>                
                <!-- Modal -->
                <div class="modal fade" :id="`modal-${augustDay.dayNumber}-${augustDay.month}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {{ augustDay.dayNumber }}/{{ augustDay.month }}/{{ augustDay.year }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <!-- Table content -->
                        <table class="table table-bordered">
                          <thead class="table-primary">
                            <tr>
                              <th scope="col" colspan="3" class="text-center">{{ getLocationForModal(`${augustDay.dayNumber}-${augustDay.month}`).date }}</th>
                            </tr>
                            <tr>
                              <th scope="col" colspan="3" class="text-center text-danger">{{ augustDay.dayNumber }}-{{ augustDay.month }}</th>
                            </tr>
                            <tr>
                              <th scope="col" style="width: 200px;">Nome</th>
                              <th scope="col">Descrizione</th>
                            </tr>
                          </thead>      
                          <tbody>
                            <tr v-for="stage in getLocationForModal(`${augustDay.dayNumber}-${augustDay.month}`).stages" :key="stage.name">
                              <td>{{ stage.name }}</td>
                              <td>{{ stage.description }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
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