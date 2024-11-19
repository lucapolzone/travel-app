<script>

  export default {
    data() {
      return {
      }
    },

  }
  
</script>

<template>
  <header>
    <div class="p-3 mt-4 rounded-4 text-center">
      <h1 class="text-light">TRAVEL APP</h1>
    </div>
  </header>

  <router-view />

</template>

<style lang="scss" scoped>

  header {
    div {
      margin-right: auto;
      margin-left: auto;
      background-color: #8eee76;
      max-width: 1000px;
    }
    margin-bottom: 4rem;
  }

  @media screen and (max-width: 768px) { 
    header {
      div {
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
  }


</style>