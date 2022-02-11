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
      <b-navbar-nav class="ms-auto" style="margin-right: 1rem">
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
        <div>
          <b-button v-if="user != null" @click="disconnect"
            >Déconnexion</b-button
          >
          <b-button v-else v-b-modal.connection>Connexion</b-button>

          <b-modal ref="connection" id="connection" title="Connectez-vous">
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group label="Email" label-for="mail-input">
                <b-form-input
                  id="mail-input"
                  v-model="mail"
                  :class="{ 'error-input': !isEmailCorrect }"
                  required
                ></b-form-input>
                <p v-if="!isEmailCorrect" class="error-text">
                  Email : toto@yavmdb.com
                </p>
              </b-form-group>
              <b-form-group label="Mot de passe" label-for="password-input">
                <b-form-input
                  id="password-input"
                  type="password"
                  v-model="password"
                  :class="{ 'error-input': !isPasswordCorrect }"
                  required
                ></b-form-input>
                <p v-if="!isPasswordCorrect" class="error-text">
                  Mot de passe : 123456789
                </p>
              </b-form-group>
            </form>

            <template #modal-footer>
              <b-button variant="danger" @click="hideModal">Annuler</b-button>
              <b-button
                variant="primary"
                @click="submitUser"
                :disabled="!isFormValid"
                >Connexion</b-button
              >
            </template>
          </b-modal>
        </div>
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
      mail: "",
      password: "",
      user: null,
    };
  },
  methods: {
    goToSearchResults() {
      // To trigger the no results alert on the SearchResults vue.
      this.searchQuery = this.searchQuery == "" ? " " : this.searchQuery;
      this.$router.push(`/search/${this.searchQuery}`);
    },
    submitUser() {
      if (this.isFormValid) {
        this.$emit("emit:user", "Toto");
        this.hideModal();
        this.user = "Toto";
      }
    },
    hideModal() {
      this.$refs["connection"].hide();
    },
    disconnect() {
      this.$emit("disconnect:user");
      (this.mail = ""), (this.password = ""), (this.user = null);
    },
  },
  computed: {
    isEmailCorrect() {
      return this.mail == "toto@yavmdb.com";
    },
    isPasswordCorrect() {
      return this.password == "123456789";
    },
    isFormValid() {
      return this.isEmailCorrect && this.isPasswordCorrect;
    },
  },
};
</script>

<style scoped>
#navbar {
  background-color: #005aa3 !important;
  padding: 15px;
}
.error-input {
  background-color: rgb(255, 170, 170) !important;
}
.error-text {
  color: red;
}
</style>
