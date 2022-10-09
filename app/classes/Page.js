import GSAP from 'gsap'
import Prefix from 'prefix'
import { each, map } from 'lodash'
import { splitText, splitWords } from 'utils/splitText'

import Title from 'animations/Title'
import MiniTitle from 'animations/MiniTitle'
import ChangeBgColor from 'animations/ChangeBgColor'

import AsyncLoad from 'classes/AsyncLoad'

export default class Page {
  constructor ({ id, element, elements }) {
    this.selector = element
    this.selectorChildren = {
      ...elements,
      animationsTitles: '[data-animation="title"]',
      animationsMiniTitles: '[data-animation="miniTitle"]',
      animationsBg: '[data-animation="change-bg-color"]',

      asyncloaders: '[data-src]'
    }
    this.id = id
    this.transformPrefix = Prefix('transform')
    this.onMouseWheelEvent = this.easeScroll.bind(this)
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

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
    this.animationsTitles = each(this.elements.animationsTitles, element => {
      splitWords(element)

      return new Title({
        element
      })
    })

    this.animationsMiniTitles = each(this.elements.animationsMiniTitles, element => {
      splitWords(element)

      return new MiniTitle({
        element
      })
    })

    if (this.elements.animationsBg) {
      if (this.elements.animationsBg.length >= 2) {
        this.animationsBg = map(this.elements.animationsBg, element => {
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

    // this.animationsBg = each(this.elements.animationsBg, element => {
    //   console.log(element)
    //   return new ChangeBgColor({
    //     element
    //   })
    // })
  }

  show () {
    return new Promise(resolve => {
      this.animationIn = GSAP.timeline()

      this.animationIn.to(this.element, {
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
    each(this.elements.asyncloaders, element => {
      return new AsyncLoad({ element })
    })
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
  }

  addEventListeners () {
    window.addEventListener('scroll', this.onMouseWheelEvent)
  }

  removeEventListeners () {

  }
}
