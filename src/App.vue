<template>
  <div id="app">
    <img alt="Earth from space" src="./assets/earth.jpg">
    <h1>Space & Numbers</h1>  
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 2.5rem;
}
</style>
