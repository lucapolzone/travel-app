<script>
  export default {
    data() {
      return {
        // activeIndex: 0,

      }
    }
  }
  
</script>
<template>
  <h2 class="text-center">Aggiungi tappa</h2>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="dateLocation" class="form-label">Data tappa</label>
        <input type="text" placeholder="01/06/2024" class="form-control" id="dateLocation" aria-describedby="dateHelp">
      </div>
      <div class="mb-3">
        <label for="nameLocation" class="form-label">Tappa</label>
        <input type="text" class="form-control" id="nameLocation">
      </div>
      <div class="mb-3">
        <label for="descriptionLocation" class="form-label">Descrizione</label>
        <textarea class="form-control" id="descriptionLocation" rows="4"></textarea>
      </div>
      <button type="submit" class="btn btn-success">INVIA</button>
    </form>
  </div>
</template>
<style lang="scss" scoped>
</style>