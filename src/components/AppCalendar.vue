<script>
import { getLocations, setLocations } from '../db/storage.js';

  export default {
    data() {
      return {
        activeDates: [],  // Per memorizzare le date attive
        editingStage: null, // Stato per memorizzare la tappa in fase di modifica
        editingDay: null, // Stato per memorizzare il giorno della tappa in modifica
        stageName: '',
        stageDescription: ''
      }
    },

    props: {
      months: Array,
    },
   
    methods: {
      // Funzione card attiva
      isActive(calendarDay) {
        const dateStr = `${calendarDay.dayNumber}/${calendarDay.month}/${calendarDay.year}`;
        // console.log(dateStr, this.activeDates.includes(dateStr));  // Controllo se le date vengono confrontate correttamente
        return this.activeDates.includes(dateStr);
      },

      // Funzione "vai al form nuova location" e quindi card sarà attiva
      goToLocationAndActiveCard(calendarDay) {
        const slug = `${calendarDay.dayNumber}-${calendarDay.month}`;
        this.$router.push(`/new-location/${slug}`);
      },

      // Modale
      showModal(day) {
        const slug = `${day.dayNumber}-${day.month}`;
        const modal = new bootstrap.Modal(document.getElementById(`modal-${slug}`));
        modal.show();
      },

      // Modale
      getLocationForModal(slug) {
        const locations = getLocations();
        return locations.find(location => location.id === slug) || {};
      },

      // Modale: Funzione per aprire la modale di modifica
      showEditModal(stage, day) {
        this.editingStage = stage;
        this.editingDay = day;
        this.stageName = stage.name;
        this.stageDescription = stage.description;
        const editModal = new bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
      },

      // Modale: Funzione per salvare le modifiche in modale
      saveModalStageChanges() {
        const locations = getLocations();
        const location = locations.find(location => location.id === `${this.editingDay.dayNumber}-${this.editingDay.month}`);

        if (location) {
          const stageIndex = location.stages.findIndex(stage => stage.name === this.editingStage.name);
          if (stageIndex !== -1) {
            location.stages[stageIndex].name = this.stageName;
            location.stages[stageIndex].description = this.stageDescription;
          }

          setLocations(locations);
          this.refreshCalendar();
        }

        // this.closeEditModal(); // Chiude il modale dopo il salvataggio
      },

      // Funzione per cancellare la tappa
      deleteStage(stageName, day) {
        const locations = getLocations();
        const location = locations.find(location => location.id === `${day.dayNumber}-${day.month}`);

        if (location) {
          location.stages = location.stages.filter(stage => stage.name !== stageName);
          setLocations(locations);
          this.refreshCalendar();
        }

        // this.closeEditModal(); // Chiude il modale dopo la cancellazione
      },      

      // Funzione per ricaricare il calendario dopo edit o delete tappa
      refreshCalendar() {
        const locations = getLocations();
        this.activeDates = locations.map(location => location.date);
      },


    },
    mounted() {
      // Ottengo le date delle tappe aggiunte da localStorage
      const locations = getLocations();

      // Estraggo le date attive dall'array di locations e le assegno a activeDates
      this.activeDates = locations.map(location => location.date);
      // console.log(this.activeDates);  // Controllo se activeDates è popolato correttamente
    },
  }
  
</script>
<template>
  <div class="container text-center">

    <h3 class="fw-bold mt-5">CALENDARIO</h3>

    <div id="carouselCalendar" class="carousel carousel-dark slide">
      <div class="carousel-inner">
        <div
          v-for="(month, index) in months"
          :key="month.name"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="row gy-4">
            <h3 class="text-danger">{{ month.name }}</h3>
            <div v-for="day in month.days" class="col-3 col-sm-2">
              <div 
                class="card"
                :class="{ active: isActive(day) }"
                @click="isActive(day) && showModal(day)"
              >
                <p>{{ day.dayNumber }}</p>
                <p>{{ day.dayName }}</p>
              </div>
              <div class="text-center mt-1">
                <button type="button" class="btn btn-success rounded-circle" @click="goToLocationAndActiveCard(day)">
                  <i class="fa-solid fa-plus"></i>
                </button>
                <!-- Modal -->
                <div class="modal fade" :id="`modal-${day.dayNumber}-${day.month}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          {{ day.dayNumber }}/{{ day.month }}/{{ day.year }}
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <!-- Table content -->
                        <table class="table table-bordered">
                          <thead class="table-primary">
                            <tr>
                              <th scope="col" colspan="5" class="text-center text-light">{{ getLocationForModal(`${day.dayNumber}-${day.month}`).date }}</th>
                            </tr>
                            <tr>
                              <!-- <th scope="col" colspan="5" class="text-center text-danger">{{ juneDay.dayNumber }}-{{ juneDay.month }}</th> -->
                            </tr>
                            <tr>
                              <th scope="col" style="width: 200px;" class="text-light">Nome</th>
                              <th scope="col" class="text-light">Descrizione</th>
                              <th scope="col" class="text-light">Modifica</th>
                              <th scope="col" class="text-light">Cancella</th>
                            </tr>
                          </thead>      
                          <tbody>
                            <tr v-for="stage in getLocationForModal(`${day.dayNumber}-${day.month}`).stages" :key="stage.name">
                              <td>{{ stage.name }}</td>
                              <td>{{ stage.description }}</td>
                              <td>
                                <button class="btn btn-warning" @click="showEditModal(stage, day)">
                                  <i class="fa-solid fa-pen"></i>
                                </button>
                              </td>
                              <td class="text-center">
                                <button class="btn btn-danger" @click="deleteStage(stage.name, day)">
                                 <i class="fa-solid fa-trash-can"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="w-auto btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
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

    <!-- Modal di modifica -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModalLabel">Modifica Tappa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="stageName" class="form-label">Nome</label>
              <input type="text" class="form-control" id="stageName" v-model="stageName">
            </div>
            <div class="mb-3">
              <label for="stageDescription" class="form-label">Descrizione</label>
              <input type="text" class="form-control" id="stageDescription" v-model="stageDescription">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            <button type="button" class="btn btn-primary" @click="saveModalStageChanges">Salva modifiche</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="scss" scoped>
  #carouselCalendar {
    display: flex;
    justify-content: center;
  }

  .carousel-inner {
    max-width: 1000px;
  }

  .carousel-item {
    padding: 0 1rem;
  }

  .col-sm-2 {

    .card {
      // width: 125px;
      aspect-ratio: 1;
      // height: 125px;
      background-color: rgb(238, 200, 129);
      justify-content: center;
      opacity: 0.6;
      
      p:first-of-type {
        color: rgb(233, 5, 5);
        font-weight: bold;
      }
      
      p:last-of-type {
        font-weight: bold;
      }


      &.active {
        opacity: 1;
      }
    }
    
    button {
      width: 38px; 
      padding-left: 11px;
    }
  }
  
  .carousel-control-prev, .carousel-control-next {
    width: 32px;
  }

  .carousel-control-prev-icon, .carousel-control-next-icon {
    position: absolute;
    top: 0;
    background-color: red;
  }


  @media screen and (max-width: 480px) { 
    button {
      transform: scale(0.7);
    }
    
    .carousel-control-prev-icon, .carousel-control-next-icon {
      top: -16rem;
    }

  }


</style>