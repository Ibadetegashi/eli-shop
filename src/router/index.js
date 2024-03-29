import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import ContactList from "../views/ContactList.vue";
import Register from "../views/Register.vue";

//import { fb } from '../firebase'
import { onAuthStateChanged, getAuth } from "firebase/auth";
import HomeView from '@/views/HomeView.vue';




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
   
   {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
      {
    path: '/productet',
    name: 'productet',
    component: HomeView
  },
  {
    path: '/myprofile',
    name: 'myprofile',
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
          path: "register",
          name: "register",
          component: Register
          
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
       },
                {
          path: "contacts/contactlist",
          name: "contacts",
          component: ContactList
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
  //     {
  //   path: '/register',
  //   name: 'register',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  // },
  {
    path: '/regiister',
    name: 'regiister',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterProfile.vue')
  },
          {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
                   {
    path: '/ourproducts',
    name: 'ourproducts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue')
  },
  //                 {
  //   path: '/contacts/contactlist',
  //   name: '/contacts/contactlist',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ContactList.vue')
  // }

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
