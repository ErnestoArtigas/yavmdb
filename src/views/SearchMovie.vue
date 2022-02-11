<template>
  <div>
    <div :style="style"></div>
    <b-card
      no-body
      class="overflow-hidden"
      style="text-align: justify; padding-right: 2.5rem"
    >
      <b-row no-gutters>
        <b-col cols="5">
          <b-card-img
            :src="movie.poster"
            class="rounded-0"
            style="height: 100%; object-fit: cover"
            fluid
          ></b-card-img>
        </b-col>
        <b-col cols="7">
          <b-card-body>
            <a :href="url">
              <b-card-title
                style="font-size: 2.5rem; text-align: center"
                class="mb-4"
                >{{ movie.title }}</b-card-title
              >
            </a>
            <b-card-text style="font-size: 1.2rem" class="mb-5">{{
              movie.overview
            }}</b-card-text>
            <b-card-text style="font-size: 1.1rem" class="mb-5">{{
              genres
            }}</b-card-text>

            <div>
              <b-form-rating v-model="ratingValue" class="mb-4"></b-form-rating>
            </div>

            <b-card-sub-title>{{ localizedDate }}</b-card-sub-title>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { MovieDetailed } from "@/utilities/MovieDetailed";
import { TMDBController } from "@/utilities/TMDBController";

const tmdbControllerInstance = new TMDBController();

export default {
  name: "SearchMovie",
  data() {
    return {
      movie: new MovieDetailed(),
      ratingValue: 0,
    };
  },
  mounted() {
    tmdbControllerInstance
      .getMovieById(this.$route.params.id)
      .then((data) => {
        this.movie = data;
      })
      .catch(() => {
        null;
      });
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
    // Creation of a try catch just to avoid getting a TypeError when the page loads.
    genres: function () {
      let numberOfGenre = "",
        genres = "";
      try {
        numberOfGenre = this.movie.genres.length > 1 ? "Genres" : "Genre";
        // Ternary if to only get the commas between genres.
        for (let i = 0; i < this.movie.genres.length; i++) {
          genres +=
            i != this.movie.genres.length - 1
              ? `${this.movie.genres[i].name}, `
              : this.movie.genres[i].name;
        }
        genres = this.movie.genres.length != 0 ? genres : "Aucun";
      } catch (error) {
        null;
      }
      return `${numberOfGenre} : ${genres}`;
    },
    url: function () {
      return `https://www.themoviedb.org/movie/${this.movie.id}`;
    },
  },
  watch: {
    ratingValue: function (newValue) {
      alert(
        `Vous avez voté ${newValue} ${newValue != 1 ? "étoiles" : "étoile"}.`
      );
    },
  },
};
</script>

<style></style>
