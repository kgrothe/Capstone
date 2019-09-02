<template>
  <div class="apod">
    <span class="icon">
    <font-awesome-icon icon="satellite" class="icon"></font-awesome-icon>
    </span>
    <p>
    <router-link v-bind:to="{ name:'options' }">More options</router-link>    
    </p> 

    <h3> Astronomy Picture of the Day</h3>
  
    <form v-on:submit.prevent="getImage">
      <p><button type="submit">VIEW</button></p>
    </form> 
 
  <div class="reults"><img v-bind:src="results.url" /></div> 
  <h3> {{ results.title }} </h3>
  <h4> {{ results.copyright }} </h4>
  <h5> {{ results.explanation }} </h5>

</div>
    
</template>
    
<script>

import axios from 'axios';

export default {
  name: 'apod',
  
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
  getImage: function () {

  axios.get('https://api.nasa.gov/planetary/apod?api_key=EMjuzVPgN7YuVVONc0GFmXcK518Zo9wRzQuC5ahb')
   .then(response => {
    this.results = response.data;
    this.results.url = data.url;
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

.apod {
  font-size: 1.4rem;
}

img {
  width: 400px;
}

h3 {
  margin: 40px 0 0;
}

a {
  color: black;
}

</style>
