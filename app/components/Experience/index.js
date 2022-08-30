import * as THREE from 'three'

import Sizes from './utils/Sizes'
import Debug from './utils/Debug'

import Camera from './components/Camera'
import Renderer from './components/Renderer'
import World from './World'
import Resources from './utils/Resources'
import sources from './sources'

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
  }

  addEventListeners () {
    this.camera.addEventListeners()
  }

  onResize () {
    // Update sizes
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    this.camera.onResize()
    this.renderer.onResize()
  }

  update () {
    // const currentTime = Date.now()
    // this.delta = currentTime - this.time.current
    // this.time.current = currentTime
    // this.time.elapsed = this.time.current - this.time.start

    this.camera.update()
    this.world.update()
    this.renderer.update()

    // this.camera.camera.lookAt(this.world.scene.children[1].position)
  }
}
