<template>
  <div class="register">
    <NavBar></NavBar>
    <form>
      <section class="vh-150" style="background-color: #eee;margin-top:5em;padding-bottom:5em">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style="border-radius: 25px;margin-top:3em">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register
                      </p>
       <div style=" width: 270px;margin-left:60px" class="alert alert-primary" role="alert" v-if="this.error">
            Error ocurred: {{ this.error }}
          </div>
                      <form @submit.prevent="register()" class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              placeholder=""
                              class="form-control"
                              name="name"
                              type="text"
                              v-model="form.name"
                            />
                            <label class="form-label" for="name"
                              >Your Name</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              placeholder=""
                              class="form-control"
                              name="email"
                              type="email"
                              v-model="form.email"
                              required
                            />

                            <label class="form-label" for="email"
                              >Your Email</label
                            >
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              placeholder=""
                              class="form-control"
                              name="password"
                              type="password"
                              v-model="form.password"
                              required
                            />
                            <label class="form-label" for="password"
                              >Password</label
                            >
                          </div>
                        </div>
        

                        <div
                          class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                        >
                          <button type="submit" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                           
                      </form>
                    </div>
                    <div
                      class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
//import apiRequest from "@/utility/apiRequest";
import NavBar from "@/components/NavBar.vue";

import {fb, db } from "../firebase";
import Toast from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    register(){
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                 .then((user) => {
                       Toast.fire({
              type: "success",
              title: "Registered",
            });
                    
                     // eslint-disable-next-line no-undef
                     db.collection("profiles").doc(user.user.uid).set({
                         name: this.name
                     })
                     .then(function() {
                         console.log("Document successfully written!");
                     })
                     .catch(function(error) {
                         console.error("Error writing document: ", error);
                     });

                     this.$router.replace('admin');
                 })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
      }

  },
  components: { NavBar },
};
</script>
