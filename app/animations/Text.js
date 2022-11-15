import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Text extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: element.querySelector('span span')
    })

    this.tl = GSAP.timeline()

    if (this.element.dataset.delay) {
      this.delay = this.element.dataset.delay
    } else {
      this.delay = 0.25
    }

    if (this.element.dataset.duration) {
      this.duration = this.element.dataset.duration
    } else {
      this.duration = 1.5
    }
  }

  animateIn () {
    this.tl.to(this.element, {
      autoAlpha: 1,
      duration: this.duration,
      delay: this.delay,
      y: '0',
      ease: 'power4.out'
    })
  }

  animateOut () {

  }
}
