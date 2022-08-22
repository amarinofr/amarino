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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");
/* harmony import */ var _utils_Loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Loaders */ "./app/components/Experience/utils/Loaders.js");


class Legos {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.loaders = new _utils_Loaders__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.scene = this.experience.scene;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos');
    }

    this.createObjects();
  }

  createObjects() {
    let obj = null;
    this.loaders.gltfLoader.load('models/legos.glb', gltf => {
      obj = gltf.scene;
      obj.scale.set(0.2, 0.2, 0.2);
      this.scene.add(obj);
    }); // this.loaders.gltfLoader.load(
    //   'models/legos.glb',
    //   (gltf) => {
    //     const legoPieceBottom = gltf.scene.children.find((child) => child.name === 'Lego_model_bottom')
    //     legoPieceBottom.scale.set(0.2, 0.2, 0.2)
    //     legoPieceBottom.position.set(0, -0.15, 0)
    //     this.scene.add(legoPieceBottom)
    //   }
    // )
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("480f6cb4f317d340f0d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYzUyODBkZDkzNjc3M2YyOWUyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNRSxLQUFOLENBQVk7QUFDekJDLEVBQUFBLFdBQVcsR0FBSTtBQUNiLFNBQUtDLFVBQUwsR0FBa0IsSUFBSUoseUNBQUosRUFBbEI7QUFDQSxTQUFLSyxPQUFMLEdBQWUsSUFBSUosc0RBQUosRUFBZjtBQUVBLFNBQUtLLEtBQUwsR0FBYSxLQUFLRixVQUFMLENBQWdCRSxLQUE3QjtBQUVBLFNBQUtDLEtBQUwsR0FBYSxLQUFLSCxVQUFMLENBQWdCRyxLQUE3Qjs7QUFFQSxRQUFJLEtBQUtBLEtBQUwsQ0FBV0MsTUFBZixFQUF1QjtBQUNyQixXQUFLQyxXQUFMLEdBQW1CLEtBQUtGLEtBQUwsQ0FBV0csRUFBWCxDQUFjQyxTQUFkLENBQXdCLE9BQXhCLENBQW5CO0FBQ0Q7O0FBRUQsU0FBS0MsYUFBTDtBQUNEOztBQUVEQSxFQUFBQSxhQUFhLEdBQUk7QUFDZixRQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUVBLFNBQUtSLE9BQUwsQ0FBYVMsVUFBYixDQUF3QkMsSUFBeEIsQ0FDRSxrQkFERixFQUVHQyxJQUFELElBQVU7QUFDUkgsTUFBQUEsR0FBRyxHQUFHRyxJQUFJLENBQUNWLEtBQVg7QUFDQU8sTUFBQUEsR0FBRyxDQUFDSSxLQUFKLENBQVVDLEdBQVYsQ0FBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLEdBQXhCO0FBQ0EsV0FBS1osS0FBTCxDQUFXYSxHQUFYLENBQWVOLEdBQWY7QUFDRCxLQU5ILEVBSGUsQ0FZZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFyQ3dCOzs7Ozs7OztVQ0gzQiIsInNvdXJjZXMiOlsid2VicGFjazovL215cHJvamVjdC8uL2FwcC9jb21wb25lbnRzL0V4cGVyaWVuY2UvV29ybGQvTGVnb3MuanMiLCJ3ZWJwYWNrOi8vbXlwcm9qZWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwZXJpZW5jZSBmcm9tICcuLidcbmltcG9ydCBMb2FkZXJzIGZyb20gJy4uL3V0aWxzL0xvYWRlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ29zIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuZXhwZXJpZW5jZSA9IG5ldyBFeHBlcmllbmNlKClcbiAgICB0aGlzLmxvYWRlcnMgPSBuZXcgTG9hZGVycygpXG5cbiAgICB0aGlzLnNjZW5lID0gdGhpcy5leHBlcmllbmNlLnNjZW5lXG5cbiAgICB0aGlzLmRlYnVnID0gdGhpcy5leHBlcmllbmNlLmRlYnVnXG5cbiAgICBpZiAodGhpcy5kZWJ1Zy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuZGVidWdGb2xkZXIgPSB0aGlzLmRlYnVnLnVpLmFkZEZvbGRlcignTGVnb3MnKVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlT2JqZWN0cygpXG4gIH1cblxuICBjcmVhdGVPYmplY3RzICgpIHtcbiAgICBsZXQgb2JqID0gbnVsbFxuXG4gICAgdGhpcy5sb2FkZXJzLmdsdGZMb2FkZXIubG9hZChcbiAgICAgICdtb2RlbHMvbGVnb3MuZ2xiJyxcbiAgICAgIChnbHRmKSA9PiB7XG4gICAgICAgIG9iaiA9IGdsdGYuc2NlbmVcbiAgICAgICAgb2JqLnNjYWxlLnNldCgwLjIsIDAuMiwgMC4yKVxuICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmopXG4gICAgICB9XG4gICAgKVxuXG4gICAgLy8gdGhpcy5sb2FkZXJzLmdsdGZMb2FkZXIubG9hZChcbiAgICAvLyAgICdtb2RlbHMvbGVnb3MuZ2xiJyxcbiAgICAvLyAgIChnbHRmKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGxlZ29QaWVjZUJvdHRvbSA9IGdsdGYuc2NlbmUuY2hpbGRyZW4uZmluZCgoY2hpbGQpID0+IGNoaWxkLm5hbWUgPT09ICdMZWdvX21vZGVsX2JvdHRvbScpXG4gICAgLy8gICAgIGxlZ29QaWVjZUJvdHRvbS5zY2FsZS5zZXQoMC4yLCAwLjIsIDAuMilcbiAgICAvLyAgICAgbGVnb1BpZWNlQm90dG9tLnBvc2l0aW9uLnNldCgwLCAtMC4xNSwgMClcbiAgICAvLyAgICAgdGhpcy5zY2VuZS5hZGQobGVnb1BpZWNlQm90dG9tKVxuICAgIC8vICAgfVxuICAgIC8vIClcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDgwZjZjYjRmMzE3ZDM0MGYwZDhcIikiXSwibmFtZXMiOlsiRXhwZXJpZW5jZSIsIkxvYWRlcnMiLCJMZWdvcyIsImNvbnN0cnVjdG9yIiwiZXhwZXJpZW5jZSIsImxvYWRlcnMiLCJzY2VuZSIsImRlYnVnIiwiYWN0aXZlIiwiZGVidWdGb2xkZXIiLCJ1aSIsImFkZEZvbGRlciIsImNyZWF0ZU9iamVjdHMiLCJvYmoiLCJnbHRmTG9hZGVyIiwibG9hZCIsImdsdGYiLCJzY2FsZSIsInNldCIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=