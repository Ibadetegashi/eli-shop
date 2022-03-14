<template>
  <div class="home">
   <NavBar></NavBar>
   <Main></Main> 
  <Icons></Icons>
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt="" width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
                     <p  v-for="(about,id) in about" :key="id">{{about.p2}}</p>

         
                      <router-link  class="btn custom-btn btn-outline-primary" to="/ourproducts" >More</router-link>

        </div>
      </div>
    </div>
  
    <login></login>
    <mini-cart></mini-cart>
      <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import Main from "@/components/Main.vue";
import Product from "@/sections/Products.vue";
import ProductList from "@/views/ProductList.vue";
import Login from "@/components/Login.vue";
import MiniCart from '@/components/MiniCart.vue';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import {db} from '../firebase';
import Icons from "@/components/Icons.vue";





export default {
  name: "HomeView",
  components: {
    Main,
    Footer,
    Product,
    Login,
    ProductList,
    MiniCart,
    NavBar,
    Icons
},
  data() {
        return {
            about: [],
        };
    },
  
    firestore() {
        return {
            about: db.collection("about"),
        };
    },
};
</script>

<style></style>
