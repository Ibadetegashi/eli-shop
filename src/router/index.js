import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
//import { fb } from '../firebase'
import { onAuthStateChanged, getAuth } from "firebase/auth";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta:{isAuthenticated:true}
  },

  {
    path: "/admin",
    name: "admin", 
    component: Admin,
      meta: { isAdmin: true },
     children:[
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: Products,
     //meta: { isAdmin: true },
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
          
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }
      ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue')
  },
      {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
          {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {

//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/')
//   } else if (requiresAuth && currentUser) {
//       next()
//   } else {
//       next()
//   }
// })

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    if (to.matched.some((record) => record.meta.isAuthenticated && !user)) {
      next("/login");
    } else if (to.matched.some((record) => record.meta.isAdmin)) {
      const tokenResult = await getAuth().currentUser.getIdTokenResult();
      if (!tokenResult.claims.admin) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  });
});
export default router
