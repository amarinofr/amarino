import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class ChangeBgColor extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
        thumbnail: '.home_works_single_thumb'
      }
    })

    this.tl = GSAP.timeline()
  }

  animateIn () {
    this.body = document.body
    this.body.classList.remove('white')
    this.body.classList.add('black')
  }

  animateOut () {
    this.body = document.body
    this.body.classList.remove('black')
    this.body.classList.add('white')
  }
}
