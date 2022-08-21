import each from 'lodash/each'

import Preloader from 'components/Preloader'
import Nav from 'components/Nav'
import Experience from 'components/Experience'

import Home from 'pages/Home'
import About from 'pages/About'
import Work from 'pages/Work'

class App {
  constructor () {
    this.createPreloader()
    this.createContent()
    this.createExperience()
    this.createPages()

    this.addLinkListeners()
    this.addEventListeners()

    this.update()
  }

  createPreloader () {
    this.preloader = new Preloader()
    this.preloader.once('completed', _ => this.onPreloaded())
  }

  createExperience () {
    this.experience = new Experience(document.querySelector('.intro_pieces'))
  }

  createNav () {
    this.nav = new Nav()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
    this.body = document.querySelector('body')
    this.body.setAttribute('data-template', this.template)
  }

  createPages () {
    this.pages = {
      home: new Home(),
      about: new About(),
      work: new Work()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  onPreloaded () {
    this.preloader.destroy()
    this.createNav()
    this.page.show()
  }

  async onChange (url) {
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.body.setAttribute('data-template', this.template)

      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]

      this.page.create()

      this.page.show()

      this.addLinkListeners()
    } else {
      console.log('error')
    }
  }

  onResize () {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
    if (this.experience && this.experience.onResize) {
      this.experience.onResize()
    }
  }

  update () {
    if (this.page && this.page.update) {
      this.page.update()
    }

    if (this.experience && this.experience.update) {
      this.experience.update()
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners () {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    each(links, link => {
      link.onclick = event => {
        if (!link.classList.contains('prevent')) {
          event.preventDefault()
          const { href } = link

          this.onChange(href)

          window.scrollTo(0, 0)
        }
      }
    })
  }
}

new App()
