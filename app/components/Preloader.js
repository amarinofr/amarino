import each from 'lodash/each'
import GSAP from 'gsap'

import Component from 'classes/Component'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        wrapper: '.preloader_wrapper'
      }
    })

    this.length = 0

    this.createLoader()
  }

  createLoader () {
    each(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })
  }

  onAssetLoaded (image) {
    this.length += 1

    const percent = this.length / this.elements.images.length

    this.elements.percent.innerHTML = `${Math.round(percent * 100)}%`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    return new Promise(resolve => {
      this.animateOut = GSAP.timeline()
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
