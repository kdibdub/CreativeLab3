import Vue from 'vue'
import App from './App.vue'
import router from './router'
import item from './data.js'
import moreData from './comments.js'

Vue.config.productionTip = false

let data = {
  items: item,
  commentsList: moreData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
