// moviesServices.js

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

const createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    await newMovie.save();
    return newMovie;
  } catch (error) {
    console.error("Error creating movie:", error);
    throw error;
  }
};

module.exports = { getMovies, createMovie };
