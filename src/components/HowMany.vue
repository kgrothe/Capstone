<template>
  <div class="howmany">
     <p>
       <router-link v-bind:to="{ name:'numbertrivia' }"> {{ results.number }} </router-link>
       </p>
      <h3> People are in space today</h3>
  <p>
    Click on number to display a fact about that number
    </p>
    <p>
    <router-link v-bind:to="{ name:'home' }">Home</router-link>    
  </p> 
    
     <form v-on:submit.prevent="findNumber">
      <p><button type="submit">Show me how many people are in space today</button></p>
    </form> 


<p> {{ results.message }}</p>
<p> {{ results.people}}</p>
  




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
              message: "",
              number: [],
              
              }
            ],
        }
},
methods :{
    findNumber: function () {
    axios.get('http://api.open-notify.org/astros.json?number')
    .then(response => {
        this.results = response.data;
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
