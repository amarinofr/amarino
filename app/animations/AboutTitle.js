import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class AboutTitle extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
        titleSpans: element.querySelectorAll('span span')
      }
    })

    this.tl = GSAP.timeline()

    GSAP.set(this.element, {
      autoAlpha: 0,
      scaleY: '0'
    })

    GSAP.set(this.elements.titleSpans, {
      autoAlpha: 0,
      y: '100%',
      scaleY: '0.3',
      skewY: '12deg'
    })
  }

  animateIn () {
    this.tl.to(this.element, {
      autoAlpha: 1,
      scaleY: '1',
      duration: 0.75,
      ease: 'expo.out'
    }).to(this.elements.titleSpans, {
      y: '0%',
      skewY: '0',
      scaleY: '1',
      transformOrigin: 'bottom center',
      stagger: 0.05,
      duration: 0.5,
      ease: 'expo.out'
    }, '+=0.025').to(this.elements.titleSpans, {
      autoAlpha: 1,
      stagger: 0.06,
      duration: 0.5
    }, '<')
  }

  animateOut () {

  }
}
