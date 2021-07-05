import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/NguoiBan.vue'
import ManagerShop from '../views/admin/ManagerShop.vue'
import Contact from '../views/user/Contact.vue'
import productList from '../views/user/ProductList'
import NewList from '../views/user/NewList.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nguoiban',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/NguoiBan.vue")
  },
  {
    path:'/managershop',
    name: 'ManagerShop',
    component: ManagerShop
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
  {
    path:'/productList',
    name: 'productList',
    component: productList
  },
  {
    path:'/newlist',
    name:NewList,     
    component: NewList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
