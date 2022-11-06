import GSAP from 'gsap'

import Animation from 'classes/Animation'

export default class ShowMultiple extends Animation {
  constructor ({ element, elements }) {
    super({
      element,
      elements: {
        children: element.children
      }
    })

    console.log(this.elements.children)

    console.log(this.element)

    this.tl = GSAP.timeline()

    // this.showLine()
  }

  animateIn () {
  //   GSAP.to(this.elements.lines, {
  //     autoAlpha: 1,
  //     scaleX: 1,
  //     translateY: '100%',
  //     duration: 0.5,
  //     ease: 'expo.out',
  //     delay: 0.25
  //   })
  // }

  // animateOut () {
  //   GSAP.set(this.elements.lines, {
  //     autoAlpha: 0,
  //     scaleX: 0,
  //     translateY: '0'
  //   })
  }
}
