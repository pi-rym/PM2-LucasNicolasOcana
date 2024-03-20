// middleware/validationMiddleware.js

const validateMovieData = (req, res, next) => {
  const { title, director, year } = req.body;

  // Verificar si todos los campos obligatorios están presentes en el cuerpo de la solicitud
  if (!title || !director || !year) {
    return res
      .status(400)
      .json({
        error: "Todos los campos son obligatorios: title, director, year",
      });
  }

  // Verificar si el año es un número de 4 dígitos
  if (isNaN(year) || year.length !== 4) {
    return res
      .status(400)
      .json({ error: "El año debe ser un número de 4 dígitos." });
  }

  // Si todos los datos necesarios están presentes y el año es válido, pasar al siguiente middleware o al controlador
  next();
};

module.exports = { validateMovieData };
