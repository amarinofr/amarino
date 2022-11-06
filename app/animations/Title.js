import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Title extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
        titleSpans: element.querySelectorAll('span span')
      }
    })

    this.tl = GSAP.timeline()

    this.delay = this.element.dataset.delay
  }

  animateIn () {
    this.tl.restart()

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
    }, '<')
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0,
      scaleX: '3.5'
    })

    GSAP.set(this.elements.titleSpans, {
      autoAlpha: 0,
      x: '100%',
      skewX: '12deg'
    })
  }
}
