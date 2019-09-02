<template>

<div class="options">  
      
      <router-link v-bind:to="{ name: 'howmany' }">Number of People in Space</router-link>     
      <br>
      
      <router-link v-bind:to="{ name: 'numbertrivia' }">Number Trivia</router-link>      
      <br>

      <router-link v-bind:to="{ name: 'apod' }">Astronomy Picture of the Day</router-link>
      <br>

      <router-link v-bind:to="{ name: 'images' }"> Space Images</router-link>
      
      <div class="nav">        
        <router-link v-bind:to="{ name: 'about' }">About</router-link> 
      </div>
               
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.options {
  font-size: 1.4em; 
  color: #151B54;
  align-content: center;  
}

div.nav {
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}

a.nav {
  color: black;
  font-size: 9em;  
}

img {
  width: 400px;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: black;
}

a:hover {
  color: darkred;
  background-color: lightblue;
  font-weight: bolder;
}

</style>
