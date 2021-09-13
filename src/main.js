import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import NormalTransactions from './components/NormalTransactions.vue'
import HelloWorld from './components/HelloWorld.vue'
import vuetify from './plugins/vuetify'
import GoogleChart from './components/GoogleChart.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/transactions', component: NormalTransactions},
  {path: '/', component: HelloWorld},
  {path: '/donut', component:GoogleChart},
];

const router = new VueRouter({
  routes,
  mode: 'history',

})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
