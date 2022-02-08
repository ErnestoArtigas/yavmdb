<template>
  <b-card :img-src="movie.poster" overlay>
    <b-card-title>{{ movie.title }}</b-card-title>
    <b-card-footer>{{ localizedDate }}</b-card-footer>
  </b-card>
</template>

<script>
import { Movie } from "../utilities/Movie";

export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Movie,
      default: new Movie(),
    },
  },
  computed: {
    localizedDate: function () {
      let date = new Date(this.movie.releaseDate);
      return date.toLocaleDateString(
        window.navigator.userLanguage || window.navigator.language,
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      );
    },
  },
};
</script>

<style>
.text-overflow {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
