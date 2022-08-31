"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/World/Legos.js":
/*!**************************************************!*\
  !*** ./app/components/Experience/World/Legos.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Legos)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");



class Legos {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resource = this.resources.items.legoPieces;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos');
    }

    this.createObjects();
  }

  createObjects() {
    this.model = this.resource.scene;
    this.model.scale.set(1.5, 1.5, 1.5);
    this.model.rotation.set(0.25, 0, 0);
    this.scene.add(this.model); // console.log(this.model.children[0])

    this.top = this.model.children[1];
    this.bottom = this.model.children[0];
    console.log(this.top);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].fromTo(this.top.position, 0.5, {
      y: 0.15,
      duration: 1
    }, {
      y: 0.25,
      duration: 1,
      yoyo: true,
      delay: 2,
      repeat: -1
    }, 5);
    this.model.traverse(child => {
      if (child instanceof three__WEBPACK_IMPORTED_MODULE_2__.Mesh) {
        child.castShadow = true;
      }
    });
  }

  update() {}

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2633b376489ca1f346be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.abe064bb0080a50c1959.hot-update.js.map