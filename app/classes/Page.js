import GSAP from 'gsap'
import Prefix from 'prefix'
import { each } from 'lodash'

export default class Page {
  constructor ({ id, element, elements }) {
    this.selector = element
    this.selectorChildren = {
      ...elements
    }
    this.id = id
    this.transformPrefix = Prefix('transform')
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
      smoothness: 10 /* The Higher the less smooth it is */
    }

    this.scroll.smoothness = this.scroll.smoothness / 100

    this.body = document.body
    this.html = document.documentElement
    this.main = document.querySelector('.content')

    each(this.selectorChildren, (entry, key) => {
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
    })

    this.createAnimations()
  }

  createAnimations () {

  }

  show () {
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline()

      this.animationIn.fromTo(this.element, {
        autoAlpha: 0
      }, {
        autoAlpha: 1
      })

      this.animationIn.call(_ => {
        this.addEventListeners()

        resolve()
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
    })
  }

  onResize () {
    this.scroll.limit = this.main.clientHeight + 'px'

    each(this.animationsTitles, animation => animation.onResize())
  }

  easeScroll (event) {
    this.scroll.target = window.scrollY
  }

  update () {
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.smoothness)
    this.scroll.target = Math.floor(this.scroll.target * 100) / 100

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    this.main.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
  }

  addEventListeners () {
    window.addEventListener('scroll', this.easeScroll)
  }

  removeEventListeners () {

  }
}
