<template>
  <div>
    <h3>Login with facebook, please wait</h3>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LoginGithub",
  methods: {
    ...mapActions({
      login: "user/loginGithubCallback",
    }),
    loginUser() {
      this.login({
        code: this.$route.query.code,
      }).then((resp) => {
        if (resp.data.access_token) {
            this.$router.push({ name: "Home" });
        } else {
          this.$router.push({
            name: "Login",
          });
        }
      });
    },
  },
  created() {
    this.loginUser();
  },
};
</script>
<style></style>
