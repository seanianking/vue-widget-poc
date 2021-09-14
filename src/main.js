import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import NormalTransactions from './components/NormalTransactions.vue'
import HelloWorld from './components/HelloWorld.vue'
import vuetify from './plugins/vuetify'
import GoogleChart from './components/GoogleChart.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {path: '/', component: HelloWorld},
  {path: '/transactions', component: NormalTransactions},
  {path: '/donut', component:GoogleChart},
  {path: '/:catchAll(.*)', component: NotFoundComponent,}
];

const router = new VueRouter({
  mode: 'history',
  routes,

})

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
