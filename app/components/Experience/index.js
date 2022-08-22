import * as THREE from 'three'

import Sizes from './utils/Sizes'
import Time from './utils/Time'
import Debug from './utils/Debug'

import Camera from './components/Camera'
import Renderer from './components/Renderer'

import World from './World'

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
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()

    setTimeout(() => {
      console.log(this.scene.children)
    }, 50)

    this.addEventListeners()
  }

  addEventListeners () {

  }

  onResize () {
    // Update sizes
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    // Update camera
    this.camera.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.camera.updateProjectionMatrix()

    // // Update renderer
    this.renderer.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  update () {
    const currentTime = Date.now()
    this.delta = currentTime - this.time.current
    this.time.current = currentTime
    this.time.elapsed = this.time.current - this.time.start

    // Camera Movement
    this.camera.camera.position.x = this.cursorX * 0.5
    this.camera.camera.position.y = this.cursorY * 0.5
    // this.camera.camera.lookAt(new Vector3(this.legos.))

    // Render
    this.renderer.renderer.render(this.scene, this.camera.camera)
  }
}
