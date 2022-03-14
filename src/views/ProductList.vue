<template>
  <div class="products" id="products">
    <NavBar></NavBar>
      <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
              <div class="col-md-4"  v-for="(product,id) in products" :key="id">
                  <div class="card product-item" style="min-height:500px;margin-top:35px" >

                        <carousel :perPage="1" style="min-height:350px;max-height:350px">
                          <slide v-for="(image, index) in product.images" :key="index">
                                <img :src="image" class="card-img-top" alt="..." width="280px"
                    height="300px">
                          </slide>
                        </carousel>
                
                        <div class="card-body" >
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price | currency }}</h5>

                          </div>
                               <add-to-cart 
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart> 
                        
                        </div>
                        
                    </div>
              </div>

          </div>
      </div>
    
    <login></login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
import {db} from '../firebase';
import NavBar from '@/components/NavBar.vue';


export default {
    name: "Products-list",
    props: {
        msg: String
    },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getImage(images) {
            return images[0];
        }
    },
    firestore() {
        return {
            products: db.collection("products"),
        };
    },
    components: { NavBar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .products{
       margin-top: 4rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
        height: fit-content;
    }
</style>
