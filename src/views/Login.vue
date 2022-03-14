
<template>

<div class="login">
  <NavBar></NavBar>
  <form @submit.prevent="loginUser" >
        <div class="form">
            <img id="log-img"
                src="https://www.joshtalks.info/assets/media/avatar.jpg"
                alt="">
            <div id="input">
                <div id="h1">
                    <h1>Login</h1>
                </div>
                <label for="email">Email</label>

                <input
              class="form-control"
              type="email"
              v-model="form.email"
              placeholder=""
            />
                <label for="password">Password</label>
              <input
              class="form-control"
              type="password"
              v-model="form.password"
              placeholder=""
            />
          <div style="color:white;width:250px" v-if="this.error">Error ocurred: {{ this.error }}</div>

                <button type="submit">Login</button>
               
            </div>
            
        </div>
    </form>
    </div>
    
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NavBar from "@/components/NavBar.vue";
import Toast from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    async loginUser() {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(
          auth,
          this.form.email,
          this.form.password
        )
          Toast.fire({
            type: "success",
            title: "Logged-in",
          });
        
      } catch (err) {
        this.error = err;
      }
    
      this.$router.replace(  "admin/products" );
      
    },
  },
    components: { NavBar }

};
</script>
<style scoped>
input {
  border: none;
  border-bottom: 5px inset rgb(221, 123, 42);
  height: 30px;
  width: 200;
  margin-bottom: 20px;
  border-radius: 0;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
input:focus,
textarea:focus,
select:focus {
  outline: none;
  background-color: burlywood;
}
form {
  margin: auto;
  width: fit-content;
}
.form {
  display: flex;
  margin-top: 150px;
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

#here {
  text-align: center;
  color: white;
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
  row-gap: 10px;
  background-color: black;
  padding-left: 90px;
  padding-right: 90px;
}
label {
  color: darkorange;
  margin-left: 5px;
}

#log-img {
  height: 500px;
  width: 350px;
  margin: 0;
}
#input button:active {
  background-color: rgb(255, 102, 0);
  transform: translateY(4px);
}

body {
  min-height: 800px;
  margin: 0;
  background-color: rgb(171, 136, 136);
  font-family: Georgia, "Times New Roman", Times, serif;

  /* background:radial-gradient(rgba(255, 166, 0, 0.245), rgb(221, 123, 42)); */
}
</style>