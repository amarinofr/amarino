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
    this.sizes = new SizesCanvas()
    this.debug = new Debug()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    this.geometry = this.world.geometry

    console.log(this.canvas)

    this.onRouteUpdate(this.template)
  }

  addEventListeners () {
    this.camera.addEventListeners()
  }

  createGalleries () {
    this.galleriesElements = document.querySelectorAll('.home_works_single_gallery_wrapper')

    this.galleries = map(this.galleriesElements, (element, index) => {
      return new Gallery({
        element,
        index
      })
    })
  }

  onResize (event) {
    this.camera.onResize()
    this.renderer.onResize()

    map(this.galleries, gallery => {
      gallery.onResize(event)
    })
  }

  destroyHome () {
    this.galleries.destroy()
  }

  onRouteUpdate (template) {
    if (template === 'home') {
      this.createGalleries()
    } else {
      this.destroyHome()
    }
  }

  update () {
    this.camera.update()
    this.world.update()
    this.renderer.update()

    map(this.galleries, gallery => {
      gallery.update()
    })
  }
}
