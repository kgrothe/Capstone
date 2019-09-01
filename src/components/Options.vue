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

      <button @click="$router.push('images')"><font-awesome-icon icon="space-shuttle" />
      </button>
      <router-link v-bind:to="{ name: 'images' }"> Space Images       
      </router-link>
      
      
     
    
  </div>

</template>
    
    


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.options {
  font-size: 1.5rem; 
  align-content: center;
  text-align: left;
  margin: 0% 30% 30%;
  width: 35%;
}

button {   
 /* border-width: .1em;
  border-color: darkslategray;  
  background-color: aliceblue;*/
  border: none;
  padding: .5em;
  color: navy;  
  font-size: 1em;
  cursor: pointer;
  margin-right: .5em;
  background-color: white;
}

button:hover {
  color: darkred;

}

/*.svg-inline--fa {
  padding: .25em;
}

*/
/*button {
  width: 35%;
  padding: .75em;
  border-width:.1em;
  border-radius: 25px;
  border-color: black;  
  font-size: .9em;
}
*/
.special {
  color: black;
  font-size: .80;
}

img {
  width: 400px;
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
    color: navy;  
    text-decoration: none;
    font-weight: bold;    
  }

a:hover {
  color: darkred;
  font-weight: bolder;
}

</style>
