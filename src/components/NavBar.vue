<template>
  <div class="hello">

   <nav class="navbar custom-nav fixed-top navbar-expand-lg bg-light" >
     <div class="container">
        <router-link class="navbar-brand" to="/" style="font:bolder">ELI shop</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productet" class="nav-link" href="#">Products</router-link>
            </li>
               <li class="nav-item" >
              <router-link to="/myprofile"  class="nav-link">Profile</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link" href="#">About</router-link>
            </li>
               <li class="nav-item">
              <router-link to="/contact" class="nav-link" href="#">Contact</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/register" class="nav-link" href="#">Register</router-link>
            </li>
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Start</a>

          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
         
              <router-link to="/login" class="btn btn-outline-success my-2 my-sm-0">Login</router-link>

            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-cart-plus"></i>
            </a>
          </form>
        </div>

     </div>

</nav>
    
  </div>
</template>

<script>
import {fb} from '../firebase';

export default {
  name: "NavBar",
  props: {
    msg: String
  },
  components:{},
  methods:{
     logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: rgba(255, 255, 255, 0.721);;
    }
nav a.router-link-exact-active {
    color: #3685ac;
}
   }

</style>
