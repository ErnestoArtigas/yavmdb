<template>
  <div id="app">
    <Navbar @emit:user="receiveUser" @disconnect:user="disconnectUser"></Navbar>
    <b-container style="margin-top: 10px">
      <b-alert
        show
        v-show="isAlertVisible"
        v-if="user != null"
        variant="success"
        >{{ user }} est connecté.</b-alert
      >
      <b-alert show v-show="isAlertVisible" v-else variant="danger"
        >Pas connecté.</b-alert
      >
      <router-view :key="$route.fullPath" />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      user: null,
      isAlertVisible: false,
    };
  },
  methods: {
    receiveUser(userFromNavbar) {
      this.user = userFromNavbar;
      this.isAlertVisible = true;
      setTimeout(() => (this.isAlertVisible = false), 3000);
    },
    disconnectUser() {
      this.user = null;
      this.isAlertVisible = true;
      setTimeout(() => (this.isAlertVisible = false), 3000);
    },
  },
};
</script>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
