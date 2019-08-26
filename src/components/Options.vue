<template>
  <div class="options-column">

      <p><router-link v-bind:to="{ name: 'howmany' }">Number of People in Space</router-link>
      </p>
     
      <p><router-link v-bind:to="{ name: 'numbertrivia' }"> Number Trivia</router-link>
      </p>    

      <p><router-link v-bind:to="{ name: 'apod' }"> Astronomy Picture of the Day </router-link>
      </p>

      <p><router-link v-bind:to="{ name: 'images' }"> Space Images </router-link>
      </p>
     
  </div>

</template>
    


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.options-column {
  font-size: 1.4rem; 
  padding: 50px;
  text-align: center;

}

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
  color: black;  
  text-decoration-line: none;
}




</style>
