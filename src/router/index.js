import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Networking from '../views/Networking.vue'
import BankName from '../views/Bank/Name.vue'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },{
    path: '/networking',
    name: 'Networking',
    component: Networking
  },{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },{
    path: '/bank/name',
    name: 'BankName',
    component: BankName
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
