import Page from 'classes/Page'

export default class About extends Page {
  constructor ({ template }) {
    super({
      id: 'about',

      element: '.about',
      elements: {
        wrapper: '.about_wrapper',
        nav: '.nav'
      }
    })

    this.template = template
  }
}
