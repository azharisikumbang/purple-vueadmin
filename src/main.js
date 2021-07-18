import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
	faHome,
	faMapMarker,
	faPlusCircle,
	faShareAlt,
	faBell
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/assets/css/tailwind.css'

library.add(
	faHome,
	faMapMarker,
	faPlusCircle,
	faShareAlt,
	faBell
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
