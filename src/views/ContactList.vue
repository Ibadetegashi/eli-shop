<template>

<!-- <div class="container features">
    <div class="row">
  <h3>Contacts Listing </h3>
</div>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
      
<table class="table">
    <thead>
    <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">description</th>
                </tr>
    </thead>
    <tbody>
          <tr v-for="contacts in contactsfields" :key="contacts._id">
                                <td>{{ contacts.name }}</td>
                                <td>{{ contacts.email }}</td>
                                <td>{{ contacts.description }}</td>
                                <button type="button" class="btn btn-danger"  @click.stop="deletecontacts(contacts._id)">Delete </button>
                            </tr>
    </tbody>
</table>
    </div>


    </div>
</div> -->






<div class="mt-2">
<div class="container">
    <h1>Contacts</h1>
    <table class="table table-striped sorting  table-hover">
        <thead>
             <tr  class="thead-dark">
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col" >Description</th>
                <th scope="col">Action</th>
                </tr>
        </thead>
      <tbody>
          <tr v-for="contacts in contactsfields" :key="contacts._id">
                                <td>{{ contacts.name }}</td>
                                <td>{{ contacts.email }}</td>
                                
                                <td style="text:wrap">{{ contacts.description }}</td>
                             <td>  <button type="button" class="btn btn-danger"  @click.stop="deletecontacts(contacts._id)">Delete </button></td> 
                            </tr>
    </tbody>
    </table>
</div>
</div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Createcontacts',
  data () {
    return {
      contactspost:{},
      contactsfields:{}
    }
  },created () {
    axios.get(`http://localhost:4001/contacts`)
    .then(response => {
      this.contactsfields = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit () {
      
      axios.post(`http://localhost:4001/contacts`, this.contactspost)
      .then(response => {
        console.log(response);
        this.$router.go({
          //params: { id: response.data._id }
       })
        })
      
    },deletecontacts (contactsid){
            axios.delete('http://localhost:4001/contacts/' + contactsid)
            
            .then((result) => {
              //refresh on same page
            Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // console.log(doc["contacts.id"]);
          // this.$firestore.contactss.doc(doc.id).delete(this.contacts.id);

          Swal.fire("Deleted!", "Your file has been deleted.", "success");
           this.$router.go({
               
              })
        }
      });

            })
            .catch(e => {
              this.errors.push(e)
            })
        }
  }
}
</script>
<style scoped>
table{
    table-layout: fixed;
}
td{
    word-wrap:break-word
}
</style>