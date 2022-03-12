<template>
  <section>
    <div class="row justify-content-center">
      <div class="col-md-7 col-lg-3 p-4 p-md-5">
        <form @submit.prevent="createUser">
          <!-- Input fields -->
          <div class="form-group">
            <input
              placeholder="Email"
              class="form-control"
              name="email"
              type="email"
              v-model="form.email"
            />
          </div>

          <div class="form-group">
            <input
              placeholder="password"
              class="form-control"
              name="password"
              type="password"
              v-model="form.password"
            />
          </div>

          <!-- Submit button -->
          <div v-if="this.error">Error ocurred: {{ this.error }}</div>
          <button class="btn btn-primary" type="submit">Register</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from "@/utility/apiRequest";

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
        await apiRequest.registerUser(this.form.email, this.form.password);
        this.$router.replace({ name: "Listing" });
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
