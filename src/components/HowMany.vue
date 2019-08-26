<template>
  <div class="howmany">
    <p>
      <router-link v-bind:to="{ name:'numbertrivia' }"> {{ results.number }} </router-link>
    </p>        
    <p>
      <router-link v-bind:to="{ name:'options' }">Home</router-link>    
    </p> 
    
   <form v-on:submit.prevent="findNumber">
     <p>How many people are in space today</p>
    <p><button type="submit">?</button></p>
   </form> 

      
  <h4>{{ results.people }}</h4>
  


</div>
    
</template>
    
<script>
import axios from 'axios';


export default {
  name: 'howmany',
  data () {
    return {
      errors: [],
      results: [
        { 
          people:

          { 
            name: ""
          }
        }
      ],
      
      
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
      console.log(response.data.people)
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
}


</style>
