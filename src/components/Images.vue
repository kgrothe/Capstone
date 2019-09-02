<template>
  <div class="images">

    <span class="icon">
    <font-awesome-icon icon="rocket"></font-awesome-icon>
    </span>
    
    <p><router-link v-bind:to="{ name: 'options' }">More options</router-link>
    </p>   

    <h3> NASA Media</h3>
    
    <form v-on:submit.prevent="searchImages">
      
      <p>Search for <input type="text" aria-label="search term" v-model="term" class="search"></p>       
      Enter media type <select v-model="type">
          <option disabled value="" aria-label="media option">Choose one:</option>
          <option>image</option>
          <option>video</option>          
          </select>
          <h3>Search for: {{ term }} {{ type }}</h3>
          <button type="submit" aria-label="submit"> Search </button>             
      
    </form> 
   
  <ul v-if="results && results.length > 0" class="results">

    <!--limit display to 6 images -->
    <li class="grid" v-for="result in results.slice(0,6)">
      <img v-bind:src="result.links[0].href" />      
    </li>
  </ul> 

  <!-- error message -->

  <div v-else-if="results && results.length === 0" class="no-results">
    <h4>No results found for your search term.</h4>
    <p>Please try a different search.</p>
  </div>

  </div>
    
</template>
    
<script>

import axios from 'axios';

export default {
    name: 'Images',
    data () {
        return {
            
            errors: [],
            results: "",                                           
                     
            term: "",
            type: ""
        }
},
methods :{
    searchImages: function () {

  axios.get('https://images-api.nasa.gov/search',{
      params: {
          q:this.term,
          media_type:this.type,               
          
      }
  })
   .then(response => {
    this.results = response.data.collection.items; 
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

.images {
  font-size: 1.4rem; 
}

.p search {
  text-transform: uppercase;
}

img {
  width: 400px;
}

.grid {
  border-color: lightslategray;
}
 
.grid.img {
  width: 20%;
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
