const renderCards = require("../scripts/renderCards");
const axios = require("axios");

axios
  .get("https://students-api.2.us-1.fl0.io/movies")
  .then((response) => {
    console.log("Respuesta exitosa:", response.data);
    renderCards(response.data);
  })
  .catch((error) => {
    console.error("Error al realizar la petición:", error);
  });
