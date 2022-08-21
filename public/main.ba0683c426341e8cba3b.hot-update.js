"use strict";
self["webpackHotUpdatemyproject"]("main",{

/***/ "./app/components/Experience/World/index.js":
/*!**************************************************!*\
  !*** ./app/components/Experience/World/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Environment */ "./app/components/Experience/World/Environment.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/LoadManaging'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




class World {
  constructor() {
    this.experiece = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.loaders = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/LoadManaging'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    this.scene = this.experiece.scene;
    this.createObjects();
    this.environment = new _Environment__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  createObjects() {
    this.gltfLoader.load('models/legos.glb', gltf => {
      const legoPieceTop = gltf.scene.children.find(child => child.name === 'Lego_model_top');
      legoPieceTop.scale.set(0.2, 0.2, 0.2);
      this.scene.add(legoPieceTop);
    });
    this.gltfLoader.load('models/legos.glb', gltf => {
      const legoPieceBottom = gltf.scene.children.find(child => child.name === 'Lego_model_bottom');
      legoPieceBottom.scale.set(0.2, 0.2, 0.2);
      legoPieceBottom.position.set(0, -0.15, 0);
      this.scene.add(legoPieceBottom);
    });
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c0ca7a9b585383c0746")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYTA2ODNjNDI2MzQxZThjYmEzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLE1BQU1JLEtBQU4sQ0FBWTtBQUN6QkMsRUFBQUEsV0FBVyxHQUFJO0FBQ2IsU0FBS0MsU0FBTCxHQUFpQixJQUFJTCx5Q0FBSixFQUFqQjtBQUNBLFNBQUtNLE9BQUwsR0FBZSxJQUFJSixvSkFBSixFQUFmO0FBRUEsU0FBS0ssS0FBTCxHQUFhLEtBQUtGLFNBQUwsQ0FBZUUsS0FBNUI7QUFFQSxTQUFLQyxhQUFMO0FBRUEsU0FBS0MsV0FBTCxHQUFtQixJQUFJUixvREFBSixFQUFuQjtBQUNEOztBQUVETyxFQUFBQSxhQUFhLEdBQUk7QUFDZixTQUFLRSxVQUFMLENBQWdCQyxJQUFoQixDQUNFLGtCQURGLEVBRUdDLElBQUQsSUFBVTtBQUNSLFlBQU1DLFlBQVksR0FBR0QsSUFBSSxDQUFDTCxLQUFMLENBQVdPLFFBQVgsQ0FBb0JDLElBQXBCLENBQTBCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBTixLQUFlLGdCQUFuRCxDQUFyQjtBQUNBSixNQUFBQSxZQUFZLENBQUNLLEtBQWIsQ0FBbUJDLEdBQW5CLENBQXVCLEdBQXZCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDO0FBQ0EsV0FBS1osS0FBTCxDQUFXYSxHQUFYLENBQWVQLFlBQWY7QUFDRCxLQU5IO0FBU0EsU0FBS0gsVUFBTCxDQUFnQkMsSUFBaEIsQ0FDRSxrQkFERixFQUVHQyxJQUFELElBQVU7QUFDUixZQUFNUyxlQUFlLEdBQUdULElBQUksQ0FBQ0wsS0FBTCxDQUFXTyxRQUFYLENBQW9CQyxJQUFwQixDQUEwQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQU4sS0FBZSxtQkFBbkQsQ0FBeEI7QUFDQUksTUFBQUEsZUFBZSxDQUFDSCxLQUFoQixDQUFzQkMsR0FBdEIsQ0FBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEM7QUFDQUUsTUFBQUEsZUFBZSxDQUFDQyxRQUFoQixDQUF5QkgsR0FBekIsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBQyxJQUFqQyxFQUF1QyxDQUF2QztBQUNBLFdBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFlQyxlQUFmO0FBQ0QsS0FQSDtBQVNEOztBQS9Cd0I7Ozs7Ozs7O1VDTjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwcm9qZWN0Ly4vYXBwL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9Xb3JsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9teXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLidcbmltcG9ydCBFbnZpcm9ubWVudCBmcm9tICcuL0Vudmlyb25tZW50J1xuaW1wb3J0IExvYWRlcnMgZnJvbSAnLi4vdXRpbHMvTG9hZE1hbmFnaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmV4cGVyaWVjZSA9IG5ldyBFeHBlcmllbmNlKClcbiAgICB0aGlzLmxvYWRlcnMgPSBuZXcgTG9hZGVycygpXG5cbiAgICB0aGlzLnNjZW5lID0gdGhpcy5leHBlcmllY2Uuc2NlbmVcblxuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpXG5cbiAgICB0aGlzLmVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KClcbiAgfVxuXG4gIGNyZWF0ZU9iamVjdHMgKCkge1xuICAgIHRoaXMuZ2x0ZkxvYWRlci5sb2FkKFxuICAgICAgJ21vZGVscy9sZWdvcy5nbGInLFxuICAgICAgKGdsdGYpID0+IHtcbiAgICAgICAgY29uc3QgbGVnb1BpZWNlVG9wID0gZ2x0Zi5zY2VuZS5jaGlsZHJlbi5maW5kKChjaGlsZCkgPT4gY2hpbGQubmFtZSA9PT0gJ0xlZ29fbW9kZWxfdG9wJylcbiAgICAgICAgbGVnb1BpZWNlVG9wLnNjYWxlLnNldCgwLjIsIDAuMiwgMC4yKVxuICAgICAgICB0aGlzLnNjZW5lLmFkZChsZWdvUGllY2VUb3ApXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5nbHRmTG9hZGVyLmxvYWQoXG4gICAgICAnbW9kZWxzL2xlZ29zLmdsYicsXG4gICAgICAoZ2x0ZikgPT4ge1xuICAgICAgICBjb25zdCBsZWdvUGllY2VCb3R0b20gPSBnbHRmLnNjZW5lLmNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiBjaGlsZC5uYW1lID09PSAnTGVnb19tb2RlbF9ib3R0b20nKVxuICAgICAgICBsZWdvUGllY2VCb3R0b20uc2NhbGUuc2V0KDAuMiwgMC4yLCAwLjIpXG4gICAgICAgIGxlZ29QaWVjZUJvdHRvbS5wb3NpdGlvbi5zZXQoMCwgLTAuMTUsIDApXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxlZ29QaWVjZUJvdHRvbSlcbiAgICAgIH1cbiAgICApXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNjMGNhN2E5YjU4NTM4M2MwNzQ2XCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwiRXhwZXJpZW5jZSIsIkVudmlyb25tZW50IiwiTG9hZGVycyIsIldvcmxkIiwiY29uc3RydWN0b3IiLCJleHBlcmllY2UiLCJsb2FkZXJzIiwic2NlbmUiLCJjcmVhdGVPYmplY3RzIiwiZW52aXJvbm1lbnQiLCJnbHRmTG9hZGVyIiwibG9hZCIsImdsdGYiLCJsZWdvUGllY2VUb3AiLCJjaGlsZHJlbiIsImZpbmQiLCJjaGlsZCIsIm5hbWUiLCJzY2FsZSIsInNldCIsImFkZCIsImxlZ29QaWVjZUJvdHRvbSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==