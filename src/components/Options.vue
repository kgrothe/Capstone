<template>
  <div class="options">


      <p><router-link v-bind:to="{ name: 'howmany' }">How many people are in space today?</router-link>
      </p>
     
      <p><router-link v-bind:to="{ name: 'numbertrivia' }"> Number Trivia</router-link>
      </p>    

      <p><router-link v-bind:to="{ name: 'apod' }"> APOD </router-link>

       </p>

  
    
    
    <p>
    <router-link v-bind:to="{ name:'home' }">Home</router-link>    
  </p> 
    
  </div>

</template>
    


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.howmany {
  font-size: 1.4rem;
}

.special {
  color: blue;
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
  color: #42b983;
}


</style>
