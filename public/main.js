/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/animations/AboutTitle.js":
/*!**************************************!*\
  !*** ./app/animations/AboutTitle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutTitle)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


class AboutTitle extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        titleSpans: element.querySelectorAll('span span')
      }
    });
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
  }
  animateIn() {
    this.tl.restart();
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleY: '1',
      duration: 0.75,
      ease: 'expo.out'
    }).to(this.elements.titleSpans, {
      y: '0%',
      skewY: '0',
      scaleY: '1',
      transformOrigin: 'bottom center',
      stagger: 0.05,
      duration: 0.5,
      ease: 'expo.out'
    }, '+=0.025').to(this.elements.titleSpans, {
      autoAlpha: 1,
      stagger: 0.06,
      duration: 0.5
    }, '<');
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.element, {
      autoAlpha: 0,
      scaleY: '0'
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.titleSpans, {
      autoAlpha: 0,
      y: '100%',
      scaleY: '0.3',
      skewY: '12deg'
    });
  }
}

/***/ }),

/***/ "./app/animations/ChangeBgColor.js":
/*!*****************************************!*\
  !*** ./app/animations/ChangeBgColor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeBgColor)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


class ChangeBgColor extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        thumbnail: '.home_works_single_thumb'
      }
    });
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
  }
  animateIn() {
    this.body = document.body;
    this.body.classList.remove('white');
    this.body.classList.add('black');
  }
  animateOut() {
    this.body = document.body;
    this.body.classList.remove('black');
    this.body.classList.add('white');
  }
}

/***/ }),

/***/ "./app/animations/Line.js":
/*!********************************!*\
  !*** ./app/animations/Line.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


class Line extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        lines: element.querySelectorAll('.line')
      }
    });
    console.log(this.elements.lines);
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();

    // this.showLine()
  }

  animateIn() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.elements.lines, {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.5,
      ease: 'expo.out',
      delay: 0.25
    });
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.lines, {
      autoAlpha: 0,
      scaleX: 0
    });
  }
}

/***/ }),

/***/ "./app/animations/MiniTitle.js":
/*!*************************************!*\
  !*** ./app/animations/MiniTitle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiniTitle)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


class MiniTitle extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        titleSpans: element.querySelectorAll('span span')
      }
    });
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
  }
  animateIn() {
    this.tl.restart();
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleX: '1',
      duration: 0.75,
      ease: 'expo.out'
    }).to(this.elements.titleSpans, {
      x: '0%',
      skewX: '0',
      transformOrigin: 'center left',
      stagger: 0.05,
      duration: 0.75,
      ease: 'expo.out'
    }, '+=0.025').to(this.elements.titleSpans, {
      autoAlpha: 1,
      stagger: 0.09,
      duration: 0.6,
      ease: 'expo.out'
    }, '<');
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.element, {
      autoAlpha: 0,
      scaleX: '3.5'
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.titleSpans, {
      autoAlpha: 0,
      x: '100%',
      skewX: '12deg'
    });
  }
}

/***/ }),

/***/ "./app/animations/Title.js":
/*!*********************************!*\
  !*** ./app/animations/Title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Animation */ "./app/classes/Animation.js");


class Title extends classes_Animation__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements: {
        titleSpans: element.querySelectorAll('span span')
      }
    });
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
    this.delay = this.element.dataset.delay;
  }
  animateIn() {
    this.tl.restart();
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleX: '1',
      duration: 0.75,
      delay: this.delay,
      ease: 'expo.out'
    }).to(this.elements.titleSpans, {
      x: '0%',
      skewX: '0',
      transformOrigin: 'center left',
      stagger: 0.05,
      duration: 0.75,
      ease: 'expo.out'
    }, '+=0.025').to(this.elements.titleSpans, {
      autoAlpha: 1,
      stagger: 0.09,
      duration: 0.6,
      ease: 'expo.out'
    }, '<');
  }
  animateOut() {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.element, {
      autoAlpha: 0,
      scaleX: '3.5'
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.elements.titleSpans, {
      autoAlpha: 0,
      x: '100%',
      skewX: '12deg'
    });
  }
}

/***/ }),

/***/ "./app/classes/Animation.js":
/*!**********************************!*\
  !*** ./app/classes/Animation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Animation)
/* harmony export */ });
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");

class Animation extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element,
    elements
  }) {
    super({
      element,
      elements
    });
    this.createObserver();
    this.animateOut();
  }
  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    }, {
      threshold: 0.1
    });
    this.observer.observe(this.element);
  }
  animateIn() {}
  animateOut() {}
  onResize() {}
}

/***/ }),

/***/ "./app/classes/AsyncLoad.js":
/*!**********************************!*\
  !*** ./app/classes/AsyncLoad.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncLoad)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");


class AsyncLoad extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    element
  }) {
    super({
      element
    });
    this.createObserver();
    this.element.src = this.element.getAttribute('data-src');
    this.delay = this.element.dataset.delay;
    console.log(this.delay);
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set(this.element, {
      autoAlpha: 0
    });
  }
  createObserver() {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(entry.target, {
            autoAlpha: 1,
            ease: 'expo.out',
            delay: this.delay,
            duration: 2
          });
        }
      });
    });
    this.observer.observe(this.element);
  }
}

/***/ }),

/***/ "./app/classes/Component.js":
/*!**********************************!*\
  !*** ./app/classes/Component.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

class Component extends (events__WEBPACK_IMPORTED_MODULE_0___default()) {
  constructor({
    element,
    elements
  }) {
    super();
    this.selector = element;
    this.selectorChildren = {
      ...elements
    };
    this.create();
    this.addEventListeners();
  }
  create() {
    if (this.selector instanceof window.HTMLElement) {
      this.element = this.selector;
    } else {
      this.element = document.querySelector(this.selector);
    }
    this.elements = {};
    for (const [key, entry] of Object.entries(this.selectorChildren)) {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    }
  }
  addEventListeners() {}
  removeEventListeners() {}
}

/***/ }),

/***/ "./app/classes/Page.js":
/*!*****************************!*\
  !*** ./app/classes/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prefix */ "./node_modules/prefix/index.js");
/* harmony import */ var prefix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prefix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_splitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/splitText */ "./app/utils/splitText.js");
/* harmony import */ var animations_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animations/Title */ "./app/animations/Title.js");
/* harmony import */ var animations_MiniTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animations/MiniTitle */ "./app/animations/MiniTitle.js");
/* harmony import */ var animations_AboutTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animations/AboutTitle */ "./app/animations/AboutTitle.js");
/* harmony import */ var animations_ChangeBgColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animations/ChangeBgColor */ "./app/animations/ChangeBgColor.js");
/* harmony import */ var animations_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! animations/Line */ "./app/animations/Line.js");
/* harmony import */ var classes_AsyncLoad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classes/AsyncLoad */ "./app/classes/AsyncLoad.js");









class Page {
  constructor({
    id,
    element,
    elements
  }) {
    this.selector = element;
    this.selectorChildren = {
      ...elements,
      animationsTitles: '[data-animation="title"]',
      animationsMiniTitles: '[data-animation="miniTitle"]',
      animationsAboutTitles: '[data-animation="aboutTitle"]',
      animationsBg: '[data-animation="change-bg-color"]',
      animationsLines: '[data-animation="line"]',
      asyncloaders: '[data-src]'
    };
    this.id = id;
    this.transformPrefix = prefix__WEBPACK_IMPORTED_MODULE_0___default()('transform');
    this.onMouseWheelEvent = this.easeScroll.bind(this);
  }
  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};
    for (const [key, entry] of Object.entries(this.selectorChildren)) {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    }
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      smoothness: 8 /* The Higher the less smooth it is */
    };

    this.scroll.smoothness = this.scroll.smoothness / 100;
    this.createAsyncLoad();
  }
  createAnimations() {
    if (this.elements.animationsTitles) {
      this.animationsTitles = this.elements.animationsTitles.forEach(element => {
        (0,utils_splitText__WEBPACK_IMPORTED_MODULE_1__.splitWords)(element);
        return new animations_Title__WEBPACK_IMPORTED_MODULE_2__["default"]({
          element
        });
      });
    }
    if (this.elements.animationsMiniTitles) {
      this.animationsMiniTitles = this.elements.animationsMiniTitles.forEach(element => {
        (0,utils_splitText__WEBPACK_IMPORTED_MODULE_1__.splitWords)(element);
        return new animations_MiniTitle__WEBPACK_IMPORTED_MODULE_3__["default"]({
          element
        });
      });
    }
    if (this.elements.animationsAboutTitles) {
      this.animationsAboutTitles = this.elements.animationsAboutTitles.forEach(element => {
        (0,utils_splitText__WEBPACK_IMPORTED_MODULE_1__.splitWords)(element);
        return new animations_AboutTitle__WEBPACK_IMPORTED_MODULE_4__["default"]({
          element
        });
      });
    }
    if (this.elements.animationsLines) {
      this.animationsLines = this.elements.animationsLines.forEach(element => {
        return new animations_Line__WEBPACK_IMPORTED_MODULE_6__["default"]({
          element
        });
      });
    }
    if (this.elements.animationsBg) {
      if (this.elements.animationsBg.length >= 2) {
        this.animationsBg = this.elements.animationsBg.forEach(element => {
          return new animations_ChangeBgColor__WEBPACK_IMPORTED_MODULE_5__["default"]({
            element
          });
        });
      } else {
        this.animationsBg = [new animations_ChangeBgColor__WEBPACK_IMPORTED_MODULE_5__["default"]({
          element: this.elements.animationsBg
        })];
      }
    }
  }
  show() {
    return new Promise(resolve => {
      this.animationIn = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].timeline();
      this.animationIn.to(this.element, {
        autoAlpha: 1,
        onComplete: _ => {
          this.addEventListeners();
          this.onResize();
          this.createAnimations();
          resolve();
        }
      });
    });
  }
  hide() {
    return new Promise(resolve => {
      this.animationOut = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      });
      window.scrollTo(0, 0);
    });
  }
  createAsyncLoad() {
    if (this.elements.asyncloaders) {
      this.elements.asyncloaders.forEach(element => {
        return new classes_AsyncLoad__WEBPACK_IMPORTED_MODULE_7__["default"]({
          element
        });
      });
    }
  }
  onResize() {
    this.scroll.limit = this.elements.wrapper.clientHeight + 'px';
    document.body.style.height = this.scroll.limit;
  }
  easeScroll() {
    this.scroll.target = window.scrollY;
  }
  update() {
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_8__["default"].utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.smoothness);
    this.scroll.target = Math.floor(this.scroll.target * 100) / 100;
    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }
    this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`;
    this.scroll.last = this.scroll.current;
  }
  addEventListeners() {
    window.addEventListener('scroll', this.onMouseWheelEvent);
  }
  removeEventListeners() {}
}

/***/ }),

/***/ "./app/components/Canvas/Gallery.js":
/*!******************************************!*\
  !*** ./app/components/Canvas/Gallery.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./app/components/Canvas/index.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Media.js");





class Gallery {
  constructor({
    element,
    index,
    scene,
    camera,
    renderer,
    world,
    sizes
  }) {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.element = element;
    this.index = index;
    this.sizes = sizes;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.world = world;
    this.wrapper = this.element.parentNode;
    this.x = {
      current: 0,
      target: 0,
      direction: 'left',
      lerp: 0.1
    };
    this.scrollX = 0;
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      x: 0,
      velocity: 1.5,
      lerp: 0.05
    };
    this.createRenderer();
    this.createSizes();
    this.createCamera();
    this.createMedias();
    this.onResize({
      sizes: this.sizes
    });
  }
  createRenderer() {
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
      canvas: this.element,
      alpha: true
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
  }
  createSizes() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
  createMedias() {
    this.mediasElements = this.wrapper.querySelectorAll('.home_works_single_image');
    this.bounds = this.element.getBoundingClientRect();
    this.width = this.bounds.width / window.innerWidth * this.sizes.width;
    this.medias = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.mediasElements, (element, index) => {
      this.geometry = new three__WEBPACK_IMPORTED_MODULE_3__.PlaneGeometry(1, 1);
      this.material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({
        color: '#ffffff',
        side: three__WEBPACK_IMPORTED_MODULE_3__.DoubleSide
      });
      this.plane = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(this.geometry, this.material);
      this.scene.add(this.plane);
      return new _Media__WEBPACK_IMPORTED_MODULE_2__["default"]({
        element,
        geometry: this.plane,
        index,
        scene: this.scene,
        sizes: this.sizes,
        viewport: this.element
      });
    });
  }
  createCamera() {
    this.scene.add(this.camera.camera);
  }
  onResize(event) {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.bounds = this.element.getBoundingClientRect();
    this.sizes = event.sizes;
    const fov = this.camera.camera.fov * (Math.PI / 100);
    const height = 2 * Math.tan(fov / 2) * this.camera.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = {
      width,
      height
    };
    this.width = this.bounds.width / window.innerWidth * this.viewport.width;
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.medias, media => media.onResize(event, this.viewport, this.scroll));
  }
  onTouchDown({
    x,
    y
  }) {
    this.scrollX = this.scroll.x;
  }
  onTouchMove({
    x,
    y
  }) {
    const distance = (x.start - x.end) * 0.2;
  }
  onTouchUp({
    x,
    y
  }) {}
  galleryScroll(event) {}
  update(scroll) {
    this.renderer.render(this.scene, this.camera.camera);
    if (!this.bounds) return;
    const distance = (scroll.current - scroll.target) * 0.03;
    const y = scroll.current / window.innerHeight;
    if (this.scroll.current < this.scroll.target) {
      this.x.direction = 'right';
      this.scroll.velocity = -1;
    } else if (this.scroll.current > this.scroll.target) {
      this.x.direction = 'left';
      this.scroll.velocity = 1;
    }
    this.scroll.target -= this.scroll.velocity;
    this.scroll.target += distance;
    this.scroll.current = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp);
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.medias, (media, index) => {
      const scaleX = media.geometry.position.x;
      if (this.x.direction === 'left') {
        const x = media.geometry.position.x + scaleX / 2;
        if (x < -this.width / 2) {
          media.extra += this.width;
        }
      } else if (this.x.direction === 'right') {
        const x = media.geometry.position.x + scaleX / 2;
        if (x > this.width / 2) {
          media.extra -= this.width;
        }
      }
      media.update(this.scroll);
    });
  }
  addEventListeners() {
    window.addEventListener('scroll', this.galleryScroll.bind(this));
  }
  destroy() {}
}

/***/ }),

/***/ "./app/components/Canvas/Media.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/Media.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Media)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./app/components/Canvas/index.js");


class Media {
  constructor({
    element,
    index,
    geometry,
    scene,
    renderer,
    world,
    sizes,
    viewport,
    width
  }) {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.element = element;
    this.index = index;
    this.figure = this.element.parentElement;
    this.geometry = geometry;
    this.renderer = renderer;
    this.scene = scene;
    this.sizes = sizes;
    this.viewport = viewport;
    this.viewportSizes = viewport.getBoundingClientRect();
    this.world = world;
    this.extra = 0;
    this.createTexture();
  }
  createTexture() {
    this.image = new window.Image();
    this.image.crossOrigin = 'anonymous';
    this.image.src = this.element.getAttribute('data-src');
    this.texture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load(this.image.src);
    this.geometry.material.map = this.texture;
  }
  createBounds(viewport) {
    this.parent = this.figure.parentElement.getBoundingClientRect();
    this.bounds = this.figure.getBoundingClientRect();
    this.updateScale(viewport);
    this.updateX();
  }
  updateScale({
    height,
    width
  }) {
    this.scale = {
      width,
      height
    };
    this.width = this.bounds.width / this.viewportSizes.width;
    this.height = this.bounds.height / this.viewportSizes.height;
    this.geometry.scale.x = width * this.width * 0.5;
    this.geometry.scale.y = height * this.height * 0.5;
    this.y = (this.bounds.top - this.parent.top) / this.viewportSizes.height + 0.5;
    this.geometry.position.y = height / 2 - this.geometry.scale.y / 2 - this.y * height;
  }
  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;
    this.geometry.position.x = -this.scale.width / 2 + this.geometry.scale.x / 2 + this.x * this.scale.width + this.extra;

    // console.log(this.geometry.position.x)

    // this.distance = -(this.bounds.left + current) / window.innerWidth
    // const distance = (current - target) * 0.00001

    // this.geometry.position.x = this.currentPos + this.distance
    // this.geometry.position.x -= target * 0.00005
    // this.geometry.position.x += distance
  }

  onResize(event, viewport, scroll) {
    this.createBounds(viewport);
    this.parent = this.figure.parentElement.getBoundingClientRect();
    this.bounds = this.figure.getBoundingClientRect();
  }
  update(scroll) {
    this.updateX(scroll.current);
  }
}

/***/ }),

/***/ "./app/components/Canvas/World/index.js":
/*!**********************************************!*\
  !*** ./app/components/Canvas/World/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ World)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Canvas/index.js");

class World {
  constructor() {
    this.createPlane();
  }
  createPlane() {}
  update() {}
}

/***/ }),

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
    this.createCamera();
    this.onResize();
  }
  createCamera() {
    this.aspect = this.sizes.width / this.sizes.height;
    this.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(50, this.aspect, 0.1, 100);
    this.camera.position.set(0, 0, 3);
  }
  addEventListeners() {}
  onResize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }
  update() {}
}

/***/ }),

/***/ "./app/components/Canvas/components/Renderer.js":
/*!******************************************************!*\
  !*** ./app/components/Canvas/components/Renderer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Canvas/index.js");

class Renderer {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.createRenderer();
  }
  createRenderer() {}
  onResize() {}
  update() {}
}

/***/ }),

/***/ "./app/components/Canvas/index.js":
/*!****************************************!*\
  !*** ./app/components/Canvas/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_SizesCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/SizesCanvas */ "./app/components/utils/SizesCanvas.js");
/* harmony import */ var _utils_Debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Debug */ "./app/components/utils/Debug.js");
/* harmony import */ var _components_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Camera */ "./app/components/Canvas/components/Camera.js");
/* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Renderer */ "./app/components/Canvas/components/Renderer.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./World */ "./app/components/Canvas/World/index.js");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Gallery */ "./app/components/Canvas/Gallery.js");
/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Media */ "./app/components/Canvas/Media.js");









let instance = null;
class Canvas {
  constructor(template) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.template = template;
    this.canvas = document.querySelector('.home_works_single_gallery_wrapper');
    this.wrapper = document.querySelector('.home_works_single_wrapper');
    this.sizes = new _utils_SizesCanvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.debug = new _utils_Debug__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.onRouteUpdate(this.template);
    this.x = {
      start: 0,
      distance: 0,
      end: 0
    };
  }
  createGalleries() {
    this.galleriesElements = document.querySelectorAll('.home_works_single_gallery_wrapper');
    this.galleries = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleriesElements, (element, index) => {
      return new _Gallery__WEBPACK_IMPORTED_MODULE_6__["default"]({
        element,
        index,
        sizes: this.sizes,
        scene: new three__WEBPACK_IMPORTED_MODULE_8__.Scene(),
        camera: new _components_Camera__WEBPACK_IMPORTED_MODULE_3__["default"](),
        renderer: new _components_Renderer__WEBPACK_IMPORTED_MODULE_4__["default"](),
        world: new _World__WEBPACK_IMPORTED_MODULE_5__["default"](),
        galleriesElements: this.galleriesElements
      });
    });
  }
  onResize(event) {
    this.sizes = {
      width: window.innerWidth,
      height: this.wrapper.getBoundingClientRect().height
    };
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => {
      gallery.onResize({
        sizes: this.sizes
      });
      gallery.camera.onResize();
    });
  }
  onTouchDown(e) {
    this.isDown = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    this.x.start = x;
    const values = {
      x: this.x
    };
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => gallery.onTouchDown(values));
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    this.x.end = x;
    this.x.distance = this.x.start - this.x.end;
    const values = {
      x: this.x
    };
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => gallery.onTouchMove(values));
  }
  onTouchUp(e) {
    this.isDown = false;
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    this.x.end = x;
    const values = {
      x: this.x
    };
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => gallery.onTouchUp(values));
  }
  onWheel({
    pixelY
  }) {
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => gallery.onWheel(pixelY));
  }
  destroyHome() {
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => {
      this.destroy();
    });
  }
  onRouteUpdate(template) {
    if (template === 'home') {
      this.createGalleries();
    } else {
      this.destroyHome();
      this.home = null;
    }
  }
  addEventListeners(event) {
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => {
      gallery.camera.addEventListeners();
      gallery.addEventListeners(event);
    });
  }
  update(scroll) {
    lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.galleries, gallery => {
      gallery.update(scroll);
      gallery.camera.update();
      gallery.world.update();
      // gallery.renderer.update()
    });
  }
}

/***/ }),

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
    this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 0.42);
    this.directionalLight.position.set(2, 2, -1);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.set(1024, 1024);
    this.scene.add(this.directionalLight);
    if (this.debug.active) {
      this.debugFolder.add(this.directionalLight.position, 'y').name('DirLig PosY').min(0).max(100).step(1);
      this.debugFolder.add(this.directionalLight.position, 'x').name('DirLig PosX').min(0).max(100).step(1);
      this.debugFolder.add(this.directionalLight.position, 'z').name('DirLig PosZ').min(0).max(100).step(1);
      this.debugFolder.add(this.directionalLight, 'intensity').name('DirLig Intensity').min(0).max(1).step(0.01);
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

/***/ }),

/***/ "./app/components/Experience/World/Legos.js":
/*!**************************************************!*\
  !*** ./app/components/Experience/World/Legos.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Legos)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_splitText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/splitText */ "./app/utils/splitText.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");




class Legos {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.canvas = this.experience.canvas;
    this.resource = this.resources.items.legoPieces;
    this.intro = this.experience.intro;
    this.introUI = this.intro.elements.introUI;
    (0,utils_splitText__WEBPACK_IMPORTED_MODULE_0__.splitWords)(this.introUI);
    this.introSpans = this.introUI.querySelectorAll('span span');
    this.debug = this.experience.debug;
    this.camVelocity = 0.5;
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos');
    }
    this.createRayCaster();
    this.createObjects();
    this.createAnimations();
  }
  createObjects() {
    this.model = this.resource.scene;
    this.top = this.model.children[1];
    this.bottom = this.model.children[0];
    this.model.scale.set(1, 1, 1);
    this.model.rotation.set(5, 0, 0);
    this.model.position.set(0, 1.75, 0);
    this.scene.add(this.model);
    this.intro.once('show', _ => {
      this.initTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.initTl.to(this.model.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 1.5,
        ease: 'power4.out',
        onComplete: this.createClick.bind(this)
      }).to(this.introSpans, {
        y: '0%',
        stagger: 0.075,
        duration: 1,
        autoAlpha: 1,
        ease: 'expo.out'
      }, '-=0.75');
    });
  }
  createRayCaster() {
    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_3__.Raycaster();
    this.currentIntersection = null;
    this.raycaster.set(20, 50, 0);
  }
  createAnimations() {
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    this.tl.fromTo(this.top.position, {
      duration: 2,
      ease: 'expo.in',
      y: 0.14
    }, {
      duration: 0.7,
      y: 0.17,
      yoyo: true,
      ease: 'expo.out',
      repeat: -1
    });
  }
  addEventListeners() {}
  createClick() {
    window.addEventListener('click', () => {
      if (this.currentIntersection) {
        this.clicked();
      }
    });
  }
  clicked() {
    this.tl.kill();
    this.clickable = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    this.clickable.to(this.model.scale, {
      x: 2.7,
      y: 2.7,
      z: 2.7,
      duration: 0.9,
      ease: 'expo.in',
      onComplete: this.nextStep.bind(this)
    });
    this.currentIntersection = 1;
  }
  nextStep() {
    this.raycaster.layers.disableAll();
    this.newTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    this.camVelocity = 0.25;
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.canvas, {
      zIndex: 0
    });
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.intro.elements.secondView, {
      zIndex: 1
    });
    this.newTl.to(this.top.position, {
      y: 0.02,
      delay: 0.15,
      duration: 0.4,
      ease: 'expo.in'
    }).to(this.intro.elements.firstView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.model.position, {
      x: 2.5,
      y: 2,
      duration: 0.9,
      ease: 'expo.inOut',
      onComplete: this.changeColor.bind(this)
    }, '-=0.1').to(this.intro.elements.secondView, {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: this.secondStep.bind(this)
    }, '-=0.5');
  }
  changeColor() {
    this.newTl.to(this.bottom.material.color, {
      r: 1,
      g: 0.6038272976875305,
      b: 0
    }).to(this.top.material.color, {
      r: 1,
      g: 0.6038272976875305,
      b: 0
    });
  }
  secondStep() {
    this.intro.elements.secondViewButton.addEventListener('click', this.animateThird.bind(this));
  }
  animateThird() {
    this.thirdTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.intro.elements.thirdView, {
      zIndex: 1
    });
    this.thirdTl.to(this.intro.elements.secondView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.model.scale, {
      x: 3.5,
      y: 3.5,
      z: 3.5,
      duration: 0.9,
      ease: 'expo.in'
    }).to(this.model.position, {
      x: 3.5,
      y: 3,
      duration: 0.9,
      ease: 'expo.inOut'
    }, '-=0.1').to(this.intro.element, {
      backgroundColor: '#000000'
    }).to(this.intro.elements.thirdView, {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: this.thirdStep.bind(this)
    }, '-=0.5');
  }
  thirdStep() {
    this.intro.elements.thirdViewButton.addEventListener('click', this.animateLast.bind(this));
  }
  animateLast() {
    this.lastTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    this.lastTl.to(this.intro.elements.thirdView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.canvas, {
      autoAlpha: 0
    }).to(this.intro.element, {
      backgroundColor: 'transparent'
    });
    this.lastTl.set(this.canvas, {
      display: 'none',
      onComplete: this.intro.animateOut.bind(this.intro)
    });
  }
  update() {
    this.camPosX = 0.5 + this.camera.mouse.y * this.camVelocity;
    this.camPosY = 0.5 + this.camera.mouse.x * this.camVelocity;
    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.model.rotation, {
      x: this.camPosX,
      y: this.camPosY,
      ease: 'expo.out',
      duration: 3
    });
    this.intersection = this.raycaster.intersectObject(this.top);
    if (this.intersection.length) {
      if (this.currentIntersection === null) {
        // this.addEventListeners()
      }
      this.currentIntersection = this.top;
    } else {
      this.currentIntersection = null;
    }
    this.raycaster.setFromCamera(this.camera.mouse, this.camera.camera);
  }
}

/***/ }),

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
/* harmony import */ var _Legos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Legos */ "./app/components/Experience/World/Legos.js");



class World {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;
    this.resources.on('ready', () => {
      this.legos = new _Legos__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.environment = new _Environment__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.camera.mouse.set(0.5, 0.5);
      if (this.legos && this.legos.addEventListeners) {
        this.legos.addEventListeners();
      }
    });
  }
  update() {
    if (this.legos) {
      this.legos.update();
    }
  }
}

/***/ }),

/***/ "./app/components/Experience/components/Camera.js":
/*!********************************************************!*\
  !*** ./app/components/Experience/components/Camera.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");



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
    this.camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.1, 100);
    this.camera.position.set(0, 2, 5);
    this.scene.add(this.camera);
    this.mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();
  }
  addEventListeners() {
    window.addEventListener('mousemove', moved => {
      this.mouse.x = moved.clientX / this.sizes.width * 2 - 1;
      this.mouse.y = -(moved.clientY / this.sizes.height) * 2 + 1;
    });
  }
  onResize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
  }
  update() {}
}

/***/ }),

/***/ "./app/components/Experience/components/Renderer.js":
/*!**********************************************************!*\
  !*** ./app/components/Experience/components/Renderer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./app/components/Experience/index.js");


class Renderer {
  constructor() {
    this.experience = new ___WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.camera;
    this.createRenderer();
  }
  onResize() {
    // Update renderer
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  createRenderer() {
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_1__.PCFSoftShadowMap;
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  update() {
    // Render
    this.renderer.render(this.scene, this.camera);
  }
}

/***/ }),

/***/ "./app/components/Experience/index.js":
/*!********************************************!*\
  !*** ./app/components/Experience/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _utils_Sizes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Sizes */ "./app/components/utils/Sizes.js");
/* harmony import */ var _utils_Debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Debug */ "./app/components/utils/Debug.js");
/* harmony import */ var _components_Camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Camera */ "./app/components/Experience/components/Camera.js");
/* harmony import */ var _components_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Renderer */ "./app/components/Experience/components/Renderer.js");
/* harmony import */ var _World__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./World */ "./app/components/Experience/World/index.js");
/* harmony import */ var _utils_Resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Resources */ "./app/components/utils/Resources.js");
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources */ "./app/components/Experience/sources.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Intro */ "./app/components/Intro.js");









let instance = null;
class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.canvas = canvas;
    this.debug = new _utils_Debug__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.sizes = new _utils_Sizes__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.scene = new three__WEBPACK_IMPORTED_MODULE_8__.Scene();
    this.resources = new _utils_Resources__WEBPACK_IMPORTED_MODULE_5__["default"](_sources__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.camera = new _components_Camera__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.renderer = new _components_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.world = new _World__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.intro = new _Intro__WEBPACK_IMPORTED_MODULE_7__["default"]();
  }
  addEventListeners() {
    this.camera.addEventListeners();
  }
  onResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
    this.camera.onResize();
    this.renderer.onResize();
  }
  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }
}

/***/ }),

/***/ "./app/components/Experience/sources.js":
/*!**********************************************!*\
  !*** ./app/components/Experience/sources.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'environmentMapTexture',
  type: 'cubeTexture',
  path: ['textures/environmentMap/px.jpg', 'textures/environmentMap/nx.jpg', 'textures/environmentMap/py.jpg', 'textures/environmentMap/ny.jpg', 'textures/environmentMap/pz.jpg', 'textures/environmentMap/nz.jpg']
}, {
  name: 'legoPieces',
  type: 'gltfModel',
  path: 'models/legos.glb'
}]);

/***/ }),

/***/ "./app/components/Intro.js":
/*!*********************************!*\
  !*** ./app/components/Intro.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");


class Intro extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.intro',
      elements: {
        wrapper: '.intro_wrapper',
        firstView: '.intro_first_view',
        secondView: '.intro_second_view',
        thirdView: '.intro_third_view',
        secondViewButton: '.intro_second_view_button',
        thirdViewButton: '.intro_third_view_button',
        introUI: '.intro_ui'
      }
    });
  }
  show() {
    this.emit('show');
  }
  animateOut() {
    this.introOut = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline();
    this.introOut.to(this.element, {
      autoAlpha: 0,
      duration: 0.5
    });
    this.introOut.call(_ => {
      this.emit('out');
    });
  }
  destroy() {
    this.element.remove();
  }
}

/***/ }),

/***/ "./app/components/Nav.js":
/*!*******************************!*\
  !*** ./app/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");


class Nav extends classes_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      element: '.nav_header',
      elements: {
        logo: '.nav_logo',
        list: '.nav_list_link',
        line: '.line_top',
        social: '.nav_list_social_links_list'
      }
    });
    this.show();
  }
  show() {
    this.tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
      duration: 0.5,
      ease: 'expo.out'
    });
    this.tl.to(this.elements.line, {
      scaleX: '100%',
      autoAlpha: 1
    }).to(this.elements.logo, {
      autoAlpha: 1,
      y: '0'
    }, '-=0.15').to(this.elements.list, {
      autoAlpha: 1,
      y: '0'
    }).to(this.elements.social, {
      autoAlpha: 1,
      y: '0'
    });
  }
}

/***/ }),

/***/ "./app/components/Preloader.js":
/*!*************************************!*\
  !*** ./app/components/Preloader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Preloader)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var utils_splitText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/splitText */ "./app/utils/splitText.js");
/* harmony import */ var classes_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classes/Component */ "./app/classes/Component.js");



class Preloader extends classes_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        wrapper: '.preloader_wrapper',
        bigText: '.preloader_big_text',
        smallText: '.preloader_small_text',
        percentage: '.preloader_bottom_number',
        preloaderBottom: '.preloader_bottom',
        images: document.querySelectorAll('img')
      }
    });
    (0,utils_splitText__WEBPACK_IMPORTED_MODULE_0__.splitText)(this.elements.bigText);
    (0,utils_splitText__WEBPACK_IMPORTED_MODULE_0__.splitText)(this.elements.smallText);
    this.bigTextSpans = this.elements.bigText.querySelectorAll('span span');
    this.smallTextSpans = this.elements.smallText.querySelectorAll('span span');
    this.lineBottom = this.elements.preloaderBottom.querySelector('.line_bottom');
    this.preloaderLeft = this.elements.preloaderBottom.querySelector('.preloader_bottom_left');
    this.preloaderRight = this.elements.preloaderBottom.querySelector('.preloader_bottom_right');
    console.log(this.lineBottom);
    this.body = document.body;
    this.length = 0;
    this.initLoader();
  }
  initLoader() {
    return new Promise(resolve => {
      this.tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      document.documentElement.style.overflow = 'hidden';
      this.tl.to(this.elements.bigText, {
        scaleX: '1',
        duration: 0.75,
        ease: 'expo.out',
        autoAlpha: 1
      }, '<').to(this.bigTextSpans, {
        x: '0%',
        skewX: '0',
        transformOrigin: 'center left',
        stagger: 0.05,
        duration: 0.75,
        ease: 'expo.out'
      }, '+=0.025').to(this.bigTextSpans, {
        autoAlpha: 1,
        stagger: 0.09,
        duration: 0.6,
        ease: 'expo.out'
      }, '<').to(this.elements.smallText, {
        scaleX: '1',
        duration: 0.75,
        ease: 'expo.out',
        autoAlpha: 1
      }, '<').to(this.smallTextSpans, {
        x: '0%',
        skewX: '0',
        stagger: 0.05,
        duration: 0.75,
        ease: 'expo.out'
      }, '<').to(this.smallTextSpans, {
        autoAlpha: 1,
        stagger: 0.02,
        duration: 0.6,
        ease: 'expo.out'
      }, '<').to(this.lineBottom, {
        scaleX: '1',
        duration: 0.5,
        delay: 0.5,
        autoAlpha: 1,
        transformOrigin: 'center center',
        ease: 'expo.out'
      }, '<').to(this.preloaderLeft, {
        y: '0',
        autoAlpha: 1,
        duration: 0.25,
        ease: 'expo.out'
      }, '-=0.5').to(this.preloaderRight, {
        y: '0',
        autoAlpha: 1,
        duration: 0.25,
        ease: 'expo.out'
      }, '<').call(_ => {
        this.createLoader();
        resolve();
      });
    });
  }
  createLoader() {
    if (this.elements.images) {
      this.elements.images.forEach(element => {
        element.onload = _ => this.onAssetLoaded(element);
        element.src = element.getAttribute('data-src');
      });
    }
  }
  onAssetLoaded(images) {
    this.length += 1;
    const percent = this.length / this.elements.images.length;
    const percentage = `${Math.round(percent * 100)}%`;
    this.elements.percentage.innerHTML = percentage;
    if (percent === 1) {
      this.onLoaded();
    }
  }
  onLoaded() {
    this.animateOut = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
      delay: 1.5
    });
    this.animateOut.to(this.bigTextSpans, {
      x: '-100%',
      skewX: '-12deg',
      autoAlpha: 0,
      transformOrigin: 'center left',
      stagger: 0.05,
      duration: 0.15,
      ease: 'expo.in'
    }).to(this.elements.smallText, {
      autoAlpha: 0,
      ease: 'expo.out'
    }, '<');
    this.animateOut.to(this.element, {
      autoAlpha: 0,
      duration: 1,
      ease: 'expo.out'
    });
    this.animateOut.call(_ => {
      this.emit('completed');
      console.log("Hello fellow Developer. I hope you don't find many bugs here.");
    });
  }
  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}

/***/ }),

/***/ "./app/components/utils/Debug.js":
/*!***************************************!*\
  !*** ./app/components/utils/Debug.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lil-gui */ "./node_modules/lil-gui/dist/lil-gui.esm.js");

class Debug {
  constructor() {
    this.active = window.location.hash === '#debug';
    if (this.active) {
      this.ui = new lil_gui__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  }
}

/***/ }),

/***/ "./app/components/utils/EventEmitter.js":
/*!**********************************************!*\
  !*** ./app/components/utils/EventEmitter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventEmitter)
/* harmony export */ });
class EventEmitter {
  constructor() {
    this.callbacks = {};
    this.callbacks.base = {};
  }
  on(_names, callback) {
    // Errors
    if (typeof _names === 'undefined' || _names === '') {
      console.warn('wrong names');
      return false;
    }
    if (typeof callback === 'undefined') {
      console.warn('wrong callback');
      return false;
    }

    // Resolve names
    const names = this.resolveNames(_names);

    // Each name
    names.forEach(_name => {
      // Resolve name
      const name = this.resolveName(_name);

      // Create namespace if not exist
      if (!(this.callbacks[name.namespace] instanceof Object)) {
        this.callbacks[name.namespace] = {};
      }

      // Create callback if not exist
      if (!(this.callbacks[name.namespace][name.value] instanceof Array)) {
        this.callbacks[name.namespace][name.value] = [];
      }

      // Add callback
      this.callbacks[name.namespace][name.value].push(callback);
    });
    return this;
  }
  off(_names) {
    // Errors
    if (typeof _names === 'undefined' || _names === '') {
      console.warn('wrong name');
      return false;
    }

    // Resolve names
    const names = this.resolveNames(_names);

    // Each name
    names.forEach(_name => {
      // Resolve name
      const name = this.resolveName(_name);

      // Remove namespace
      if (name.namespace !== 'base' && name.value === '') {
        delete this.callbacks[name.namespace];
      }

      // Remove specific callback in namespace
      else {
        // Default
        if (name.namespace === 'base') {
          // Try to remove from each namespace
          for (const namespace in this.callbacks) {
            if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
              delete this.callbacks[namespace][name.value];

              // Remove namespace if empty
              if (Object.keys(this.callbacks[namespace]).length === 0) {
                delete this.callbacks[namespace];
              }
            }
          }
        }

        // Specified namespace
        else if (this.callbacks[name.namespace] instanceof Object && this.callbacks[name.namespace][name.value] instanceof Array) {
          delete this.callbacks[name.namespace][name.value];

          // Remove namespace if empty
          if (Object.keys(this.callbacks[name.namespace]).length === 0) {
            delete this.callbacks[name.namespace];
          }
        }
      }
    });
    return this;
  }
  trigger(_name, _args) {
    // Errors
    if (typeof _name === 'undefined' || _name === '') {
      console.warn('wrong name');
      return false;
    }
    let finalResult = null;
    let result = null;

    // Default args
    const args = !(_args instanceof Array) ? [] : _args;

    // Resolve names (should on have one event)
    let name = this.resolveNames(_name);

    // Resolve name
    name = this.resolveName(name[0]);

    // Default namespace
    if (name.namespace === 'base') {
      // Try to find callback in each namespace
      for (const namespace in this.callbacks) {
        if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
          this.callbacks[namespace][name.value].forEach(function (callback) {
            result = callback.apply(this, args);
            if (typeof finalResult === 'undefined') {
              finalResult = result;
            }
          });
        }
      }
    }

    // Specified namespace
    else if (this.callbacks[name.namespace] instanceof Object) {
      if (name.value === '') {
        console.warn('wrong name');
        return this;
      }
      this.callbacks[name.namespace][name.value].forEach(function (callback) {
        result = callback.apply(this, args);
        if (typeof finalResult === 'undefined') {
          finalResult = result;
        }
      });
    }
    return finalResult;
  }
  resolveNames(_names) {
    let names = _names;
    names = names.replace(/[^a-zA-Z0-9 ,/.]/g, '');
    names = names.replace(/[,/]+/g, ' ');
    names = names.split(' ');
    return names;
  }
  resolveName(name) {
    const newName = {};
    const parts = name.split('.');
    newName.original = name;
    newName.value = parts[0];
    newName.namespace = 'base'; // Base namespace

    // Specified namespace
    if (parts.length > 1 && parts[1] !== '') {
      newName.namespace = parts[1];
    }
    return newName;
  }
}

/***/ }),

/***/ "./app/components/utils/Resources.js":
/*!*******************************************!*\
  !*** ./app/components/utils/Resources.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/DRACOLoader */ "./node_modules/three/examples/jsm/loaders/DRACOLoader.js");
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventEmitter */ "./app/components/utils/EventEmitter.js");




class Resources extends _EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(sources) {
    super();
    this.sources = sources;
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.createLoaders();
    this.startLoading();
  }
  createLoaders() {
    this.loaders = {};
    this.loaders.dracoLoader = new three_examples_jsm_loaders_DRACOLoader__WEBPACK_IMPORTED_MODULE_1__.DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath('/draco/');
    this.loaders.gltfLoader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();
    this.loaders.gltfLoader.setDRACOLoader(this.dracoLoader);
    this.loaders.textureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.TextureLoader();
    this.loaders.cubeTextureLoader = new three__WEBPACK_IMPORTED_MODULE_3__.CubeTextureLoader();
  }
  startLoading() {
    for (const source of this.sources) {
      if (source.type === 'gltfModel') {
        this.loaders.gltfLoader.load(source.path, file => {
          this.sourceLoaded(source, file);
        });
      }
      if (source.type === 'texture') {
        this.loaders.textureLoader.load(source.path, file => {
          this.sourceLoaded(source, file);
        });
      }
      if (source.type === 'cubeTexture') {
        this.loaders.cubeTextureLoader.load(source.path, file => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger('ready');
    }
  }
}

/***/ }),

/***/ "./app/components/utils/Sizes.js":
/*!***************************************!*\
  !*** ./app/components/utils/Sizes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sizes)
/* harmony export */ });
class Sizes {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}

/***/ }),

/***/ "./app/components/utils/SizesCanvas.js":
/*!*********************************************!*\
  !*** ./app/components/utils/SizesCanvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SizesCanvas)
/* harmony export */ });
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Canvas */ "./app/components/Canvas/index.js");

class SizesCanvas {
  constructor() {
    this.experience = new _Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.canvas = this.experience.canvas;
    if (this.canvas) {
      this.width = this.canvas.getBoundingClientRect().width;
      this.height = this.canvas.getBoundingClientRect().height;
    }
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Preloader */ "./app/components/Preloader.js");
/* harmony import */ var components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Nav */ "./app/components/Nav.js");
/* harmony import */ var components_Experience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Experience */ "./app/components/Experience/index.js");
/* harmony import */ var components_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Canvas */ "./app/components/Canvas/index.js");
/* harmony import */ var pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pages/Home */ "./app/pages/Home/index.js");
/* harmony import */ var pages_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pages/About */ "./app/pages/About/index.js");
/* harmony import */ var pages_Work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pages/Work */ "./app/pages/Work/index.js");







class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    // this.createExperience()
    this.createGallery();
    this.createPages();
    this.addLinkListeners();
    this.addEventListeners();
    this.update();
  }
  createPreloader() {
    this.preloader = new components_Preloader__WEBPACK_IMPORTED_MODULE_0__["default"]();
    const sessionStorage = window.sessionStorage;
    if (sessionStorage.getItem('dontLoad') == null) {
      sessionStorage.setItem('dontLoad', 'true');
      this.preloader.once('completed', _ => this.onPreloaded());
      this.createExperience();
    } else {
      document.querySelector('.intro').remove();
      this.preloader.once('completed', _ => this.onPreloadedNoIntro());
    }
  }
  createExperience() {
    this.experience = new components_Experience__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('.intro_pieces'));
  }
  createGallery() {
    if (this.template === 'home') {
      this.gallery = new components_Canvas__WEBPACK_IMPORTED_MODULE_3__["default"](this.template);
    }
  }
  createIntro() {
    this.intro = this.experience.intro;
    this.intro.show();
    this.intro.once('out', _ => this.introEnded());
  }
  createNav() {
    this.nav = new components_Nav__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
    this.body = document.querySelector('body');
    this.body.setAttribute('data-template', this.template);
  }
  createPages() {
    this.pages = {
      home: new pages_Home__WEBPACK_IMPORTED_MODULE_4__["default"]({
        template: this.template
      }),
      about: new pages_About__WEBPACK_IMPORTED_MODULE_5__["default"]({
        template: this.template
      }),
      work: new pages_Work__WEBPACK_IMPORTED_MODULE_6__["default"]({
        template: this.template
      })
    };
    this.page = this.pages[this.template];
    this.page.create();
  }
  onPreloaded() {
    this.preloader.destroy();
    this.createIntro();
  }
  onPreloadedNoIntro() {
    this.preloader.destroy();
    this.createNav();
    this.page.show();
    document.documentElement.style.overflow = 'auto';
  }
  introEnded() {
    this.intro.destroy();
    this.createNav();
    this.page.show();
    document.documentElement.style.overflow = 'auto';
  }
  introDestroy() {
    this.intro.destroy();
  }
  onPopState() {
    this.onChange(window.location.pathname);
  }
  async onChange(url) {
    await this.page.hide();
    const request = await window.fetch(url);
    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');
      window.history.pushState({}, '', url);
      div.innerHTML = html;
      const divContent = div.querySelector('.content');
      this.template = divContent.getAttribute('data-template');
      this.content.setAttribute('data-template', this.template);
      this.body.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;
      this.page = this.pages[this.template];
      this.page.create();
      this.page.show();
      this.createGallery();
      this.addLinkListeners();
    } else {
      console.log('error');
    }
  }
  onResize() {
    if (this.experience && this.experience.onResize) {
      this.experience.onResize();
    }
    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
    if (this.gallery && this.gallery.onResize) {
      this.gallery.onResize();
    }
  }
  onTouchDown(event) {
    if (this.gallery && this.gallery.onTouchDown) {
      this.gallery.onTouchDown(event);
    }
  }
  onTouchMove(event) {
    if (this.gallery && this.gallery.onTouchMove) {
      this.gallery.onTouchMove(event);
    }
  }
  onTouchUp(event) {
    if (this.gallery && this.gallery.onTouchUp) {
      this.gallery.onTouchUp(event);
    }
  }
  update() {
    if (this.experience && this.experience.update) {
      this.experience.update();
    }
    if (this.page && this.page.update) {
      this.page.update();
    }
    if (this.gallery && this.gallery.update) {
      this.gallery.update(this.page.scroll);
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
  addEventListeners() {
    window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('mousedown', this.onTouchDown.bind(this));
    window.addEventListener('mousemove', this.onTouchMove.bind(this));
    window.addEventListener('mouseup', this.onTouchUp.bind(this));
    window.addEventListener('touchstart', this.onTouchDown.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('touchend', this.onTouchUp.bind(this));
    if (this.gallery && this.gallery.addEventListeners) {
      this.gallery.addEventListeners();
    }
    if (this.experience && this.experience.addEventListeners) {
      this.experience.addEventListeners();
    }
  }
  addLinkListeners() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.onclick = event => {
        if (!link.classList.contains('prevent')) {
          event.preventDefault();
          const {
            href
          } = link;
          this.onChange(href);
          window.scrollTo(0, 0);
        }
      };
    });
  }
}
new App();

/***/ }),

/***/ "./app/pages/About/index.js":
/*!**********************************!*\
  !*** ./app/pages/About/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class About extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    template
  }) {
    super({
      id: 'about',
      element: '.about',
      elements: {
        wrapper: '.about_wrapper',
        nav: '.nav'
      }
    });
    this.template = template;
  }
}

/***/ }),

/***/ "./app/pages/Home/index.js":
/*!*********************************!*\
  !*** ./app/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Home extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    template
  }) {
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home_wrapper',
        nav: '.nav',
        vortexBig: '.home_works_title_icon',
        works: '.home_works_wrapper'
      }
    });
    this.template = template;
    if (this.template === 'home') {
      this.runLottie();
    }
  }
  runLottie() {
    // setTimeout(() => {
    //   Lottie.loadAnimation({
    //     container: this.elements.vortexBig,
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'data.json'
    //   })
    // }, 0.1)
  }
  changeBgColor() {}
}

/***/ }),

/***/ "./app/pages/Work/index.js":
/*!*********************************!*\
  !*** ./app/pages/Work/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Work)
/* harmony export */ });
/* harmony import */ var classes_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classes/Page */ "./app/classes/Page.js");

class Work extends classes_Page__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    template
  }) {
    super({
      id: 'work',
      element: '.work',
      elements: {
        wrapper: '.work_wrapper',
        nav: '.nav',
        featured_text: '.work_content_featured_text'
      }
    });
    this.template = template;
  }
}

/***/ }),

/***/ "./app/utils/splitText.js":
/*!********************************!*\
  !*** ./app/utils/splitText.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "splitText": () => (/* binding */ splitText),
/* harmony export */   "splitWords": () => (/* binding */ splitWords)
/* harmony export */ });
function splitText(text) {
  const innerText = text.innerHTML;
  const textArray = [...innerText];
  let result = '';
  textArray.forEach(function (char) {
    result += '<span><span>' + char + '</span></span>';
  });
  text.innerHTML = result;
}
function splitWords(words) {
  const innerWords = words.innerHTML;
  const wordsSplit = innerWords.split(' ');
  let result = '';
  wordsSplit.forEach(function (char) {
    result += '<span><span>' + char + '</span></span>';
  });
  words.innerHTML = result;
}


/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1668350453941
      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"publicPath":"","locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6271a0c681d68870acd7")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "myproject:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemyproject"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyproject"] = self["webpackChunkmyproject"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./app/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./styles/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map