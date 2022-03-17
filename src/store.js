import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');



export default new Vuex.Store({
    state: {
    cart: cart ? JSON.parse(cart) : [],
       user: {
      loggedIn: false,
      data: null
    }
    },

    getters: {
      totalPrice: state => {
        let total = 0;
        state.cart.filter((item) => {
            total += (item.productPrice * item.productQuantity);
        });

        return total;
      },
        user(state){
      return state.user
    }
    },

    mutations:{

      addToCart(state, item){

        let found = state.cart.find(product => product.productId == item.productId );

        if(found){
          found.productQuantity++;
        }else{
          state.cart.push(item);

        }

        this.commit('saveData');

      },

      saveData(state){
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      },

      removeFromCart(state, item){

          let index = state.cart.indexOf(item);
          state.cart.splice(index,1);

        this.commit('saveData');

      },
       SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }


  },
     actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
         displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
    
  })