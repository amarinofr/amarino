import each from 'lodash/each'
import GSAP from 'gsap'
import { splitText } from 'utils/splitText'

import Component from 'classes/Component'

export default class Preloader extends Component {
  constructor () {
    super({
      element: '.preloader',
      elements: {
        wrapper: '.preloader_wrapper',
        bigText: '.preloader_big_text',
        smallText: '.preloader_small_text',
        percentage: '.preloader_bottom_number',
        preloaderBottom: '.preloader_bottom',
        images: document.querySelectorAll('img')
      }

    })

    splitText(this.elements.bigText)
    splitText(this.elements.smallText)

    this.bigTextSpans = this.elements.bigText.querySelectorAll('span span')
    this.smallTextSpans = this.elements.smallText.querySelectorAll('span span')
    this.lineBottom = this.elements.preloaderBottom.querySelector('.line_bottom')
    this.preloaderLeft = this.elements.preloaderBottom.querySelector('.preloader_bottom_left')
    this.preloaderRight = this.elements.preloaderBottom.querySelector('.preloader_bottom_right')

    this.body = document.body

    this.length = 0

    this.initLoader()
  }

  initLoader () {
    return new Promise(resolve => {
      this.tl = GSAP.timeline()

      document.documentElement.style.overflow = 'hidden'

      this.tl.to(this.elements.bigText, {
        scaleX: '1',
        duration: 0.75,
        ease: 'expo.out',
        autoAlpha: 1
      }, '<').to(this.bigTextSpans, {
        x: '0%',
        skewX: '0',
        transformOrigin: 'center left',
        stagger: 0.05,
        duration: 0.75,
        ease: 'expo.out'
      }, '+=0.025').to(this.bigTextSpans, {
        autoAlpha: 1,
        stagger: 0.09,
        duration: 0.6,
        ease: 'expo.out'
      }, '<').to(this.elements.smallText, {
        scaleX: '1',
        duration: 0.75,
        ease: 'expo.out',
        autoAlpha: 1
      }, '<').to(this.smallTextSpans, {
        x: '0%',
        skewX: '0',
        stagger: 0.05,
        duration: 0.75,
        ease: 'expo.out'
      }, '<').to(this.smallTextSpans, {
        autoAlpha: 1,
        stagger: 0.02,
        duration: 0.6,
        ease: 'expo.out'
      }, '<').to(this.lineBottom, {
        scaleX: '1',
        duration: 0.5,
        delay: 0.5,
        autoAlpha: 1,
        transformOrigin: 'center center',
        ease: 'expo.out'
      }, '<').to(this.preloaderLeft, {
        y: '0',
        autoAlpha: 1,
        duration: 0.25,
        ease: 'expo.out'
      }, '-=0.5').to(this.preloaderRight, {
        y: '0',
        autoAlpha: 1,
        duration: 0.25,
        ease: 'expo.out'
      }, '<').call(_ => {
        this.createLoader()

        resolve()
      })
    })
  }

  createLoader () {
    each(this.elements.images, element => {
      element.onload = _ => this.onAssetLoaded(element)
      element.src = element.getAttribute('data-src')
    })
  }

  onAssetLoaded (images) {
    this.length += 1
    const percent = this.length / this.elements.images.length
    const percentage = `${Math.round(percent * 100)}%`

    this.elements.percentage.innerHTML = percentage

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    this.animateOut = GSAP.timeline({
      delay: 1.5
    })

    this.animateOut.to(this.bigTextSpans, {
      x: '-100%',
      skewX: '-12deg',
      autoAlpha: 0,
      transformOrigin: 'center left',
      stagger: 0.05,
      duration: 0.15,
      ease: 'expo.in'
    }).to(this.elements.smallText, {
      autoAlpha: 0,
      ease: 'expo.out'
    }, '<')

    this.animateOut.to(this.element, {
      autoAlpha: 0,
      duration: 1,
      ease: 'expo.out'
    })

    this.animateOut.call(_ => {
      this.emit('completed')
      console.log("Hello fellow Developer. I hope you don't find many bugs here.")
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
