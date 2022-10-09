import * as THREE from 'three'

import Sizes from '../utils/Sizes'
import Debug from '../utils/Debug'

import Camera from './components/Camera'
import Renderer from './components/Renderer'
import World from './World'
import Resources from '../utils/Resources'
import sources from './sources'
import Intro from '../Intro'

let instance = null

export default class Experience {
  constructor (canvas) {
    if (instance) {
      return instance
    }

    instance = this

    this.canvas = canvas
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    this.intro = new Intro()
  }

  addEventListeners () {
    this.camera.addEventListeners()
  }

  onResize () {
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    this.camera.onResize()
    this.renderer.onResize()
  }

  update () {
    this.camera.update()
    this.world.update()
    this.renderer.update()
  }
}
