/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderCards = __webpack_require__(/*! ../scripts/renderCards */ \"./scripts/renderCards.js\");\r\n\r\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (data, status) => {\r\n  renderCards(data);\r\n});\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const moviesContainer = document.getElementById(\"movies-container\");\r\n\r\nconst renderCards = (data) => {\r\n  data.forEach((movie) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const title = document.createElement(\"h3\");\r\n    title.classList.add(\"card-title\");\r\n    title.innerHTML = movie.title;\r\n\r\n    const poster = document.createElement(\"img\");\r\n    poster.classList.add(\"card-image\");\r\n    poster.src = movie.poster;\r\n\r\n    const year = document.createElement(\"p\");\r\n    year.classList.add(\"card-text\");\r\n    year.innerHTML = `Year: ${movie.year} <br>\r\n    Director: ${movie.director} <br>\r\n    Duration: ${movie.duration} <br>\r\n    Genre: ${movie.genre} <br>\r\n    Rate: ${movie.rate}`;\r\n\r\n    card.appendChild(poster);\r\n    card.appendChild(title);\r\n    card.appendChild(year);\r\n\r\n    moviesContainer.appendChild(card);\r\n  });\r\n};\r\n\r\nmodule.exports = renderCards;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;