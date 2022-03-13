<template>

<div class="register">
  <NavBar></NavBar>
  <form @submit.prevent="createUser" >
        <div class="form">
            <img id="log-img"
                src="https://www.joshtalks.info/assets/media/avatar.jpg"
                alt="">
            <div id="input">
                <div id="h1">
                    <h1>Register</h1>
                </div>
                <label for="email">Email</label>

                <input placeholder=""
              class="form-control"
              name="email"
              type="email"
              v-model="form.email">

                <label for="password">Password</label>
                <input placeholder=""
              class="form-control"
              name="password"
              type="password"
              v-model="form.password">
          <div style="color:white;width:250px" v-if="this.error">Error ocurred: {{ this.error }}</div>

                <button type="submit">Register</button>
               
            </div>
            
        </div>
    </form>
    </div>
    
</template>

<script>
import apiRequest from "@/utility/apiRequest";
import NavBar from "@/components/NavBar.vue";

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
        async createUser() {
            try {
                await apiRequest.registerUser(this.form.email, this.form.password)
                    .then((user) => {
                    // eslint-disable-next-line no-undef
                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.name
                    });
                    this.$router.replace({ name: "admin" });
                });
            }
            catch (err) {
                this.error = err.response.data.error;
            }
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
  border-radius: 20px;
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
  box-shadow: 0 0 15px rgba(182, 152, 151, 0.884);
  width: fit-content;
}

button[type="submit"] {
  background-color: rgb(171, 150, 125);
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
  background-color: rgb(169, 132, 132);
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