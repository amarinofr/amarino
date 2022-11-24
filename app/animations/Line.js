import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Line extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
        lines: element.querySelectorAll('.line')
      }
    })

    this.delay = this.element.dataset.delay

    console.log(this.elements.lines);

    this.tl = GSAP.timeline()
  }

  animateIn () {
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.5,
      delay: this.delay,
      ease: 'expo.out'
    })
  }

  animateOut () {

  }
}
