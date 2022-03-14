<!--<template>
  <div class="contact">
    <NavBar></NavBar>
    <form @submit="onSubmit">
      <div class="form">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11820.106905341989!2d20.713836435558683!3d42.21387341714951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353957030e1d667%3A0x18a2ea6d96894719!2sPremium%20Park%20Hotel!5e0!3m2!1sen!2s!4v1644579785318!5m2!1sen!2s"
          width="380"
          height="530"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div id="input">
          <div id="h1">
            <h1>Contact Us</h1>
          </div>
          <label for="name">Full Name</label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            v-model="contacts.name"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder=""
            v-model="contacts.email"
            required
          />

          <label for="txtarea">Message</label>
          <textarea
            class="form-control"
            rows="4"
            placeholder=""
            v-model="contacts.description"
          ></textarea>

          <button type="submit">SEND</button>
        </div>
      </div>
    </form>
    <Footer></Footer>
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
<style scoped>
input {
  border: none;
  border-bottom: 5px inset rgb(255, 255, 255);
  height: 30px;
  width: 200;
  margin-bottom: 20px;
  border-radius: 20px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  background-color: rgb(255, 255, 255);
}

textarea {
  resize: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
form {
  margin: auto;
  width: fit-content;
}
.form {
  display: flex;
  margin-top: 150px;
  margin-bottom: 150px;
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

#h1 {
  color: white;
  text-align: center;
  padding-bottom: 15px;
}
#input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
  background-color: black;
  padding-left: 90px;
  padding-right: 110px;
}
label {
  color: rgb(35, 70, 176);
  margin-left: 5px;
}

#input button:active {
  background-color: rgb(67, 114, 171);
  transform: translateY(4px);
}
</style> -->

<template>
<div class="contact">
    <NavBar></NavBar>
    <form @submit="onSubmit">
<section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact us</p>

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

                  <div class="form-group">
                    <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                    <label for="formControlTextarea1">Message</label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Send</button>
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
<!--<style scoped>
input {
  border: none;
  border-bottom: 5px inset rgb(255, 255, 255);
  height: 30px;
  width: 200;
  margin-bottom: 20px;
  border-radius: 20px;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  background-color: rgb(255, 255, 255);
}

textarea {
  resize: none;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
form {
  margin: auto;
  width: fit-content;
}
.form {
  display: flex;
  margin-top: 150px;
  margin-bottom: 150px;
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

#h1 {
  color: white;
  text-align: center;
  padding-bottom: 15px;
}
#input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
  background-color: black;
  padding-left: 90px;
  padding-right: 110px;
}
label {
  color: rgb(35, 70, 176);
  margin-left: 5px;
}

#input button:active {
  background-color: rgb(67, 114, 171);
  transform: translateY(4px);
}
</style>-->

<style scoped>

</style>

