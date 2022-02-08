import axios from "axios";
import { Movie } from "./Movie";

export class TMDBController {
  constructor() {
    this.apiKey = process.env.VUE_APP_AUTH_KEY_V3;
  }

  async getPopularMovieList() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=fr-FR`
        )
        .then((response) => {
          let movieArray = [];
          for (let i = 0; i < response.data.results.length; i++) {
            movieArray.push(
              new Movie(
                response.data.results[i].id,
                response.data.results[i].title,
                response.data.results[i].poster_path,
                response.data.results[i].release_date,
                response.data.results[i].vote_average,
                response.data.results[i].original_language
              )
            );
          }
          resolve(movieArray);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  async getMovieByName(movieTitle) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieTitle}&language=fr-FR`
        )
        .then((response) => {
          let movieArray = [];
          for (let i = 0; i < response.data.results.length; i++) {
            movieArray.push(
              new Movie(
                response.data.results[i].id,
                response.data.results[i].title,
                response.data.results[i].poster_path,
                response.data.results[i].release_date,
                response.data.results[i].vote_average,
                response.data.results[i].original_language
              )
            );
          }
          resolve(movieArray);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
}
