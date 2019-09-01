<template>

<div class="options">  
       
      <button @click="$router.push('howmany')"><font-awesome-icon icon="user-astronaut" />
      </button>
      <router-link v-bind:to="{ name: 'howmany' }">Number of People in Space      
      </router-link>     
      <br>
      
      <button @click="$router.push('numbertrivia')"><font-awesome-icon icon="question-circle" />
      </button>
      <router-link v-bind:to="{ name: 'numbertrivia' }">Number Trivia
      </router-link>      
      <br>

      <button @click="$router.push('apod')"><font-awesome-icon icon="satellite" />
      </button>
      <router-link v-bind:to="{ name: 'apod' }">Astronomy Picture of the Day    
      </router-link>
      <br>

      <button @click="$router.push('images')"><font-awesome-icon icon="rocket" />
      </button>
      <router-link v-bind:to="{ name: 'images' }"> Space Images       
      </router-link>
      
      <div class="nav">        
        <router-link v-bind:to="{ name: 'about' }">About</router-link> 
      </div>
               
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.options {
  font-size: 1.5rem; 
  color: #151B54;
  align-content: center;
  text-align: left;
  margin: 0% 35% 35%;
  width: 35%;
}

button {   
 /* border-width: .1em;
  border-color: darkslategray;  
  background-color: aliceblue;*/
  border: none;
  padding: .5em;
  color: #151B54;
  font-size: 1em;
  cursor: pointer;
  margin-right: .5em;
  background-color: white;
}

button:hover {
  color: darkred;
  background-color: lightblue;
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

li {
  display: inline-block;
  margin: 0 10px;
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
