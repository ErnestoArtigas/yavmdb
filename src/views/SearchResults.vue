<template>
  <div class="search-results">
    <h1>{{ searchQuery }}</h1>
    <b-card-group deck>
      <MovieCard
        v-for="movie in moviesArray"
        :key="movie.id"
        :movie="movie"
        style="margin-bottom: 15px"
      ></MovieCard>
    </b-card-group>
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
  watch: {
    $route(to) {
      this.searchQuery = to.params.query;
      tmdbControllerInstance
        .getMovieByName(this.searchQuery)
        .then((data) => {
          this.moviesArray = data;
          this.moviesArray.forEach((element) => {
            console.log(element.poster);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
