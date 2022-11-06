import Page from 'classes/Page'

export default class Work extends Page {
  constructor ({ template }) {
    super({
      id: 'work',
      element: '.work',
      elements: {
        wrapper: '.work_wrapper',
        nav: '.nav',
        featured_text: '.work_content_featured_text'
      }
    })

    this.template = template
  }
}
