<template>
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
</style>
