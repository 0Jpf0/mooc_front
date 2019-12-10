import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Reg')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Forget')
  }
]

const router = new VueRouter({
  routes
})

export default router
