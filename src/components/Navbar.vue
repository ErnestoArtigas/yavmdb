<template>
  <b-navbar toggleable="lg" type="dark" id="navbar">
    <router-link to="/"
      ><b-navbar-brand
        ><b-img
          src="@/assets/logoWithText.png"
          style="height: 2em"
          fluid-grow
        ></b-img></b-navbar-brand
    ></router-link>

    <b-navbar-nav class="ml-auto">
      <b-form-input
        v-model="searchedMovie"
        @keyup.enter="searchMovie"
        placeholder="Rechercher un film"
      ></b-form-input>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchedMovie: "",
      data: "<b-icon-search></b-icon-search>",
    };
  },
  methods: {
    searchMovie() {
      console.log(this.searchedMovie);
    },
  },
};
</script>

<style scoped>
#navbar {
  background-color: #005aa3 !important;
  padding: 15px;
}
a {
  text-decoration: none;
}
</style>
