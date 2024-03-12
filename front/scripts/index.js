const renderCards = require("../scripts/renderCards");
const axios = require("axios");

axios
  .get("https://students-api.up.railway.app/movies")
  .then((response) => {
    console.log("Respuesta exitosa:", response.data);
    renderCards(response.data);
  })
  .catch((error) => {
    console.error("Error al realizar la petición:", error);
  });
