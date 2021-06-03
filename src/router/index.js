import Vue from 'vue'
import VueRouter from 'vue-router'
import KindTopPage from '@/views/KindTopPage'
import DangerTopPage from '@/views/DangerTopPage'
import AlarmCountPage from '@/views/AlarmCountPage'
import SurveyPage from '@/views/SurveyPage'
import ScreenPage from '@/views/ScreenPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ScreenPage
  },
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
  },
  {
    path: '/survey',
    component: SurveyPage
  }

]

const router = new VueRouter({
  routes
})

export default router
