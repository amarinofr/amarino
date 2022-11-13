import GSAP from 'gsap'
import Prefix from 'prefix'
import { splitWords } from 'utils/splitText'

import Title from 'animations/Title'
import MiniTitle from 'animations/MiniTitle'
import AboutTitle from 'animations/AboutTitle'
import ChangeBgColor from 'animations/ChangeBgColor'
import Line from 'animations/Line'

import AsyncLoad from 'classes/AsyncLoad'

export default class Page {
  constructor ({ id, element, elements }) {
    this.selector = element
    this.selectorChildren = {
      ...elements,
      animationsTitles: '[data-animation="title"]',
      animationsMiniTitles: '[data-animation="miniTitle"]',
      animationsAboutTitles: '[data-animation="aboutTitle"]',
      animationsBg: '[data-animation="change-bg-color"]',
      animationsLines: '[data-animation="line"]',

      asyncloaders: '[data-src]'
    }
    this.id = id
    this.transformPrefix = Prefix('transform')
    this.onMouseWheelEvent = this.easeScroll.bind(this)
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    for (const [key, entry] of Object.entries(this.selectorChildren)) {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }
    }

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      smoothness: 8 /* The Higher the less smooth it is */
    }

    this.scroll.smoothness = this.scroll.smoothness / 100

    this.createAsyncLoad()
  }

  createAnimations () {

    if (this.elements.animationsTitles) {
      this.animationsTitles = this.elements.animationsTitles.forEach(element => {
        splitWords(element)

        return new Title({
          element
        })
      })
    }

    if (this.elements.animationsMiniTitles) {
      if (this.elements.animationsMiniTitles.length >= 2) {
        this.animationsMiniTitles = this.elements.animationsMiniTitles.forEach(element => {
          return new MiniTitle({
            element
          })
        })
      } else {
        this.animationsMiniTitles =
          new MiniTitle({
            element: this.elements.animationsMiniTitles
          })
      }
    }

    if (this.elements.animationsAboutTitles) {
      this.animationsAboutTitles = this.elements.animationsAboutTitles.forEach(element => {
        splitWords(element)

        return new AboutTitle({
          element
        })
      })
    }

    if (this.elements.animationsLines) {
      this.animationsLines = this.elements.animationsLines.forEach(element => {
        return new Line({
          element
        })
      })
    }

    if (this.elements.animationsBg) {
      if (this.elements.animationsBg.length >= 2) {
        this.animationsBg = this.elements.animationsBg.forEach(element => {
          return new ChangeBgColor({
            element
          })
        })
      } else {
        this.animationsBg = [
          new ChangeBgColor({
            element: this.elements.animationsBg
          })
        ]
      }
    }
  }

  show () {
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline()
      this.animationIn.to(this.element, {
        autoAlpha: 1,
        onComplete: _ => {
          this.addEventListeners()
          this.onResize()
          this.createAnimations()

          resolve()
        }
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })

      window.scrollTo(0, 0)
    })
  }

  createAsyncLoad () {
    if (this.elements.asyncloaders) {
      this.elements.asyncloaders.forEach( element => {
        return new AsyncLoad({ element })
      })
    }

  }

  onResize () {
    this.scroll.limit = this.elements.wrapper.clientHeight + 'px'
    document.body.style.height = this.scroll.limit
  }

  easeScroll () {
    this.scroll.target = window.scrollY
  }

  update () {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.smoothness)
    this.scroll.target = Math.floor(this.scroll.target * 100) / 100

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`

    this.scroll.last = this.scroll.current
  }

  addEventListeners () {
    window.addEventListener('scroll', this.onMouseWheelEvent)
  }

  removeEventListeners () {

  }
}
