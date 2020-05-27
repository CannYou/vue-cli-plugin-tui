import Vue from 'vue'
import App from './App.vue'
import TUI from '../packages'

Vue.config.productionTip = false
Vue.use(TUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
