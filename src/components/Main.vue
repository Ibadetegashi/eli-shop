<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Eli Shop 
                </h1>
                     <p  v-for="(about,id) in about" :key="id">{{about.p}}</p>

                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Explore</button>
                      <router-link  class="btn custom-btn btn-outline-secondary" to="/ourproducts" >Products</router-link>

                    
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
       
    </div>
    
</template>


<script>
import {db} from '../firebase';
import NavBar from '@/components/NavBar.vue';


export default {
    name: "Main",
    props: {
        msg: String
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
    components: { NavBar}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 700px;
    text-align: left;
  }

</style>
