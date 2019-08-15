<template>
  <div class="home">
    
   <p>
      <router-link v-bind:to="{ name:'options' }">Start here</router-link>        
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
