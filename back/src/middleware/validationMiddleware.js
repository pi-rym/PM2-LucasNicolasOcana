const validateMovieData = (req, res, next) => {
  const { title, director, year } = req.body;

  if (!title || !director || !year) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios: title, director, year",
    });
  }

  if (isNaN(year) || year.length !== 4) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos." });
  }

  next();
};

module.exports = { validateMovieData };
