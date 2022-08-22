"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/index.js":
/*!********************************************!*\
  !*** ./app/components/Experience/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_Sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Sizes */ "./app/components/Experience/utils/Sizes.js");
/* harmony import */ var _utils_Time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Time */ "./app/components/Experience/utils/Time.js");
/* harmony import */ var _utils_Debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Debug */ "./app/components/Experience/utils/Debug.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '.utils/Resources'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Camera */ "./app/components/Experience/components/Camera.js");
/* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Renderer */ "./app/components/Experience/components/Renderer.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./World */ "./app/components/Experience/World/index.js");







 // import { Vector3 } from 'three'

let instance = null;
class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    this.canvas = canvas;
    this.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();
    this.debug = new _utils_Debug__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.sizes = new _utils_Sizes__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.time = new _utils_Time__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.camera = new _components_Camera__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.renderer = new _components_Renderer__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.world = new _World__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.cursor = {
      x: 0,
      y: 0
    };
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('mousemove', moved => {
      this.cursor.x = moved.clientX / this.sizes.width;
      this.cursor.y = -(moved.clientY / this.sizes.height);
    }); // console.log(this.world.legos)
  }

  onResize() {
    // Update sizes
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight; // Update camera

    this.camera.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.camera.updateProjectionMatrix(); // // Update renderer

    this.renderer.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  update() {
    const currentTime = Date.now();
    this.delta = currentTime - this.time.current;
    this.time.current = currentTime;
    this.time.elapsed = this.time.current - this.time.start; // Camera Movement

    this.camera.camera.position.x = this.cursor.x * 0.5;
    this.camera.camera.position.y = this.cursor.y * 0.25; // Render

    this.renderer.renderer.render(this.scene, this.camera.camera);
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5f5e0f09ea631f5c2f3d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5ee6b04870969ee6e96a.hot-update.js.map