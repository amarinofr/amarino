import Page from 'classes/Page'
import Lottie from 'lottie-web'

export default class Home extends Page {
  constructor () {
    super({
      id: 'home',
      element: '.home',
      elements: {
        wrapper: '.home_wrapper',
        nav: '.nav',
        vortexBig: '.home_works_title_icon',
        works: '.home_works_wrapper'
      }
    })

    this.runLottie()
  }

  runLottie () {
    setTimeout(() => {
      Lottie.loadAnimation({
        container: this.elements.vortexBig,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data.json'
      })
    }, 1)
  }

  changeBgColor () {

  }
}
