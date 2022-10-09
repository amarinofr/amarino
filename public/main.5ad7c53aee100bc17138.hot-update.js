"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Canvas/components/Camera.js":
/*!****************************************************!*\
  !*** ./app/components/Canvas/components/Camera.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Canvas/index.js");


class Camera {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.world = this.experience.world;
    this.object = this.scene.children;
    this.createCamera();
  }

  createCamera() {
    this.aspect = this.sizes.width / this.sizes.height;
    this.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(50, this.aspect, 0.1, 100);
    this.camera.position.set(0, 0, 5);
    this.scene.add(this.camera);
  }

  addEventListeners() {}

  onResize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }

  update() {}

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2649c470b62b6ba01fa2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5ad7c53aee100bc17138.hot-update.js.map