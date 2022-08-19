"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/components/Objects.js":
/*!*********************************************************!*\
  !*** ./app/components/Experience/components/Objects.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Objects)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader */ "./node_modules/three/examples/jsm/loaders/DRACOLoader.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./World */ "./app/components/Experience/components/World.js");




class Objects {
  constructor() {
    this.createLoaders();
    this.createObjects();
    this.createLights();
    this.world = new _World__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  createLoaders() {
    this.dracoLoader = new three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_1__.DRACOLoader();
    this.dracoLoader.setDecoderPath('/draco/');
    this.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader();
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
  }

  createObjects() {
    this.gltfLoader.load('models/legos.glb', gltf => {
      const legoPieceTop = gltf.scene.children.find(child => child.name === 'Lego_model_top');
      legoPieceTop.scale.set(0.2, 0.2, 0.2);
      this.world.world.add(legoPieceTop);
    });
    this.gltfLoader.load('models/legos.glb', gltf => {
      const legoPieceBottom = gltf.scene.children.find(child => child.name === 'Lego_model_bottom');
      legoPieceBottom.scale.set(0.2, 0.2, 0.2);
      legoPieceBottom.position.set(0, -0.15, 0);
      this.world.add(legoPieceBottom);
    });
  }

  createLights() {
    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.8);
    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xffffff, 0.6);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(-5, 5, 0);
    return ambientLight, directionalLight;
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("025f693a3266e5480cb0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUFBLGdCQUFnQixDQUFDRixRQUFqQixDQUEwQkgsR0FBMUIsQ0FBOEIsQ0FBQyxDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQztBQUVBLFdBQVFJLFlBQVksRUFBRUMsZ0JBQXRCO0FBQ0Q7O0FBcEQwQjs7Ozs7Ozs7VUNON0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXByb2plY3QvLi9hcHAvY29tcG9uZW50cy9FeHBlcmllbmNlL2NvbXBvbmVudHMvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9teXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFtYmllbnRMaWdodCwgRGlyZWN0aW9uYWxMaWdodCB9IGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXInXG5pbXBvcnQgeyBEUkFDT0xvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0RSQUNPTG9hZGVyJ1xuXG5pbXBvcnQgV29ybGQgZnJvbSAnLi9Xb3JsZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcnMoKVxuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpXG4gICAgdGhpcy5jcmVhdGVMaWdodHMoKVxuXG4gICAgdGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpXG4gIH1cblxuICBjcmVhdGVMb2FkZXJzICgpIHtcbiAgICB0aGlzLmRyYWNvTG9hZGVyID0gbmV3IERSQUNPTG9hZGVyKClcbiAgICB0aGlzLmRyYWNvTG9hZGVyLnNldERlY29kZXJQYXRoKCcvZHJhY28vJylcblxuICAgIHRoaXMuZ2x0ZkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKClcbiAgICB0aGlzLmdsdGZMb2FkZXIuc2V0RFJBQ09Mb2FkZXIodGhpcy5kcmFjb0xvYWRlcilcbiAgfVxuXG4gIGNyZWF0ZU9iamVjdHMgKCkge1xuICAgIHRoaXMuZ2x0ZkxvYWRlci5sb2FkKFxuICAgICAgJ21vZGVscy9sZWdvcy5nbGInLFxuICAgICAgKGdsdGYpID0+IHtcbiAgICAgICAgY29uc3QgbGVnb1BpZWNlVG9wID0gZ2x0Zi5zY2VuZS5jaGlsZHJlbi5maW5kKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gJ0xlZ29fbW9kZWxfdG9wJylcbiAgICAgICAgbGVnb1BpZWNlVG9wLnNjYWxlLnNldCgwLjIsIDAuMiwgMC4yKVxuICAgICAgICB0aGlzLndvcmxkLndvcmxkLmFkZChsZWdvUGllY2VUb3ApXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5nbHRmTG9hZGVyLmxvYWQoXG4gICAgICAnbW9kZWxzL2xlZ29zLmdsYicsXG4gICAgICAoZ2x0ZikgPT4ge1xuICAgICAgICBjb25zdCBsZWdvUGllY2VCb3R0b20gPSBnbHRmLnNjZW5lLmNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSAnTGVnb19tb2RlbF9ib3R0b20nKVxuICAgICAgICBsZWdvUGllY2VCb3R0b20uc2NhbGUuc2V0KDAuMiwgMC4yLCAwLjIpXG4gICAgICAgIGxlZ29QaWVjZUJvdHRvbS5wb3NpdGlvbi5zZXQoMCwgLTAuMTUsIDApXG4gICAgICAgIHRoaXMud29ybGQuYWRkKGxlZ29QaWVjZUJvdHRvbSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjcmVhdGVMaWdodHMgKCkge1xuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBBbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuOClcblxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMC42KVxuICAgIGRpcmVjdGlvbmFsTGlnaHQuY2FzdFNoYWRvdyA9IHRydWVcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXBTaXplLnNldCgxMDI0LCAxMDI0KVxuICAgIGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSAxNVxuICAgIGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5sZWZ0ID0gLTdcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gN1xuICAgIGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5yaWdodCA9IDdcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEuYm90dG9tID0gLTdcbiAgICBkaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgtNSwgNSwgMClcblxuICAgIHJldHVybiAoYW1iaWVudExpZ2h0LCBkaXJlY3Rpb25hbExpZ2h0KVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMjVmNjkzYTMyNjZlNTQ4MGNiMFwiKSJdLCJuYW1lcyI6WyJBbWJpZW50TGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiR0xURkxvYWRlciIsIkRSQUNPTG9hZGVyIiwiV29ybGQiLCJPYmplY3RzIiwiY29uc3RydWN0b3IiLCJjcmVhdGVMb2FkZXJzIiwiY3JlYXRlT2JqZWN0cyIsImNyZWF0ZUxpZ2h0cyIsIndvcmxkIiwiZHJhY29Mb2FkZXIiLCJzZXREZWNvZGVyUGF0aCIsImdsdGZMb2FkZXIiLCJzZXREUkFDT0xvYWRlciIsImxvYWQiLCJnbHRmIiwibGVnb1BpZWNlVG9wIiwic2NlbmUiLCJjaGlsZHJlbiIsImZpbmQiLCJjaGlsZCIsIm5hbWUiLCJzY2FsZSIsInNldCIsImFkZCIsImxlZ29QaWVjZUJvdHRvbSIsInBvc2l0aW9uIiwiYW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJtYXBTaXplIiwiY2FtZXJhIiwiZmFyIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==