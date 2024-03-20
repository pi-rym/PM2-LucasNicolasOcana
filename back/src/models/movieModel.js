const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster: { type: String, required: true },
  director: { type: String, required: true },
  year: { type: Number, required: true },
  duration: { type: String, required: true },
  genre: { type: Array, required: true },
  rate: { type: Number, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
