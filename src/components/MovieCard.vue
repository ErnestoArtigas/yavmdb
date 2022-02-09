<template>
  <router-link :to="url" style="text-decoration: none; color: inherit">
    <b-card :img-src="movie.poster" overlay :footer="localizedDate">
      <template #header>
        <b-card-title class="text-overflow">{{ movie.title }}</b-card-title>
      </template>
    </b-card>
  </router-link>
</template>

<script>
import { Movie } from "../utilities/Movie";

export default {
  name: "MovieCard",
  data() {
    return {
      url: "",
    };
  },
  props: {
    movie: {
      type: Movie,
      default: new Movie(),
    },
  },
  mounted() {
    this.url = `/movie/${this.movie.id}`;
  },
  computed: {
    localizedDate: function () {
      if (this.movie.releaseDate == "Date Unknown")
        return this.movie.releaseDate;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
