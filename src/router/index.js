import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:slug',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
