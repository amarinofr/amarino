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
/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-gui */ "./node_modules/lil-gui/dist/lil-gui.esm.js");
/* harmony import */ var _utils_Sizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/Sizes */ "./app/components/Experience/utils/Sizes.js");
/* harmony import */ var _utils_Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Time */ "./app/components/Experience/utils/Time.js");
/* harmony import */ var _components_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Camera */ "./app/components/Experience/components/Camera.js");
/* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Renderer */ "./app/components/Experience/components/Renderer.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './World/World'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_Objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Objects */ "./app/components/Experience/components/Objects.js");








let instance = null;
class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    this.canvas = canvas;
    this.sizes = new _utils_Sizes__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.time = new _utils_Time__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();
    this.camera = new _components_Camera__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.renderer = new _components_Renderer__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.world = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './World/World'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    console.log(this.renderer); // this.gui = new GUI()
    // this.objects = new Objects()

    this.setup();
    this.addEventListeners();
  }

  setup() {// this.world.world.add(this.camera.camera)
  }

  addEventListeners(moved) {// moved = window.addEventListener('mousemove', event => {
    //   this.cursorY = event.clientY / this.sizes.height
    //   this.cursorX = -(event.clientX / this.sizes.width - 0.5)
    // })
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
    this.time.elapsed = this.time.current - this.time.start;
    this.camera.controls.update(); // Camera Movement
    // this.camera.camera.position.x = this.cursorX * 0.5
    // this.camera.camera.position.y = this.cursorY * 0.5
    // this.camera.lookAt(new Vector3())
    // Render

    this.renderer.renderer.render(this.scene, this.camera.camera);
  }

}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e8a4535b493cdf215a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40OGVjNzIxMjI3MzI0MWMwMmUwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFJUSxRQUFRLEdBQUcsSUFBZjtBQUVlLE1BQU1DLFVBQU4sQ0FBaUI7QUFDOUJDLEVBQUFBLFdBQVcsQ0FBRUMsTUFBRixFQUFVO0FBQ25CLFFBQUlILFFBQUosRUFBYztBQUNaLGFBQU9BLFFBQVA7QUFDRDs7QUFFREEsSUFBQUEsUUFBUSxHQUFHLElBQVg7QUFFQSxTQUFLRyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSVYsb0RBQUosRUFBYjtBQUNBLFNBQUtXLElBQUwsR0FBWSxJQUFJVixtREFBSixFQUFaO0FBQ0EsU0FBS1csS0FBTCxHQUFhLElBQUlkLHdDQUFKLEVBQWI7QUFDQSxTQUFLZ0IsTUFBTCxHQUFjLElBQUlaLDBEQUFKLEVBQWQ7QUFDQSxTQUFLYSxRQUFMLEdBQWdCLElBQUlaLDREQUFKLEVBQWhCO0FBRUEsU0FBS2EsS0FBTCxHQUFhLElBQUlaLDRJQUFKLEVBQWI7QUFFQWEsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0gsUUFBakIsRUFoQm1CLENBa0JuQjtBQUVBOztBQUVBLFNBQUtJLEtBQUw7QUFDQSxTQUFLQyxpQkFBTDtBQUNEOztBQUVERCxFQUFBQSxLQUFLLEdBQUksQ0FDUDtBQUNEOztBQUVEQyxFQUFBQSxpQkFBaUIsQ0FBRUMsS0FBRixFQUFTLENBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRURDLEVBQUFBLFFBQVEsR0FBSTtBQUNWO0FBQ0EsU0FBS1osS0FBTCxDQUFXYSxLQUFYLEdBQW1CQyxNQUFNLENBQUNDLFVBQTFCO0FBQ0EsU0FBS2YsS0FBTCxDQUFXZ0IsTUFBWCxHQUFvQkYsTUFBTSxDQUFDRyxXQUEzQixDQUhVLENBS1Y7O0FBQ0EsU0FBS2IsTUFBTCxDQUFZQSxNQUFaLENBQW1CYyxNQUFuQixHQUE0QixLQUFLbEIsS0FBTCxDQUFXYSxLQUFYLEdBQW1CLEtBQUtiLEtBQUwsQ0FBV2dCLE1BQTFEO0FBQ0EsU0FBS1osTUFBTCxDQUFZQSxNQUFaLENBQW1CZSxzQkFBbkIsR0FQVSxDQVNWOztBQUNBLFNBQUtkLFFBQUwsQ0FBY0EsUUFBZCxDQUF1QmUsT0FBdkIsQ0FBK0IsS0FBS3BCLEtBQUwsQ0FBV2EsS0FBMUMsRUFBaUQsS0FBS2IsS0FBTCxDQUFXZ0IsTUFBNUQ7QUFDQSxTQUFLWCxRQUFMLENBQWNBLFFBQWQsQ0FBdUJnQixhQUF2QixDQUFxQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNULE1BQU0sQ0FBQ1UsZ0JBQWhCLEVBQWtDLENBQWxDLENBQXJDO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sR0FBSTtBQUNSLFVBQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhSCxXQUFXLEdBQUcsS0FBS3pCLElBQUwsQ0FBVTZCLE9BQXJDO0FBQ0EsU0FBSzdCLElBQUwsQ0FBVTZCLE9BQVYsR0FBb0JKLFdBQXBCO0FBQ0EsU0FBS3pCLElBQUwsQ0FBVThCLE9BQVYsR0FBb0IsS0FBSzlCLElBQUwsQ0FBVTZCLE9BQVYsR0FBb0IsS0FBSzdCLElBQUwsQ0FBVStCLEtBQWxEO0FBRUEsU0FBSzVCLE1BQUwsQ0FBWTZCLFFBQVosQ0FBcUJSLE1BQXJCLEdBTlEsQ0FRUjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFNBQUtwQixRQUFMLENBQWNBLFFBQWQsQ0FBdUI2QixNQUF2QixDQUE4QixLQUFLaEMsS0FBbkMsRUFBMEMsS0FBS0UsTUFBTCxDQUFZQSxNQUF0RDtBQUNEOztBQW5FNkI7Ozs7Ozs7O1VDZGhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwcm9qZWN0Ly4vYXBwL2NvbXBvbmVudHMvRXhwZXJpZW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IEdVSSBmcm9tICdsaWwtZ3VpJ1xuXG5pbXBvcnQgU2l6ZXMgZnJvbSAnLi91dGlscy9TaXplcydcbmltcG9ydCBUaW1lIGZyb20gJy4vdXRpbHMvVGltZSdcblxuaW1wb3J0IENhbWVyYSBmcm9tICcuL2NvbXBvbmVudHMvQ2FtZXJhJ1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vY29tcG9uZW50cy9SZW5kZXJlcidcblxuaW1wb3J0IFdvcmxkIGZyb20gJy4vV29ybGQvV29ybGQnXG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvT2JqZWN0cydcblxubGV0IGluc3RhbmNlID0gbnVsbFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlcmllbmNlIHtcbiAgY29uc3RydWN0b3IgKGNhbnZhcykge1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlXG4gICAgfVxuXG4gICAgaW5zdGFuY2UgPSB0aGlzXG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuc2l6ZXMgPSBuZXcgU2l6ZXMoKVxuICAgIHRoaXMudGltZSA9IG5ldyBUaW1lKClcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKVxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG4gICAgdGhpcy53b3JsZCA9IG5ldyBXb3JsZCgpXG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnJlbmRlcmVyKVxuXG4gICAgLy8gdGhpcy5ndWkgPSBuZXcgR1VJKClcblxuICAgIC8vIHRoaXMub2JqZWN0cyA9IG5ldyBPYmplY3RzKClcblxuICAgIHRoaXMuc2V0dXAoKVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgc2V0dXAgKCkge1xuICAgIC8vIHRoaXMud29ybGQud29ybGQuYWRkKHRoaXMuY2FtZXJhLmNhbWVyYSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzIChtb3ZlZCkge1xuICAgIC8vIG1vdmVkID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGV2ZW50ID0+IHtcbiAgICAvLyAgIHRoaXMuY3Vyc29yWSA9IGV2ZW50LmNsaWVudFkgLyB0aGlzLnNpemVzLmhlaWdodFxuICAgIC8vICAgdGhpcy5jdXJzb3JYID0gLShldmVudC5jbGllbnRYIC8gdGhpcy5zaXplcy53aWR0aCAtIDAuNSlcbiAgICAvLyB9KVxuICB9XG5cbiAgb25SZXNpemUgKCkge1xuICAgIC8vIFVwZGF0ZSBzaXplc1xuICAgIHRoaXMuc2l6ZXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuc2l6ZXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbiAgICAvLyBVcGRhdGUgY2FtZXJhXG4gICAgdGhpcy5jYW1lcmEuY2FtZXJhLmFzcGVjdCA9IHRoaXMuc2l6ZXMud2lkdGggLyB0aGlzLnNpemVzLmhlaWdodFxuICAgIHRoaXMuY2FtZXJhLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcblxuICAgIC8vIC8vIFVwZGF0ZSByZW5kZXJlclxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodClcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oTWF0aC5taW4od2luZG93LmRldmljZVBpeGVsUmF0aW8sIDIpKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KClcbiAgICB0aGlzLmRlbHRhID0gY3VycmVudFRpbWUgLSB0aGlzLnRpbWUuY3VycmVudFxuICAgIHRoaXMudGltZS5jdXJyZW50ID0gY3VycmVudFRpbWVcbiAgICB0aGlzLnRpbWUuZWxhcHNlZCA9IHRoaXMudGltZS5jdXJyZW50IC0gdGhpcy50aW1lLnN0YXJ0XG5cbiAgICB0aGlzLmNhbWVyYS5jb250cm9scy51cGRhdGUoKVxuXG4gICAgLy8gQ2FtZXJhIE1vdmVtZW50XG4gICAgLy8gdGhpcy5jYW1lcmEuY2FtZXJhLnBvc2l0aW9uLnggPSB0aGlzLmN1cnNvclggKiAwLjVcbiAgICAvLyB0aGlzLmNhbWVyYS5jYW1lcmEucG9zaXRpb24ueSA9IHRoaXMuY3Vyc29yWSAqIDAuNVxuICAgIC8vIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVmVjdG9yMygpKVxuXG4gICAgLy8gUmVuZGVyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEuY2FtZXJhKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZThhNDUzNWI0OTNjZGYyMTVhOFwiKSJdLCJuYW1lcyI6WyJUSFJFRSIsIkdVSSIsIlNpemVzIiwiVGltZSIsIkNhbWVyYSIsIlJlbmRlcmVyIiwiV29ybGQiLCJPYmplY3RzIiwiaW5zdGFuY2UiLCJFeHBlcmllbmNlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJzaXplcyIsInRpbWUiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwicmVuZGVyZXIiLCJ3b3JsZCIsImNvbnNvbGUiLCJsb2ciLCJzZXR1cCIsImFkZEV2ZW50TGlzdGVuZXJzIiwibW92ZWQiLCJvblJlc2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInNldFNpemUiLCJzZXRQaXhlbFJhdGlvIiwiTWF0aCIsIm1pbiIsImRldmljZVBpeGVsUmF0aW8iLCJ1cGRhdGUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJub3ciLCJkZWx0YSIsImN1cnJlbnQiLCJlbGFwc2VkIiwic3RhcnQiLCJjb250cm9scyIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=