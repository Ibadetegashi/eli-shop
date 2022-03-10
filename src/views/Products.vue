<template>
  <div class="overview">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h3>Product Page</h3>
                 <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
                 </p>
              </div>
              <div class="col-md-6">
                  <img src="/img/svg/overview.svg" alt="" class="img-fluid">
              </div>
            </div>
          </div>
          <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>
<div class="product-test">
 <div class="form-group">
     <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
  </div>
  <div class="form-group">
    <input type="text" placeholder="Price" v-model="product.price" class="form-control">
  </div>
 <div class="form-group"> I
      <button @click="saveData" class="btn btn-primary">Save Data</button>
  </div>
  <!-- <hr>
<h3>Products list</h3>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product,id) in products"  :key="id">
      <td>
          {{product.name}}
      </td>
      {{product.price}}
    </tr> I
  </tbody>
</table> -->
      <div class="table-responsive">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="(product,id) in products" :key="id">
                        <td>
                          {{product.data().name}}
                        </td>

                        <td>
                          {{product.data().price}}
                        </td>

                        <td>

                          <button class="btn btn-primary" @click="editProduct(product)">Edit</button>
                          <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>
      </div>
      </div>
  </div>
</template>
<script>
import {db}from '../firebase';
export default {
  name: "Products",
  props: {
    msg: String
  },
  data(){
    return {
        products: [],
        product: {
          name: null,
          price:null
        }
  }
},
  methods:{
      deleteProduct(doc){
          if(confirm("Are you sure?")){
              db.collection("products").doc(doc).delete().then(function(){
                  console.log("Deleted");
              }).catch(function(error){
                  console.error("Errorr removing: ",error);
              });

          }
      },
    saveData(){
      db.collection("products").add(this.product)
      .then((docRef)=> {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
  

    },
    readData(){
        db.collection("products").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc)=> {
     
             this.products.push(doc);
        });
    });
    },
    reset(){
      //  Object.assign(this.$data, this.$options.data.apply(this));
    }
      },
      created (){
          this.readData()
      }
};
</script>