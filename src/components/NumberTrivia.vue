<template>
  <div class="numbertrivia">
   
    <p><router-link v-bind:to="{ name:'options' }">More options</router-link>
    </p>

    <h3>Number Trivia</h3>
    
    <span class="trivia">
      <p> {{ this.number }} </p>
      <p> {{ results }} </p>
    </span>
   
    <form v-on:submit.prevent="getTrivia">
      <p>Enter a number: <input type="number" v-model="number"> to display number fact.<br><br>
      <button type="submit">Show me the trivia </button></p>
    </form>
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'numbertrivia',
  data () {
    return {
      errors: [],
      results: "",
      number: "?"
    }

  },

//created: function () {
 methods:{
   getTrivia:function(){

  
 let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
 let targetUrl = 'http://numbersapi.com/' 

//let targetUrl = 'http://numbersapi.com/',{
 // params: {
  //  number:this.number,
  //},
   //}

axios.get(proxyUrl + targetUrl + this.number)
  //axios.get(proxyUrl + targetUrl, {

    //axios.get(proxyUrl + targetUrl)
   // params: {
     // query:this.number,
    // random:this.number,
 //   }
 // })
  
    .then(response => {
      this.results = response.data;
      console.log(response.data)
      console.log(this.number)
          })
    .catch(error => {
      this.errors.push(error);
    });
//}
 //}

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
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.numbertrivia {
    font-size: 1.4rem
}

.trivia p {
  padding-right: 20%;
  padding-left: 20%;
  color: navy;
  font-weight: bolder;
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

router-link-active {
  background-color: green;

}

</style>
