import Vue from 'vue'
import VueRouter from 'vue-router'
import KindTopPage from '@/views/KindTopPage'
import DangerTopPage from '@/views/DangerTopPage'
import AlarmCountPage from '@/views/AlarmCountPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/kindtop',
    component: KindTopPage
  },
  {
    path: '/dangertop',
    component: DangerTopPage
  },
  {
    path: '/alarm',
    component: AlarmCountPage
  }

]

const router = new VueRouter({
  routes
})

export default router
