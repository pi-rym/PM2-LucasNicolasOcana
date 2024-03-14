// movieService.js
const axios = require("axios");
class Movie {
  constructor({ title, poster, director, year, duration, genre, rate }) {
    if (
      !title ||
      !poster ||
      !director ||
      !year ||
      !duration ||
      !genre ||
      !rate
    ) {
      throw new Error("Title, poster, and director are required.");
    }
    this.title = title;
    this.poster = poster;
    this.director = director;
    this.year = year;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
  }
}

const getMovies = async () => {
  try {
    const data = await axios.get("https://students-api.up.railway.app/movies");
    const dataMovie = data.data;
    return dataMovie.map((movie) => new Movie(movie));
  } catch (error) {
    console.error("Error al obtener las películas", error);
  }
};

module.exports = { Movie, getMovies };
