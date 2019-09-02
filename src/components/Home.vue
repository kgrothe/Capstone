<template>
  <div class="home">

  <p>
    <router-link v-bind:to="{ name:'options' }">Start here</router-link>        
  </p>   
  <p>
     <router-link v-bind:to="{ name: 'about' }">About</router-link>     
  </p>   
  </div>

</template>

<!--
<script>

</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: 1.4rem;
}
h1 {
  font-weight: bold;
}

a {
  color: black;
}
</style>
