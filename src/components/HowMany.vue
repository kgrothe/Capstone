<template>
  <div class="howmany">
     <p>
       <router-link v-bind:to="{ name:'numbertrivia' }"> {{ results.number }} </router-link>
       </p>
      <h3> Astronomy Picture of the Day</h3>
  
    
    
    <p>
    <router-link v-bind:to="{ name:'home' }">Home</router-link>    
  </p> 
    
     <form v-on:submit.prevent="findNumber">
      <p><button type="submit">Show me NASA's Astronomy Picture of the day</button></p>
    </form> 

<p> {{ results.message }}</p>

<!-- test image -->

<span><img v-bind:src="results.url" /></span> 
 <h3> {{ results.title }} </h3>
 <h4> copyright: {{ results.copyright }} </h4>
 <h5> {{ results.explanation }} </h5>

 <p>
   <router-link v-bind:to="{ name: 'numbertrivia' }">Show me some number trivia</router-link>
</p>
    </div>
    
</template>
    
<script>

import axios from 'axios';

export default {
    name: 'trigger',
    data () {
        return {
            
            errors: [],
            results: [
              {              
              url: null,             
              }
            ],
        }
},
methods :{
    findNumber: function () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=EMjuzVPgN7YuVVONc0GFmXcK518Zo9wRzQuC5ahb')
    .then(response => {
        this.results = response.data;
        this.results.url = document.data.url;
        console.log(response.data)
    })
    .catch(e => {
        this.errors.push(e)
    })
}
}
}

</script>

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
