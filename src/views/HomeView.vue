<template>
  <div class="home">
    <NavBar></NavBar>
    <!-- <Main></Main> -->
    <ProductList></ProductList>

    <Product></Product>

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt="" width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam
            reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum,
            voluptas exercitationem ratione consectetur et!
          </p>
          <button class="btn custom-btn btn-outline-primary mr-4">
            Browse Products
          </button>
        </div>
      </div>
    </div>
    <login></login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
// @ is an alias to /src

import Main from "@/components/Main.vue";
import Product from "@/sections/Products.vue";
import ProductList from "@/sections/ProductList.vue";
import Login from "@/components/Login.vue";
import MiniCart from '@/components/MiniCart.vue';


export default {
  name: "HomeView",
  components: {
  
    Main,
    Product,
    Login,
    ProductList,
    MiniCart
  },
};
</script>

<style></style>
