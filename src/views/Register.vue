<!--<template>
  <div class="register">
    <NavBar></NavBar>
    <form @submit.prevent="createUser">
      <div class="form">
        <img
          id="log-img"
          src="https://www.joshtalks.info/assets/media/avatar.jpg"
          alt=""
        />
        <div id="input">
          <div id="h1">
            <h1>Register</h1>
          </div>
          <label for="name">Name</label>

          <input
            placeholder=""
            class="form-control"
            name="name"
            type="text"
            v-model="form.name"
          />
          <label for="email">Email</label>

          <input
            placeholder=""
            class="form-control"
            name="email"
            type="email"
            v-model="form.email"
          />

          <label for="password">Password</label>
          <input
            placeholder=""
            class="form-control"
            name="password"
            type="password"
            v-model="form.password"
          />
          <div style="color: white; width: 250px" v-if="this.error">
            Error ocurred: {{ this.error }}
          </div>

          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  </div>
</template> -->

<template>
  <div class="register">
  <NavBar></NavBar>
  <form @submit.prevent="createUser" >
<section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image">

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
import apiRequest from "@/utility/apiRequest";
import NavBar from "@/components/NavBar.vue";
import Toast from "sweetalert2";
import { db } from "../firebase";

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
    async createUser() {
      try {
        await apiRequest
          .registerUser(this.form.name,this.form.email, this.form.password)
          .then((user) => {
            Toast.fire({
              type: "success",
              title: "Registered",
            });
            // eslint-disable-next-line no-undef
           
            db.collection("profiles").doc(user.uid).set({
              name: this.name //qysh
            })
            this.$router.replace({ name: "admin" });
          });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
  components: { NavBar },
};
</script>

<!--<style scoped>
input {
  border: none;
  border-bottom: 5px inset rgb(221, 123, 42);
  height: 30px;
  width: 200;
  margin-bottom: 20px;
  border-radius: 0px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  background-color: burlywood;
}
form {
  margin: auto;
  width: fit-content;
}
.form {
  display: flex;
  margin-top: 150px;
  box-shadow: 0 0 15px rgba(240, 58, 12, 0.884);
  width: fit-content;
}

button[type="submit"] {
  background-color: darkorange;
  color: black;
  height: 30px;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}

#here {
  text-align: center;
  color: white;
  cursor: pointer;
}
#h1 {
  color: white;
  text-align: center;
  padding-bottom: 15px;
}
#input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  background-color: black;
  padding-left: 90px;
  padding-right: 90px;
}
label {
  color: darkorange;
  margin-left: 5px;
}

#log-img {
  height: 500px;
  width: 350px;
  margin: 0;
}
#input button:active {
  background-color: rgb(255, 102, 0);
  transform: translateY(4px);
}

body {
  min-height: 800px;
  margin: 0;
  background-color: rgb(171, 136, 136);
  font-family: Georgia, "Times New Roman", Times, serif;

  /* background:radial-gradient(rgba(255, 166, 0, 0.245), rgb(221, 123, 42)); */
}
</style> -->
