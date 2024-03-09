(() => {
  var e = {
      989: (e) => {
        const t = document.getElementById("movies-container");
        e.exports = (e) => {
          e.forEach((e) => {
            const r = document.createElement("div");
            r.classList.add("card");
            const n = document.createElement("h3");
            n.classList.add("card-title"), (n.innerHTML = e.title);
            const a = document.createElement("img");
            a.classList.add("card-image"), (a.src = e.poster);
            const d = document.createElement("p");
            d.classList.add("card-text"),
              (d.innerHTML = `Year: ${e.year} <br>\n    Director: ${e.director} <br>\n    Duration: ${e.duration} <br>\n    Genre: ${e.genre} <br>\n    Rate: ${e.rate}`),
              r.appendChild(a),
              r.appendChild(n),
              r.appendChild(d),
              t.appendChild(r);
          });
        };
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var d = (t[n] = { exports: {} });
    return e[n](d, d.exports, r), d.exports;
  }
  (() => {
    const e = r(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", (t, r) => {
      e(t);
    });
  })();
})();
