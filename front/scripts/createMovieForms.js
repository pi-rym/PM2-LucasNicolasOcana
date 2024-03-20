const axios = require("axios");

function clearFormInputs() {
  const form = document.getElementById("movieForm");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = "";
  });
}

function submitForm(movieData) {
  axios
    .post("http://localhost:3000/movies", movieData)
    .then((response) => {
      console.log("Película creada exitosamente:", response.data);
    })
    .catch((error) => {
      console.error("Error al crear la película:", error);
    });
}

function handleSubmitForm(event) {
  event.preventDefault();

  const form = document.getElementById("movieForm");
  const inputs = form.querySelectorAll("input");

  let allFieldsFilled = true;
  const movieData = {};

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFieldsFilled = false;
    } else {
      movieData[input.name] = input.value;
    }
  });

  if (allFieldsFilled) {
    submitForm(movieData);
  } else {
    console.log("Por favor, completa todos los campos.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const movieForm = document.getElementById("movieForm");

  movieForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const year = document.getElementById("year").value.trim();
    const director = document.getElementById("director").value.trim();
    const rate = document.getElementById("rate").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const poster = document.getElementById("poster").value.trim();
    const duration = document.getElementById("duration").value.trim();

    if (
      !title ||
      !year ||
      !director ||
      !rate ||
      !genre ||
      !poster ||
      !duration
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  });
});

module.exports = { clearFormInputs, handleSubmitForm };
