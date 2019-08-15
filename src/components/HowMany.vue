<template>
  <div class="howmany">
     <p>
       <router-link v-bind:to="{ name:'numbertrivia' }"> {{ results.number }} </router-link>
       </p>
          
    
    <p>
    <router-link v-bind:to="{ name:'home' }">Home</router-link>    
  </p> 
    
     <form v-on:submit.prevent="findNumber">
      <p><button type="submit">How many people are in space today?</button></p>
    </form> 

<p> {{ results.message }}</p>

<p> {{ results.people }}</p>


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
      results: [],
    }

  },

//created: function () {
 methods:{
   findNumber:function(){

  
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let targetUrl = 'http://api.open-notify.org/astros.json'


  axios.get(proxyUrl + targetUrl)
    .then(response => {
      this.results = response.data;
      console.log(response.data)
    })
    .catch(error => {
      this.errors.push(error);
    });
}
 }

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
