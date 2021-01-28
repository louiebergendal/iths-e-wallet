import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
 
new Vue({
 router,
 
 data: function() {
  return {

    cardStackArray: [{
      id: "432984728397",
      holder: "BOB 1",
      vendor: "bitcoin",
      number: "XXXXYYYYZZZZFFFF",
      ccv: 111
    },
    {
      id: "ANNAN",
      holder: "BOB 2",
      vendor: "bitcoin",
      number: "XXXXYYYYZZZZFFFF",
      ccv: 222
    },
    {
      id: "ANNAN 2",
      holder: "BOB 3",
      vendor: "bitcoin",
      number: "XXXXYYYYZZZZFFFF",
      ccv: 333
    }]
  }
 }, 
 render: h => h(App)
}).$mount('#app')



