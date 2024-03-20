const renderCards = require("../scripts/renderCards");
const axios = require("axios");
const {
  clearFormInputs,
  handleSubmitForm,
} = require("../scripts/createMovieForms");

axios
  .get("http://localhost:3000/movies")
  .then((response) => {
    console.log("Respuesta exitosa:", response.data);
    renderCards(response.data);
  })
  .catch((error) => {
    console.error("Error al realizar la petición:", error);
  });

document
  .getElementById("movieForm")
  .addEventListener("submit", handleSubmitForm);
document
  .getElementById("clearButton")
  .addEventListener("click", clearFormInputs);
