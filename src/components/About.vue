<template>
  <div class="about">
      
    <div>
      <p>This web app was created as a Capstone project for the Web Development 
         certificate program at Seattle University using Vue JS framework and 3 APIs:        
      </p>
      <ul>
        <li><a href="http://open-notify.org/" target="_blank">Open Notify </a></li>
        <li><a href="http://numbersapi.com/#42" target="_blank">Numbers API </a></li>
        <li><a href="https://api.nasa.gov/" target="_blank">NASA APIs </a></li>
      </ul>

      <div class="options">      
        <router-link v-bind:to="{ name:'options' }">Click here to Explore</router-link>
      </div>    
            
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.about {
  font-size: 1.2em;
}
ul {
  list-style-type: none;
}
div.about {  
  height: 15em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 40px 40px 40px;
}
div.options {  
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;  
}

</style>
