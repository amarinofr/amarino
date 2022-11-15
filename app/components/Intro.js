import GSAP from 'gsap'

import Component from 'classes/Component'

export default class Intro extends Component {
  constructor () {
    super({
      element: '.intro',
      elements: {
        wrapper: '.intro_wrapper',
        firstView: '.intro_first_view',
        secondView: '.intro_second_view',
        thirdView: '.intro_third_view',
        secondViewButton: '.intro_second_view_button',
        thirdViewButton: '.intro_third_view_button',
        introUI: '.intro_ui',
        skip: '.intro_skip'
      }
    })
  }

  show () {
    this.emit('show')
    this.createSkipInteraction()
  }

  createSkipInteraction () {
    this.elements.skip.addEventListener('click', () => {
      this.animateOut()
    })
  }

  animateOut () {
    this.introOut = GSAP.timeline()

    this.introOut.to(this.element, {
      autoAlpha: 0,
      duration: 0.5
    })

    this.introOut.call(_ => {
      this.emit('out')
    })
  }

  destroy () {
    this.element.remove()
  }
}
