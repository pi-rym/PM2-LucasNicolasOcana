const { getMovies } = require("../services/moviesServices");

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
};
