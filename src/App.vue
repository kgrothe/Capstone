<template>
  <div id="app">
            
    <img alt="Earth from space" src="./assets/RoundEarth.png"> 
 
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

@import url('https://fonts.googleapis.com/css?family=Exo&display=swap');

#app {
  font-family: 'Exo', sans-serif;
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}

/*body {
  background-image: url('./assets/PerseusPisces.jpg');  
  background-repeat: no-repeat;
  background-size: cover;
}
*/
h1 {
  font-size: 2.5rem;
}

</style>
