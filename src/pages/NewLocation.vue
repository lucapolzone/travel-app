<script>

//importo funzione addLocation
import { addLocation } from '../db/storage.js';

export default {
  props: ['slug'],

  data() {
    return {
      date: '',
      name: '',
      description: ''
    };
  },
  methods: {
    // Funzione per impostare la data dal parametro slug
    setDateFromSlug() {
      if (this.slug) {
        const [day, month] = this.slug.split('-');
        const year = new Date().getFullYear(); // Cioè l'anno corrente
        //Crea una data tipo 01/06/2024
        this.date = `${day}/${month}/${year}`;
      }
    },

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
      this.setDateFromSlug();
      this.name = '';
      this.description = '';
    }

  },

  created() {
    // Quando il componente è creato, imposta la data basata sul parametro slug
    this.setDateFromSlug();
  },

  mounted() {
    // console.log(this.$router);
  }
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
        <input v-model="date" readonly="readonly" type="text" class="readonly form-control" id="dateLocation" aria-describedby="dateHelp">
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
 .readonly {
  color: #bdbdbd;
 }
</style>


