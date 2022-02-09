<template>
  <div class="search-results">
    <b-row class="mb-5">
      <h1>Recherche : {{ searchQuery }}</h1>

      <div class="grid">
        <MovieCard
          v-for="movie in moviesArray"
          :key="movie.id"
          :movie="movie"
          style="margin-bottom: 15px"
        ></MovieCard>
      </div>
    </b-row>
  </div>
</template>

<script>
import { TMDBController } from "@/utilities/TMDBController";
import MovieCard from "@/components/MovieCard.vue";

const tmdbControllerInstance = new TMDBController();

export default {
  name: "SearchResults",
  components: {
    MovieCard,
  },
  data() {
    return {
      searchQuery: "",
      moviesArray: [],
    };
  },
  mounted() {
    this.searchQuery = this.$route.params.query;
    tmdbControllerInstance
      .getMovieByName(this.searchQuery)
      .then((data) => {
        this.moviesArray = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.grid {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1.5rem;
}
.grid > * {
  width: 100%;
  max-width: 20rem;
}
</style>
