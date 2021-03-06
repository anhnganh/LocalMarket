import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from '../views/NguoiBan.vue'
import ManagerShop from "../views/admin/ManagerShop.vue";
import Contact from "../views/user/Contact.vue";
import productList from "../views/user/ProductList";
import NewList from "../views/user/NewList.vue";
import RevenueManager from "../views/admin/revenueStatistics.vue";
import ProductManager from "../views/admin/ManageProduct.vue";
import ShopDetail from "../views/user/Shop_Detail.vue";
import LoginUser from "../views/user/Login.vue";
import ShoppingCart from "../views/user/ShoppingCart.vue";
import ProductDetail from "../views/user/Product_Detail.vue";
import PurchaseHistory from "../views/user/PurchaseHistory.vue";
import Schedule from "../views/admin/Schedule.vue";
import User from "../views/user/User.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nguoiban",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/NguoiBan.vue"),
  },
  {
    path: "/login/github/callback",
    name: "Login",
    component: () => import("@/views/user/LoginFacebook.vue")
  },
  {
    path: "/managershop",
    name: "ManagerShop",
    component: ManagerShop,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/productList",
    name: "productList",
    component: productList,
  },
  {
    path: "/newlist",
    name: NewList,
    component: NewList,
  },
  {
    path: "/revenueManager",
    name: RevenueManager,
    component: RevenueManager,
  },
  {
    path: "/ProductManager",
    name: ProductManager,
    component: ProductManager,
  },
  {
    path: "/shopDetail",
    name: ShopDetail,
    component: ShopDetail,
  },
  {
    path: "/login",
    name: LoginUser,
    component: LoginUser,
  },
  {
    path: "/productdetail",
    name: ProductDetail,
    component: ProductDetail,
  },
  {
    path: "/schedule",
    name: Schedule,
    component: Schedule,
  },
  {
    path: "/purchHistory",
    name: PurchaseHistory,
    component: PurchaseHistory,
  },
  {
    path: "/shoppingCart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },

];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
