const renderCards = require("../scripts/renderCards");
const axios = require("axios");

axios
  .get("http://localhost:3000/movies")
  .then((response) => {
    console.log("Respuesta exitosa:", response.data);
    renderCards(response.data);
  })
  .catch((error) => {
    console.error("Error al realizar la petición:", error);
  });
