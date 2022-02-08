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

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ms-auto">
        <b-input-group>
          <b-input
            v-model="searchQuery"
            @keyup.enter="goToSearchResults"
            placeholder="Rechercher un film"
          >
          </b-input>
          <b-input-group-append>
            <b-button @click="goToSearchResults" variant="secondary">
              <b-icon-search> </b-icon-search>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-navbar-nav>

      <b-navbar-nav>
        <router-link to="/connection"
          ><b-nav-item>Connexion</b-nav-item></router-link
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    goToSearchResults() {
      this.$router.push(`/search/${this.searchQuery}`);
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
