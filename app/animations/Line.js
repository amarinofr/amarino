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

    console.log(this.elements.lines)

    this.tl = GSAP.timeline()

    // this.showLine()
  }

  animateIn () {
    GSAP.to(this.elements.lines, {
      autoAlpha: 1,
      scaleX: 1,
      duration: 0.5,
      ease: 'expo.out',
      delay: 0.25
    })
  }

  animateOut () {
    GSAP.set(this.elements.lines, {
      autoAlpha: 0,
      scaleX: 0
    })
  }
}
