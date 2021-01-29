import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
 
new Vue({
 router,
 
 data: function() {
  return {

    cardStackArray: []
  }
 }, 
 render: h => h(App)
}).$mount('#app')



