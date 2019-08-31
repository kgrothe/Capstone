import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { faSatellite} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSpaceShuttle, faUserAstronaut, faRocket, faQuestionCircle, faSatellite)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
