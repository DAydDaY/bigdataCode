import Vue from 'vue'
import VueRouter from 'vue-router'
import driverTopPage from '@/views/driverTopPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/drivertoppage',
    component: driverTopPage
  }
]

const router = new VueRouter({
  routes
})

export default router
