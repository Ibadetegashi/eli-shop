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

                   
            <form>
                    <card class='stripe-card'
                        :class='{ complete }'
                        stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
                        :options='stripeOptions'
                        @change='complete = $event.complete'
                        />

                        <button class='pay-with-stripe btn btn-primary mt-4' @click='pay' :disabled='!complete'>Pay with credit card</button>
                    
                    </form>
                </div>
            </div>

        </div>
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";


export default {
    name: "Checkout",
    props: {
        msg: String
    },
    components: { NavBar }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
