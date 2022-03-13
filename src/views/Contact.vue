<template>
<div class="contact">
  <NavBar></NavBar>
  <br><br><br><br>
<div class="container features">
    <div class="row">
  <h1>Contact</h1>
</div>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
       <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11820.106905341989!2d20.713836435558683!3d42.21387341714951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353957030e1d667%3A0x18a2ea6d96894719!2sPremium%20Park%20Hotel!5e0!3m2!1sen!2s!4v1644579785318!5m2!1sen!2s"
                width="380" height="530" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
import NavBar from '@/components/NavBar.vue'
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
                this.$router.push({
                    name: "user",
                    //params: { id: response.data._id }
                });
            });
        }
    },
    components: { NavBar }
}
</script>