<script>
  export default {
    data() {
      return {
        // activeIndex: 0,
      }
    },

    props: {
      januaryDays: Array,
    }
  }
  
</script>
<template>
  <div class="container text-center">

    <h2 class="mt-5 text-start">Calendario</h2>

    <div class="row gy-2">

      <div v-for="januaryDay in januaryDays" class="col">
        <div class="card">
          <p>
            {{ januaryDay.dayNumber }}
          </p>
          <p>
            {{ januaryDay.dayName }}
          </p>
        </div>
      </div>

    </div>          
  </div>

</template>
<style lang="scss" scoped>
</style>