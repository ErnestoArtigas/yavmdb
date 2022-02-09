export class MovieDetailed {
  constructor(
    id,
    title,
    poster,
    releaseDate,
    average,
    overview,
    genres,
    language
  ) {
    this.id = id;
    this.title = title;
    this.poster =
      poster == null
        ? require("@/assets/poster.png")
        : `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`;
    this.releaseDate = releaseDate == "" ? "Date Unknown" : releaseDate;
    this.overview = overview;
    this.genres = genres;
    this.average = average;
    this.language = language;
  }
}
