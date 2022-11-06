import * as THREE from 'three'

import { map } from 'lodash'

import SizesCanvas from '../utils/SizesCanvas'
import Debug from '../utils/Debug'

import Camera from './components/Camera'
import Renderer from './components/Renderer'
import World from './World'
import Gallery from './Gallery'
import Media from './Media'

let instance = null

export default class Canvas {
  constructor (template) {
    if (instance) {
      return instance
    }

    instance = this

    this.template = template
    this.canvas = document.querySelector('.home_works_single_gallery_wrapper')
    this.wrapper = document.querySelector('.home_works_single_wrapper')
    this.sizes = new SizesCanvas()
    this.debug = new Debug()

    this.onRouteUpdate(this.template)

    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }
  }

  createGalleries () {
    this.galleriesElements = document.querySelectorAll('.home_works_single_gallery_wrapper')

    this.galleries = map(this.galleriesElements, (element, index) => {
      return new Gallery({
        element,
        index,
        sizes: this.sizes,
        scene: new THREE.Scene(),
        camera: new Camera(),
        renderer: new Renderer(),
        world: new World(),
        galleriesElements: this.galleriesElements
      })
    })
  }

  onResize (event) {
    this.sizes = {
      width: window.innerWidth,
      height: this.wrapper.getBoundingClientRect().height
    }

    map(this.galleries, gallery => {
      gallery.onResize({
        sizes: this.sizes
      })
      gallery.camera.onResize()
    })
  }

  onTouchDown (e) {
    this.isDown = true

    const x = e.touches ? e.touches[0].clientX : e.clientX

    this.x.start = x

    const values = {
      x: this.x
    }

    map(this.galleries, gallery => gallery.onTouchDown(values))
  }

  onTouchMove (e) {
    if (!this.isDown) return

    const x = e.touches ? e.touches[0].clientX : e.clientX

    this.x.end = x

    this.x.distance = this.x.start - this.x.end

    const values = {
      x: this.x
    }

    map(this.galleries, gallery => gallery.onTouchMove(values))
  }

  onTouchUp (e) {
    this.isDown = false

    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX

    this.x.end = x

    const values = {
      x: this.x
    }

    map(this.galleries, gallery => gallery.onTouchUp(values))
  }

  onWheel ({ pixelY }) {
    map(this.galleries, gallery => gallery.onWheel(pixelY))
  }

  destroyHome () {
    map(this.galleries, gallery => { this.destroy() })
  }

  onRouteUpdate (template) {
    if (template === 'home') {
      this.createGalleries()
    } else {
      this.destroyHome()
      this.home = null
    }
  }

  addEventListeners (event) {
    map(this.galleries, gallery => {
      gallery.camera.addEventListeners()
      gallery.addEventListeners(event)
    })
  }

  update (scroll) {
    map(this.galleries, gallery => {
      gallery.update(scroll)
      gallery.camera.update()
      gallery.world.update()
      // gallery.renderer.update()
    })
  }
}
