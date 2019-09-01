<template>
  <div class="howmany">
    <p>
      <router-link v-bind:to="{ name:'numbertrivia' }"> {{ results.number }} </router-link>
    </p>        
    <p>
      <router-link v-bind:to="{ name:'options' }">More options</router-link>    
    </p> 
    
   <form v-on:submit.prevent="findNumber">
     <p>There are {{ results.length }} people are in space today.</p>
    <p><button type="submit">{{ results.length }}</button></p>
   </form> 

<!-- error check-->
  <ul v-if="results && results.length > 0" class="results">
    <p class="names">
    Who They Are: 
    </p>
    <li v-for="(result, index) in results">
    {{ results[index].name }} 
    </li>
  </ul>

    <div v-else-if="results && results.length === 0" class="no-results">
      <h4>Something went wrong, please try again later.</h4>
    </div>

  </div>
    
</template>
    
<script>
import axios from 'axios';

export default {
  name: 'howmany',
  data () {
    return {
      errors: [],
      results: "",
      people: [
        {
        name: ""
        }
      ]    
    }
  },

//created: function () {
 methods:{
  findNumber:function(){
  
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let targetUrl = 'http://api.open-notify.org/astros.json'

  axios.get(proxyUrl + targetUrl)
    .then(response => {
      this.results = response.data.people;
    })
    .catch(error => {
      this.errors.push(error);
    });
}
 }
//link number of people results to number trivia
// methods: {
  // getTrivia: function() {
  // axios.get('http://numbersapi.com/random/trivia')
  //.then(response => {
  //  this.results = response.data;
  //  console.log(response.data)
  // })
  //  .catch(e => {
  //    this.errors.push(e)
  //  })
 // }
 // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.howmany {
  font-size: 1.4rem;
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
 display: block;
  margin: 0 10px;
}

.names {
  font-weight: bold;
}

a {
  color: black;
}

</style>
