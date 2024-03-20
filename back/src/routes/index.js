// routes/index.js

const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const { validateMovieData } = require("../middleware/validationMiddleware");

const indexRouter = Router();

indexRouter.get("/movies", moviesController.getAllMovies);
indexRouter.post("/movies", validateMovieData, moviesController.createMovie);

module.exports = indexRouter;
