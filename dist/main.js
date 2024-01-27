/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getCoordinates.js":
/*!*******************************!*\
  !*** ./src/getCoordinates.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCoordinates)\n/* harmony export */ });\nfunction getCoordinates() {\n  const startX = Math.floor(Math.random() * 8) + 0;\n  const startY = Math.floor(Math.random() * 8) + 0;\n  const startPoint = [startX, startY];\n\n  let endX = Math.floor(Math.random() * 8) + 0;\n  let endY = Math.floor(Math.random() * 8) + 0;\n  let endPoint = [endX, endY];\n \n  // if startPoint==endPoint , generate new endPoint\n  while ( JSON.stringify(startPoint)==JSON.stringify(endPoint) ) {\n    endX = Math.floor(Math.random() * 8) + 0;\n    endY = Math.floor(Math.random() * 8) + 0;\n    endPoint = [endX, endY];\n  }\n\n  return [startPoint, endPoint];\n}\n\n//# sourceURL=webpack://knight_travails/./src/getCoordinates.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getCoordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCoordinates */ \"./src/getCoordinates.js\");\n/* harmony import */ var _knight_moves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight_moves */ \"./src/knight_moves.js\");\n\n\n\n(0,_knight_moves__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_getCoordinates__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n\n//# sourceURL=webpack://knight_travails/./src/index.js?");

/***/ }),

/***/ "./src/knight_moves.js":
/*!*****************************!*\
  !*** ./src/knight_moves.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ knightMoves)\n/* harmony export */ });\n\nfunction knightMoves(coordinates) {\n  const startPoint = coordinates[0];\n  const endPoint = coordinates[1]\n  console.log(startPoint);\n  console.log(endPoint);\n}\n\n//# sourceURL=webpack://knight_travails/./src/knight_moves.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;