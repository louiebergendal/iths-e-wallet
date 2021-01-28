import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
 
new Vue({
 router,
 
 data: function() {
  return {
  
    cardData: [{
    
      id: this.inputText,
      title: this.inputText,
    }]
  }
 }, 
 render: h => h(App)
}).$mount('#app')



