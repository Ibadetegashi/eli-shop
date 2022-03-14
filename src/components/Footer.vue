<template>
<div>
<footer class="page-footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-10">
      <h6 id="add" class="text-uppercase font-weight-bold">Information</h6>
      <p id="info" v-for="(about,id) in about" :key="id">{{about.p}}</p>
     
    </div>
    <div class="col-lg-6 col-md-4 col-sm-12">
      <h6 class="text-uppercase font-weight-bold">Contact</h6>
      <p>Prizren
      <br/>info@eli.com
      <br/>+ 383 49 613 011
      <br/>+ 383 44 871 502</p>
      <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/"><i class="fab fa-twitter-square"></i></a>
    </div>
  
  </div>
  </div>
  <div class="footer-copyright text-center">© 2022 Copyright: eli-shop.web.app.com</div>
</footer>
</div>
</template>
<script>
import {db} from '../firebase';



export default {
    name: "About-Page",
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
    components: { }
};
</script>
<style scoped>
  .page-footer {
     background-color: rgba(69, 117, 201, 0.884);
    color: rgb(255, 255, 255);
    padding: 60px 0 0px;
  }
  .footer-copyright {
    color: rgb(255, 255, 255);
    padding: 20px 0;
  }
 
  .fab {
  font-size: 35px;
  color: rgb(255, 255, 255);
  height: 60px;
  margin: 5px;
}

</style>