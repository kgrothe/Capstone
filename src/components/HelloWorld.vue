<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <p>What is {{ num1 }} times {{ num2 }}?<span v-if="product">{{ product }}</span></p>
<button v-on:click="calculateProduct">Calculate</button>
<ul>
<li v-for="(value, key) in profile">{{ key }}: {{ value }}<br></li>
</ul>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
   
  </div>
</template>


<script>

export default {
name: 'Home',
  props: {
  msg: String
},
 data() {
  return {
   profile: {
  username: 'kdiddly',
  firstname: 'Kay',
  lastname: 'Diddly'
      }
    }
  },
  methods: {
    calculateProduct: function(){
      this.product = this.num1 * this.num2;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
