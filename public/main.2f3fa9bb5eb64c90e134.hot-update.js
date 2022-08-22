"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/World/Environment.js":
/*!********************************************************!*\
  !*** ./app/components/Experience/World/Environment.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Environment)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");


class Environment {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Environment');
    }

    this.createDirectionalLight();
    this.createAmbientLight();
    this.createEnvironmentMap();
  }

  createDirectionalLight() {
    this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 0.6);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(1024, 1024);
    this.directionalLight.shadow.camera.far = 15;
    this.directionalLight.shadow.camera.left = -7;
    this.directionalLight.shadow.camera.top = 7;
    this.directionalLight.shadow.camera.right = 7;
    this.directionalLight.shadow.camera.bottom = -7;
    this.directionalLight.position.set(-5, 5, 0);
    this.scene.add(this.directionalLight);

    if (this.debug.active) {
      this.debugFolder.add(this.directionalLight.position, 'y').name('DirLig PosY').min(0).max(100).step(1);
      this.debugFolder.add(this.directionalLight.position, 'x').name('DirLig PosX').min(0).max(100).step(1);
      this.debugFolder.add(this.directionalLight.position, 'z').name('DirLig PosZ').min(0).max(100).step(1);
    }
  }

  createAmbientLight() {
    this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 0.8);
    this.scene.add(this.ambientLight);

    if (this.debug.active) {
      this.debugFolder.add(this.ambientLight.position, 'y').name('AmLight PosY').min(0).max(100).step(1);
      this.debugFolder.add(this.ambientLight.position, 'x').name('AmLight PosX').min(0).max(100).step(1);
      this.debugFolder.add(this.ambientLight.position, 'z').name('AmLight PosZ').min(0).max(100).step(1);
      this.debugFolder.add(this.ambientLight, 'intensity').name('AmLight Intensity').min(0).max(2).step(0.001);
    }
  }

  createEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 1;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = three__WEBPACK_IMPORTED_MODULE_1__.sRGBEncoding;
    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse(child => {
        if (child instanceof three__WEBPACK_IMPORTED_MODULE_1__.Mesh && child.material instanceof three__WEBPACK_IMPORTED_MODULE_1__.MeshStandardMaterial) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9fa16bb047b8bfaf624a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2f3fa9bb5eb64c90e134.hot-update.js.map