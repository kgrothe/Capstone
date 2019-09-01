<template>
  <div class="home">

  <p>
    <router-link v-bind:to="{ name:'options' }">Start here</router-link>        
  </p>   
      <div class="nav">
        <li>
        <router-link v-bind:to="{ name: 'about' }">About</router-link>
        </li>
      </div>
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>
