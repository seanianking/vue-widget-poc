import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GoogleChart from '../components/GoogleChart.vue'
import NormalTransactions from '../components/NormalTransactions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donut',
    name: 'GoogleChart',    
    component: GoogleChart
  },
  {
    path: '/transaction',
    name: 'NormalTransactions',    
    component: NormalTransactions
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
