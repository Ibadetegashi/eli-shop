<template>
<div class="contact">
  <NavBar></NavBar>
  <br><br><br>
<div class="container features">
    <div class="row">
  <h1>Contact</h1>
</div>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.4081947757478!2d21.153203574245076!3d42.647180668500276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa31dd05b21bd09de!2sUniversiteti%20p%C3%ABr%20Biznes%20dhe%20Teknologji!5e0!3m2!1sen!2s!4v1579859245620!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-12">
    <form @submit="onSubmit">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="Name" v-model="contacts.name">
    </div>
    <div class="form-group">
    <input type="email" class="form-control" placeholder="Email" v-model="contacts.email">
    </div>
    <div class="form-group">
    <textarea class="form-control" rows="4" placeholder="Enter your comments about site" v-model="contacts.description"></textarea>
    </div>
    <input type="submit" class="btn btn-secondary btn-block" value="Send">
    </form>
    </div>
    </div>
</div>
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
import Toast from 'sweetalert2'
import NavBar from './NavBar.vue'

export default {
    name: "CreateContacts",
    data() {
        return {
            contacts: {},
        };
    },
    methods: {
        onSubmit() {
            axios.post(`http://localhost:4000/contacts`, this.contacts)
                .then(response => {
                //console.log(response);
                Toast.fire({
                    type: "success",
                    title: "Message sent"
                });
            });
        }
    },
    components: { NavBar }
}
</script>