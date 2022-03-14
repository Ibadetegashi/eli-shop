<template>
<div class="contact">
    <NavBar></NavBar>
    <form >
<section class="vh-150" style="background-color: #eee;margin-top:5em;padding-bottom:5em">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;margin-top:3em">
          <div class="card-body p-md-5" >
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact us</p>

                <form @submit="onSubmit" class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                              <input
            type="text"
            class="form-control"
            placeholder=""
            v-model="contacts.name"
            required
          />

                      <label class="form-label" for="name">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                             <input
            type="email"
            class="form-control"
            placeholder=""
            v-model="contacts.email"
            required
          />
                      <label class="form-label" for="email">Your Email</label>
                    </div>
                  </div>

                  <div class="form-group">
                       <textarea
            class="form-control"
            rows="3"
            placeholder=""
            v-model="contacts.description"
          ></textarea>
                    <label for="description">Message</label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Send</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://www.pngitem.com/pimgs/m/60-606369_request-a-quote-banner-image-contact-us-illustration.png" class="img-fluid" alt="Sample image">

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
/* eslint-disable */
import axios from "axios";
import Toast from "sweetalert2";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "CreateContacts",
  data() {
    return {
      contacts: {},
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(`http://localhost:4001/contacts`, this.contacts)
        .then((response) => {
          //console.log(response);
          Toast.fire({
            type: "success",
            title: "Message sent",
          });
        });
    },
  },
  components: { NavBar, NavBar, Footer },
};
</script>
