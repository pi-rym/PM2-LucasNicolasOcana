const validateMovieData = (req, res, next) => {
  const data = req.body;

  const requiredFields = [
    "title",
    "poster",
    "director",
    "year",
    "duration",
    "genre",
    "rate",
  ];
  const missingFields = requiredFields.filter((field) => !(field in data));

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Faltan los siguientes campos obligatorios: ${missingFields.join(
        ", "
      )}`,
    });
  }

  if (isNaN(data.year) || data.year.toString().length !== 4) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos" });
  }

  next();
};

module.exports = { validateMovieData };
