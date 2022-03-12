<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-3 p-4 p-md-5">
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <input
              class="form-control"
              type="email"
              v-model="form.email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              type="password"
              v-model="form.password"
              placeholder="Password"
            />
          </div>
          <button class="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
        );
      } catch (err) {
        this.error = err;
      }
      this.$router.replace({ name: "Listing" });
    },
  },
};
</script>
