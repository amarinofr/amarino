import GSAP from 'gsap'

import Animation from 'classes/Animation'

import { splitWords } from 'utils/splitText'

export default class MiniTitle extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
      }
    })

    splitWords(this.element)

    this.tl = GSAP.timeline()

    this.titleSpans = this.element.querySelectorAll('span span')

    if (this.element.dataset.delay) {
      this.delay = this.element.dataset.delay
    }
  }

  animateIn () {
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleX: '1',
      duration: 0.75,
      ease: 'expo.out'
    }).to(this.titleSpans, {
      x: '0%',
      skewX: '0',
      transformOrigin: 'center left',
      stagger: 0.05,
      duration: 0.75,
      ease: 'expo.out'
    }, '+=0.025').to(this.titleSpans, {
      autoAlpha: 1,
      stagger: 0.09,
      duration: 0.6,
      ease: 'expo.out'
    }, '<')
  }

  animateOut () {

  }
}
