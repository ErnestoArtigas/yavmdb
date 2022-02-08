<template>
  <div class="home">
    <b-row class="mb-5">
      <b-col>
        <h1>YAVMDB</h1>
        <h2>Yet Another VueJS Movie Data Base</h2>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col cols="4" class="logos">
        <b-img src="@/assets/githubLogo.svg" fluid-grow style=""></b-img>
      </b-col>
      <b-col cols="4" class="logos">
        <b-img src="@/assets/tmdbLogo.svg" fluid-grow></b-img>
      </b-col>
      <b-col cols="4" class="logos">
        <b-img src="@/assets/bootstrapVueLogo.svg" fluid-grow></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  font-size: 6rem;
}
h2 {
  font-size: 2.5rem;
}
.logos {
  width: 20%;
}
</style>
