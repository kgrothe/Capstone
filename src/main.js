import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSpaceShuttle, faRocket, faUserAstronaut, faQuestionCircle, faSatellite
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpaceShuttle, faUserAstronaut, faRocket, faQuestionCircle, faSatellite);

Vue.use(VueAnalytics, {
  id: 'UA-146772263-1',
  router
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
