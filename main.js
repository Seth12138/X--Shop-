import App from './App'
import { myRequest } from './util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth()
	const day = nDate.getDay()
	return year+'-'+month+'-'+day
})

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif