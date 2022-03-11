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
<div class="product-test">

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
        <h3 style="float: left" class="d-inline">Product List</h3>
        <button @click="addNew()" class="btn btn-primary" float-right >Add Product</button>
              
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="(product, name, price) in products" :key ="product.id" >
                        <td>
                          {{name}}.{{product.name}}
                          </td> 
                          <td>
                          {{price}}{{product.price}}
                          </td> 
                          <td>
                            <button class="btn btn-primary">Edit</button>
                            <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                          </td> 
                      </tr>

                  </tbody>
                </table>
            </div>
      </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> 
            </div>
            <div class="modal-body">

               <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Product Description" v-model="product.description" class="form-control">
                      
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                   <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="tag" class="form-control">
                    </div>

                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage()" class="form-control">
                    </div>

                  </div>
               </div>



            </div>
                <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addProduct()" type="button" class="btn btn-primary" >Save changes</button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
    import { fb, db}from '../firebase';
    import $ from 'jquery'
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
              description: null,
              price:null,
              tag: null,
              image: null
            },
            activeItem: null
      }
    },
    firestore(){
      return {
        products: db.collection('products'),
      }
    },
      methods:{
        uploadImage(){

        },

        addNew(){
          $('#product').modal('show');
        },
      
        updateProduct(){

        },

        editProduct(product){

        },


          deleteProduct(doc){
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.isConfirmed) {
                
                this.$firestore.products.doc(doc['.key']).delete()

               Toast.fire({
                  type: 'success',
                  title: 'Deleted  successfully'
                })

              }
            })
          },

        addProduct(){
          this.$firestore.products.add(this.product)
          $('#product').modal('hide');
        },
        readData(){
          
        }
          },
          created (){

          }
    };
  </script>