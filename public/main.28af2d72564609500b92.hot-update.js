"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/utils/Loaders.js":
/*!****************************************************!*\
  !*** ./app/components/Experience/utils/Loaders.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loaders)
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./app/components/Experience/utils/EventEmitter.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader */ "./node_modules/three/examples/jsm/loaders/DRACOLoader.js");



class Loaders extends _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.createLoaders();
  }

  createLoaders() {
    this.dracoLoader = new three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_2__.DRACOLoader();
    this.dracoLoader.setDecoderPath('/draco/');
    this.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7f019f6385d6bd3805d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.28af2d72564609500b92.hot-update.js.map