<template>
  <div class="chekout">
       <NavBar></NavBar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-8">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="(item,id) in this.$store.state.cart" :key="id" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-4">
                    <p>
                        Total Price : {{ this.$store.getters.totalPrice | currency }}
                    </p>
 <!-- <form action="/create-checkout-session" method="POST">
        <button type="submit"  @click="pay">Checkout</button>
      </form> -->
                     <button class="btn btn-primary" @click="pay">Checkout</button>
                   
                </div>
            </div>

        </div>
  </div>
</template>
 <script src="https://js.stripe.com/v3/"></script>
<script>
import axios from 'axios';
import NavBar from '@/components/NavBar.vue';
var stripe = Stripe('pk_test_3yyWicMGKdLdRD28kHM3ANkX00vOa4k2B3');
export default {
    data() {
        return {
            sessionId: ""
        };
    },
    methods: {
        pay() {
            // data = {id:10,id:10}
            let data = this.$store.state.cart.map(item => ({ [item.productId]: item.productQuantity }));
            data = Object.assign({}, ...data);
            axios.get("http://localhost:5000/eli-shop/us-central1/CheckoutSession", {
                params: {
                    products: data
                }
            })
                .then(response => {
                this.sessionId = response.data;
                console.log(response.data);
                stripe.redirectToCheckout({
                    sessionId: this.sessionId.id
                }).then(function (result) {
                });
            })
                .catch(error => {
                console.log(error);
            });
        }
    },
    created() {
    },
    components: { NavBar }
}
</script>



<style>
</style>