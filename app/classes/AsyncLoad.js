import GSAP from 'gsap'

import Component from 'classes/Component'

export default class AsyncLoad extends Component {
  constructor ({ element }) {
    super({ element })

    this.createObserver()
    this.element.src = this.element.getAttribute('data-src')

    if (this.element.dataset.delay) {
      this.delay = this.element.dataset.delay
    } else {
      this.delay = 0
    }

    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  createObserver () {
    this.observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          GSAP.to(entry.target, {
            autoAlpha: 1,
            ease: 'expo.out',
            delay: this.delay,
            duration: 5
          })
        }
      })
    }, {threshold: 0.25})

    this.observer.observe(this.element)
  }
}
