<template>
  <div class="images">


      <p><router-link v-bind:to="{ name: 'options' }">Home</router-link>
      </p>   

      <h3> NASA Media</h3>
    
    <form v-on:submit.prevent="searchImages">
      
        <p>Search for <input type="text" v-model="term" class="search"></p>
        
      Enter media type <select v-model="type">
          <option disabled value="">Choose one:</option>
          <option>image</option>
          <option>video</option>
          <option>audio</option>
          </select>
          <h3>Show me: {{ term }} {{ type }}</h3>
          <button type="submit"> Search </button>
               
      
    </form> 

    <!--

  <ul v-if="results && results.length > 0" class="results">
    <li v-for="result in results" class="item">
      <p>{{ results }}</p>
    </li>
  </ul>

  <div v-else-if="results && results.length === 0" class="no-results">
    <h2>No results found for your search term.</h2>
    <p>Please try a different search.</p>
  </div>

  <ul v-if="errors.length > 0" class="errors">
    <li v-for="error in errors">
      {{ error.message }}
    </li>
  </ul>
  
 <!-- 

<p> {{ results.total_hits }}</p> -->


<ul>
  
  <li v-for="result in results.slice(0,6)">
    

    <img v-bind:src="result.links[0].href" />
    

    <!--
    <p>{{result.data[0].title.substring(0,80)}}</p>-->
</li>
<!--
<span><img v-bind:src="results.collection.items.links.href" /></span> -->
  </li>
  </ul>
<!-- test image -->
<!--
<ul v-for="n in 10">
    <!--
<li v-for="item in results">-->
  
  
  
  <!--
  <div v-for="result in results>"
  
<span><img v-bind:src="results.links[n].href" /></span> 
</div>
<!--
</li>-->
<!--
</ul>-->
<!--
 <h3> {{ results.collection }} </h3>-->
 

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
     
    console.log(response.data)
    console.log(collection)
    console.log(errors.length)
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
