import Vue from 'vue'
import App from '@/App.vue'
import router from './router'

Vue.config.productionTip = false

//mount할 시점에 h=>h(App)을 실행해서 app 컴포넌트에 Vue를 넣는다
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')