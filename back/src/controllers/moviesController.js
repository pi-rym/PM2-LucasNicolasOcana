const { getMovies, createMovie } = require("../services/moviesServices");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createMovie: async (req, res) => {
    try {
      const movieData = req.body;
      const newMovie = await createMovie(movieData);
      res
        .status(201)
        .json({ message: "Movie created successfully", movie: newMovie });
    } catch (error) {
      console.error("Error creating movie:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
