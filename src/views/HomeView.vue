<template>
  <div class="home">
    <NavBar></NavBar>
     
     

      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
         
        </div>
      </div>
      

  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar
  }
};
</script>

<style>

</style>

