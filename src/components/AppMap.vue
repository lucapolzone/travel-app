<script>
import { onMounted, ref } from 'vue';
import { getLocations } from '../db/storage.js'; 

export default {
  name: 'AppMap',
  setup() {
    const mapRef = ref(null);
    const apiKey = 'sqFPSvLFaQfP1BKlG3WDTf6up7gaUOZA';

    onMounted(async () => {
      const tt = window.tt;

      // Inizializza la mappa
      const map = tt.map({
        key: apiKey,
        container: mapRef.value,
        style: 'tomtom://vector/1/basic-main',
        center: [12.4964, 41.9028], // Centro su Roma
        zoom: 6,        
      });
      map.addControl(new tt.FullscreenControl());
      map.addControl(new tt.NavigationControl());

      // Aggiungi i marker
      const locations = getLocationsFromStorage(); // Assumi che tu abbia una funzione per ottenere le località
      for (const locationGroup of locations) {
        // console.log(locationGroup);
          const { lat, lon } = await getCoordinates(locationGroup.name);
          new tt.Marker().setLngLat([lon, lat]).addTo(map);
      }
    });

    async function getCoordinates(locationName) {
      const response = await fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(locationName)}.json?key=${apiKey}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lon } = data.results[0].position;
        return { lat, lon };
      } else {
        throw new Error('Località non trovata');
      }
    }

    function getLocationsFromStorage() {
      const locations = getLocations(); // Ottieni le località dal localStorage

      // Trasforma le località nel formato necessario per i marker
      const stages = locations.flatMap(locationGroup => locationGroup.stages.map(stage => ({ name: stage.name })));

      return stages;
    }

    return {
      mapRef,
    };
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
