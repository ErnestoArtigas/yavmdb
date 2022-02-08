export class Movie {
  constructor(id, title, poster, releaseDate, average, language) {
    this.id = id;
    this.title = title;
    this.poster = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster}`;
    this.releaseDate = releaseDate;
    this.average = average;
    this.language = language;
  }
}
