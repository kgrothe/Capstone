<template>
  <div id="app">    
               
    <img src="./assets/RoundEarth.png" alt="Earth from space"> 
 
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

img {
  size: 80%;
}

span.icon {
  font-size: 150%;
  color: #151B54;
}

</style>
