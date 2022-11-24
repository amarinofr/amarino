import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class Parallax extends Animation {
  constructor ({ element, elements, scroll }) {
    super({
      element,
      scroll,
      elements: element.querySelector('span span')
    })

    this.tl = GSAP.timeline()

    this.addEventListeners()

    if (this.element.dataset.parallax) {
      this.parallax = this.element.dataset.parallax
    } else {
      this.parallax = 0.25
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

  addEventListeners () {
    this.scroll.target = window.scrollY

    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.parallax)

    console.log();
  }
}
