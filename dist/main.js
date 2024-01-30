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

/***/ "./src/board_node_class.js":
/*!*********************************!*\
  !*** ./src/board_node_class.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardNode)\n/* harmony export */ });\nclass BoardNode {\n  constructor (position, path) {\n    \n    this.path = path\n    this.position = position;\n\n    this.positionX = position[0];\n    this.positionY = position[1];\n\n    this.topLeft = coordinatesValidation([this.positionX-1, this.positionY+2]);\n    this.topRight = coordinatesValidation([this.positionX+1, this.positionY+2]);\n\n    this.rightTop = coordinatesValidation([this.positionX+2, this.positionY+1]);\n    this.rightBottom = coordinatesValidation([this.positionX+2, this.positionY-1]);\n\n    this.bottomRight = coordinatesValidation([this.positionX+1, this.positionY-2]);\n    this.bottomLeft = coordinatesValidation([this.positionX-1, this.positionY-2]);\n    \n    this.leftBottom = coordinatesValidation([this.positionX-2, this.positionY-1]);\n    this.leftTop = coordinatesValidation([this.positionX-2, this.positionY+1]);\n\n    this.possibleDirections = [\n      this.topLeft, \n      this.topRight, \n      this.rightTop, \n      this.rightBottom,\n      this.bottomRight,\n      this.bottomLeft,\n      this.leftBottom,\n      this.leftTop\n    ].filter(n=>n); // filter to remove null values\n  };\n};\n\nfunction coordinatesValidation(coordinates) {\n  let x = coordinates[0];\n  let y = coordinates[1];\n  if(x<0 || x>7 || y<0 || y>7) return null;\n  return coordinates;\n};\n\n//# sourceURL=webpack://knight_travails/./src/board_node_class.js?");

/***/ }),

/***/ "./src/getCoordinates.js":
/*!*******************************!*\
  !*** ./src/getCoordinates.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCoordinates)\n/* harmony export */ });\nfunction getCoordinates() {\n  const startX = Math.floor(Math.random() * 8) + 0;\n  const startY = Math.floor(Math.random() * 8) + 0;\n  const startPoint = [startX, startY];\n\n  // for testing\n  // const startPoint = [3, 2]\n\n  let endX = Math.floor(Math.random() * 8) + 0;\n  let endY = Math.floor(Math.random() * 8) + 0;\n  let endPoint = [endX, endY];\n\n  // for testing\n  // let endPoint = [5, 1]\n \n  // if startPoint==endPoint , generate new endPoint\n  while ( JSON.stringify(startPoint)==JSON.stringify(endPoint) ) {\n    endX = Math.floor(Math.random() * 8) + 0;\n    endY = Math.floor(Math.random() * 8) + 0;\n    endPoint = [endX, endY];\n  }\n\n  return [startPoint, endPoint];\n}\n\n//# sourceURL=webpack://knight_travails/./src/getCoordinates.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ knightMoves)\n/* harmony export */ });\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ \"./src/queue.js\");\n/* harmony import */ var _board_node_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board_node_class */ \"./src/board_node_class.js\");\n\n\n\nfunction knightMoves(coordinates) {\n\n  const startPoint = coordinates[0];\n  const endPoint = coordinates[1];\n\n  console.log('StartPoint: ' + `[${startPoint}]`);\n  console.log('endPoint: ' + `[${endPoint}]`);\n\n  const treeRoot = new _board_node_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"](startPoint, [startPoint]);\n  // make a queue to go o\n  const levelOrderQueue = new _queue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  levelOrderQueue.enqueue(treeRoot);\n\n  while(!levelOrderQueue.isEmpty()) {\n    const position = levelOrderQueue.dequeue().value;\n\n    for (const direction of position.possibleDirections) {\n      const path = position.path.concat([direction]);\n      if (direction.toString()==endPoint.toString()) {\n        logPath(path);\n        return path;\n      } else {\n        levelOrderQueue.enqueue(new _board_node_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"](direction, path));\n      };\n    };\n  };\n\n};\n\nfunction logPath(path) {\n  console.log(`=> You made it in ${path.length} moves!  Here's your path:`);\n  path.forEach((step) => console.log(`[${step}]`));\n};\n\n//# sourceURL=webpack://knight_travails/./src/knight_moves.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nclass QueueNode {\n  constructor(value=null, next=null) {\n    this.value = value;\n    this.next = next;\n  };\n};\n\nclass Queue {\n  constructor () {\n    this.head = null;\n    this.length = 0;\n\n    this.enqueue = (value) => {\n      if (!this.head) {\n        this.head = new QueueNode(value);\n      } else {\n        let tempNode = this.head;\n        while(tempNode.next) { tempNode=tempNode.next; }\n        tempNode.next = new QueueNode(value);\n      };\n      this.length++;\n    };\n\n    this.dequeue = () => {\n      if (this.length==0) return undefined;\n      let dequeuedNode = this.head;\n      this.head = this.head.next;\n      this.length--;\n      return dequeuedNode;\n    };\n\n    this.peek = () => {\n      return this.head\n    };\n\n    this.isEmpty = () => {\n      return this.length==0 ? true : false;\n    };\n  };\n};\n\n\n\n//# sourceURL=webpack://knight_travails/./src/queue.js?");

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