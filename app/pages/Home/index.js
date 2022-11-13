import Page from 'classes/Page'

export default class Home extends Page {
  constructor ({ template }) {
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

    this.template = template

    if (this.template === 'home') {
      this.runLottie()
    }
  }

  runLottie () {
    // setTimeout(() => {
    //   Lottie.loadAnimation({
    //     container: this.elements.vortexBig,
    //     renderer: 'svg',
    //     loop: true,
    //     autoplay: true,
    //     path: 'data.json'
    //   })
    // }, 0.1)
  }

  changeBgColor () {

  }
}
