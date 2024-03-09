const moviesContainer = document.getElementById("movies-container");

const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.classList.add("card-title");
    title.innerHTML = movie.title;

    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.innerHTML = `Year: ${movie.year} <br>
    Director: ${movie.director} <br>
    Duration: ${movie.duration} <br>
    Genre: ${movie.genre} <br>
    Rate: ${movie.rate}`;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);

    moviesContainer.appendChild(card);
  });
};

module.exports = renderCards;
