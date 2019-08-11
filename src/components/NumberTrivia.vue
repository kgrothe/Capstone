<template>
  <div class="numbertrivia">
    <h3>Number Trivia</h3>

      <p>
        <router-link v-bind:to="{ name:'numbertrivia' }"> X </router-link>
      </p>
      <p> {{ results }}</p>
      <p>Enter new number for a new fact</p>
      <p>
      <router-link v-bind:to="{ name:'home' }">Home</router-link>
      </p>

      <form v-on:submit.prevent="getTrivia">
      <p><button type="submit">Show me the trivia</button></p>
      </form>
 
   
  </div>
</template>

<script>



import axios from 'axios';


export default {
  name: 'trigger',
  data () {
    return {
      errors: [],
      results: ""
    }

  },

//created: function () {
 methods:{
   getTrivia:function(){

  
  let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  let targetUrl = 'http://numbersapi.com/random'

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

.numbertrivia {
    font-size: 1.4rem
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

router-link-active {
  background-color: green;

}


</style>
