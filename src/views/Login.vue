
<template>

<div class="login">
 <nav-bar></nav-bar>
    <section class="vh-150" style="margin-top:5em;padding-bottom:5em">
  <div class="container py-5 h-100">
    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
            Log in
      </p>
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image">
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
           <div style=" width: 310px;margin-left:60px" class="alert alert-primary" role="alert" v-if="this.error">
            Error ocurred: {{ this.error }}
          </div>
        <form @submit.prevent="loginUser" >
          <!-- Email input -->
          <div class="form-outline mb-4">
             <input
              class="form-control"
              type="email"
              v-model="form.email"
              placeholder=""
              required
            />
            <label class="form-label" for="email">Email address</label> 
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              class="form-control"
              type="password"
              v-model="form.password"
              placeholder=""
              required
            />
            <label class="form-label" for="password">Password</label>
          </div>


          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">Log in</button>

        </form>
      </div>
    </div>
  </div>
</section>
    </div>

    
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavBar from "@/components/NavBar.vue";
import Toast from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async loginUser() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password
        )
          Toast.fire({
            type: "success",
            title: "Logged-in",
          });
        
      } catch (err) {
        this.error = err;
      }
    
      this.$router.replace(  "admin/products" );
      
    },
  },
    components: { NavBar }

};
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>