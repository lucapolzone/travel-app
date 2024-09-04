<script>
import { getLocations } from '../db/storage.js';

export default {
  name: 'AppMap',

  // `data()` per gestire lo stato del componente
  data() {
    return {
      mapRef: null,
      apiKey: 'sqFPSvLFaQfP1BKlG3WDTf6up7gaUOZA',
    };
  },

  // `created()` viene eseguito quando il componente viene creato
  created() {
    // Puoi gestire l'inizializzazione di variabili o dati qui se necessario
  },

  // `mounted()` viene eseguito quando il componente è montato nel DOM
  mounted() {
    this.initMap();
  },

  // `methods` per definire le funzioni del componente
  methods: {
    // Inizializza la mappa quando il componente è montato
    initMap() {
      const tt = window.tt;

      const map = tt.map({
        key: this.apiKey,
        container: this.$refs.mapRef, // Usa $refs per riferimenti a elementi del DOM
        style: 'tomtom://vector/1/basic-main',
        center: [12.4964, 41.9028], // Centro su Roma
        zoom: 6,
      });
      
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());

      // Aggiungi i marker
      const locations = this.getLocationsFromStorage(); // Ottieni le località
      locations.forEach(async (locationGroup) => {
        const { lat, lon } = await this.getCoordinates(locationGroup.name);
        new tt.Marker().setLngLat([lon, lat]).addTo(map);
      });
    },

    // Funzione asincrona per ottenere le coordinate di una località utilizzando l'API TomTom
    async getCoordinates(locationName) {
      const response = await fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(locationName)}.json?key=${this.apiKey}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lon } = data.results[0].position;
        return { lat, lon };
      } else {
        throw new Error('Località non trovata');
      }
    },

    // Funzione che recupera le località dal localStorage e le prepara per l'uso con i marker.
    getLocationsFromStorage() {
      const locations = getLocations(); // Ottieni le località dal localStorage

      // Trasforma le località nel formato necessario per i marker
      const stages = locations.flatMap(locationGroup => locationGroup.stages.map(stage => ({ name: stage.name })));
      return stages;
    }
  },
};
</script>

<template>
  <div class="container pt-4 my-5">
    <h3 class="fw-bold my-3 text-center">MAPPA</h3>
    <div ref="mapRef"></div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1160px;

    .mapboxgl-map {
      height: 500px;
    }
  }
</style>
