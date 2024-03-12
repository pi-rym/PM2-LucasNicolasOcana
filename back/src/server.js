const express = require("express");

const moviesController = require("./moviesController");

const app = express();

app.get("/movies", moviesController);

module.exports = app;
