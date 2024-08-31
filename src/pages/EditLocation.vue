<script>

import { getLocations, setLocations } from '../db/storage.js';

export default {
  //queste props arrivano da router.js, dalla rotta edit
  props: ['slug', 'stageIndex'],

  data() {
    return {
      date: '',
      name: '',
      description: ''
    };
  },
  methods: {
    // Funzione che imposta i campi del form in base ai params slug e stageIndex
    // ad es. http://localhost:5173/edit-location/01-06/0 o http://localhost:5173/edit-location/01-06/1
    setLocationDataFromSlug() {
      const locations = getLocations();
      // find() cerca all'interno dell'array locations un oggetto che abbia id uguale a this.slug, tipo 01-06
      const locationGroup = locations.find(loc => loc.id === this.slug);
      if (locationGroup && locationGroup.stages[this.stageIndex]) {
        this.date = locationGroup.date;
        const stage = locationGroup.stages[this.stageIndex];
        this.name = stage.name;
        this.description = stage.description;
      }
    },

    // Funzione che aggiorna i dati nel localStorage della tappa modificata 
    updateLocationData() {
      const locations = getLocations();
      const locationGroup = locations.find(loc => loc.id === this.slug);
      if (locationGroup && locationGroup.stages[this.stageIndex]) {
        const stage = locationGroup.stages[this.stageIndex];
        stage.name = this.name;
        stage.description = this.description;
        setLocations(locations);
      }
    },

    // Funzione che invia dati del form
    sendLocationData() {
      this.updateLocationData();
      // Reindirizza alla pagina principale
      this.$router.push('/');
    },
  },

  created() {
    this.setLocationDataFromSlug();
  }
};
</script>

<template>
  <div class="container">
    <router-link to="/">
      <button class="btn btn-warning">
        <i class="fa-solid fa-arrow-left"></i> Indietro
      </button>
    </router-link>

    <h2 class="text-center">Modifica tappa</h2>

    <form @submit.prevent="sendLocationData">
      <div class="mb-3">
        <label for="dateLocation" class="form-label">Data tappa</label>
        <input v-model="date" readonly="readonly" type="text" class="readonly form-control" id="dateLocation">
      </div>
      <div class="mb-3">
        <label for="nameLocation" class="form-label">Tappa</label>
        <input v-model="name" type="text" class="form-control" id="nameLocation">
      </div>
      <div class="mb-3">
        <label for="descriptionLocation" class="form-label">Descrizione</label>
        <textarea v-model="description" class="form-control" id="descriptionLocation" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Salva</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.readonly {
  color: #bdbdbd;
}
</style>
