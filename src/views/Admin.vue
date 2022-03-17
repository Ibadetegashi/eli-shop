<template>
  <div class="admin">
<div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Eli Shop</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header"  >
                    <div class="user-pic"  >
                        <img class="img-responsive img-rounded"  src="/img/user.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">
                            <!-- <strong>{{name}}</strong> -->
                        </span>
                       <strong> <span class="user-role" > {{email}} </span></strong>
                        <span class="user-status">
                            <!-- <i class="fa fa-circle"></i> -->
                            <span></span>
                        </span>
                    </div>
                </div>
                   
                               <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-70">
                          </div>
                                          
                                                    <div class="form-group">
                              <router-link class="btn btn-primary w-70" style="color:white"  to="/admin/register" 
          >Add new Admin</router-link
        >
                          </div>
                                  
                <!-- sidebar-search  -->
                <!-- <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>

                        <!-- <li>
                            <router-link to="/admin/overview">
                                <i class="fa fa-chart-line"></i>
                                <span>Overview</span>
                            </router-link>
                        </li> -->
                        <li>
                            <router-link to="/admin/products">
                                <i class="fab fa-amazon"></i>
                                <span>Products</span>
                            </router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Orders</span>
                            </router-link>
                        </li> -->

                          <li>
                            <router-link to="/admin/contacts/contactlist">
                       <i	class="far fa-comments"></i>
                                <span>Contacts</span>
                            </router-link>
                        </li>

                        <!-- <li>
                            <router-link to="/admin/profile">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li> -->
                        <li>
                            <a href="#" @click="logout()">
                                <i class="fa fa-power-off"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                                                <li>
                            <router-link to="/" href="#">
                                <i class="fa fa-home"></i>
                                <span>Home</span>
                            </router-link>
                        </li>

                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
       
        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  </div>
</template>

<script>
// @ is an alias to /src

import {fb} from '../firebase';
import $ from 'jquery'
import Toast from 'sweetalert2'

export default {
  name: "admin",
  data(){
      return{
          name:null,
          email:null,
      }
  },
  components: {
    
  },
  methods:{
      closeMenu(){
        $(".page-wrapper").toggleClass("toggled");
      },
      logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      },
       resetPassword(){
                   

          const auth = fb.auth();          
          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
            
               Toast.fire({
                type: 'success',
                title: 'Email sent'
              })
          }).catch((error) =>  {
              console.log(error);
          });
      },
  },
  

  created(){
      let user = fb.auth().currentUser;
      this.email = user.email;
      this.name = user.displayName;
    

  }
};
</script>

<style>

</style>

