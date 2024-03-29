import Preloader from 'components/Preloader'
import Nav from 'components/Nav'
import Experience from 'components/Experience'
import Canvas from 'components/Canvas'

import Home from 'pages/Home'
import About from 'pages/About'
import Work from 'pages/Work'

class App {
  constructor () {
    this.createPreloader()
    this.createContent()
    this.createGallery()
    this.createPages()

    this.addLinkListeners()
    this.addEventListeners()

    this.update()

    this.homeLink = document.querySelector('.home_link')
    this.worksLink = document.querySelector('.works_link')
    this.aboutLink = document.querySelector('.about_link')
  }

  createPreloader () {
    this.preloader = new Preloader()

    this.preloader.once('completed', _ => this.onPreloaded())
    this.createExperience()

    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', 'G-BCPC5ZNGWR')
  }

  createExperience () {
    this.experience = new Experience(document.querySelector('.intro_pieces'))
  }

  createGallery () {
    if (this.template === 'home') {
      this.gallery = new Canvas(this.template)
    }
  }

  createIntro () {
    this.intro = this.experience.intro
    this.intro.show()
    this.intro.once('out', _ => this.introEnded())
  }

  createNav () {
    this.nav = new Nav()
    this.navChangeState()
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
    this.body = document.querySelector('body')
    this.body.setAttribute('data-template', this.template)
  }

  createPages () {
    this.pages = {
      home: new Home({
        template: this.template
      }),
      about: new About({
        template: this.template
      }),
      work: new Work({
        template: this.template
      })
    }

    this.page = this.pages[this.template]

    this.page.create()
  }

  onPreloaded () {
    this.preloader.destroy()
    this.createIntro()
  }

  onPreloadedNoIntro () {
    this.preloader.destroy()
    this.createNav()
    this.page.show()
    document.documentElement.style.overflow = 'auto'
  }

  introEnded () {
    this.intro.destroy()
    this.createNav()
    this.page.show()
    document.documentElement.style.overflow = 'auto'
  }

  introDestroy () {
    this.intro.destroy()
  }

  onPopState () {
    this.onChange(window.location.pathname)
  }

  navChangeState () {
    if (this.template === 'home') {
      this.homeLink.classList.add('active')
      this.aboutLink.classList.remove('active')
      this.worksLink.classList.remove('active')
    } else if (this.template === 'work') {
      this.homeLink.classList.remove('active')
      this.aboutLink.classList.remove('active')
      this.worksLink.classList.add('active')
    } else if (this.template === 'about') {
      this.homeLink.classList.remove('active')
      this.aboutLink.classList.add('active')
      this.worksLink.classList.remove('active')
    } else {
      this.homeLink.classList.remove('active')
      this.aboutLink.classList.remove('active')
      this.worksLink.classList.remove('active')
    }
  }

  async onChange (url) {
    await this.page.hide()

    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      window.history.pushState({}, '', url)

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.body.setAttribute('data-template', this.template)

      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]

      this.page.create()

      if (this.template === 'home') {
        this.gallery = new Canvas(this.template)
      }

      this.page.show()

      this.navChangeState()

      this.body.scrollTop = 0

      this.createGallery()

      this.addLinkListeners()
    } else {
      console.log('error')
    }
  }

  onResize () {
    if (this.experience && this.experience.onResize) {
      this.experience.onResize()
    }

    if (this.page && this.page.onResize) {
      this.page.onResize()
    }

    if (this.gallery && this.gallery.onResize) {
      this.gallery.onResize()
    }
  }

  onTouchDown (event) {
    if (this.gallery && this.gallery.onTouchDown) {
      this.gallery.onTouchDown(event)
    }
  }

  onTouchMove (event) {
    if (this.gallery && this.gallery.onTouchMove) {
      this.gallery.onTouchMove(event)
    }
  }

  onTouchUp (event) {
    if (this.gallery && this.gallery.onTouchUp) {
      this.gallery.onTouchUp(event)
    }
  }

  update () {
    if (this.experience && this.experience.update) {
      this.experience.update()
    }

    if (this.page && this.page.update) {
      this.page.update()
    }

    if (this.gallery && this.gallery.update) {
      this.gallery.update(this.page.scroll)
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners () {
    window.addEventListener('popstate', this.onPopState.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

    if (this.gallery && this.gallery.addEventListeners) {
      this.gallery.addEventListeners()
    }

    if (this.experience && this.experience.addEventListeners) {
      this.experience.addEventListeners()
    }
  }

  addLinkListeners () {
    const links = document.querySelectorAll('a')

    links.forEach(link => {
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
