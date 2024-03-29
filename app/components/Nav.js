import GSAP from 'gsap'

import Component from 'classes/Component'

export default class Nav extends Component {
  constructor () {
    super({
      element: '.nav_header',
      elements: {
        logo: '.nav_logo',
        list: '.nav_list_link',
        home: '.home_link',
        about: '.about_link',
        works: '.works_link',
        // line: '.line_top',
        social: '.nav_list_social_links_list'
      }
    })

    this.line = this.element.querySelector('.line_top')

    this.show()
  }

  show () {
    this.tl = GSAP.timeline({
      duration: 0.5,
      ease: 'expo.out'
    })

    this.tl.to(this.line, {
      scaleX: '100%',
      autoAlpha: 1
    }).to(this.elements.logo, {
      autoAlpha: 1,
      y: '0'
    }, '-=0.15').to(this.elements.list, {
      autoAlpha: 1,
      y: '0'
    }).to(this.elements.social, {
      autoAlpha: 1,
      y: '0'
    })
  }
}
