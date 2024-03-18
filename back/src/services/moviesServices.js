const Movie = require("../models/movieModel");

const getMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

module.exports = { getMovies };
