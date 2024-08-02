<script>

//importo funzione addLocation
import { addLocation } from '../db/storage.js';

export default {
  data() {
    return {
      date: '',
      name: '',
      description: ''
    };
  },
  methods: {
    pushLocationData() {
      
      // Crea un oggetto location
      const newLocation = {
        date: this.date,
        name: this.name,
        description: this.description
      };

      // Aggiungi la nuova location al localStorage
      addLocation(newLocation);

    },

    sendLocationData() {

      this.pushLocationData();
      
      // Reindirizza alla pagina principale
      this.$router.push('/');
    },

    saveAndNewLocation(event) {
      event.preventDefault(); // Previene il refresh predefinito del form

      this.pushLocationData();

      // Resetta i campi del form
      this.date = '';
      this.name = '';
      this.description = '';
    }

  },

  /*
  mounted() {
    console.log(this.$router);
  }
  */
}
</script>


<template>
  <div class="container">
    <router-link to="/">
      <button class="btn btn-warning">
        <i class="fa-solid fa-arrow-left"></i> Indietro
      </button>
    </router-link>

    <h2 class="text-center">Aggiungi tappa</h2>
    
    <form @submit="sendLocationData">
      <div class="mb-3">
        <label for="dateLocation" class="form-label">Data tappa</label>
        <input v-model="date" type="text" class="form-control" id="dateLocation" aria-describedby="dateHelp">
      </div>
      <div class="mb-3">
        <label for="nameLocation" class="form-label">Tappa</label>
        <input v-model="name" type="text" class="form-control" id="nameLocation">
      </div>
      <div class="mb-3">
        <label for="descriptionLocation" class="form-label">Descrizione</label>
        <textarea v-model="description" class="form-control" id="descriptionLocation" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-success me-5">Salva</button>
      <button @click="saveAndNewLocation" class="btn btn-primary me-4">
        <i class="fa-solid fa-plus"></i>
        Salva e nuovo 
      </button>
      <button type="reset" class="btn btn-warning">Reset</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
</style>


