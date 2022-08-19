import * as THREE from 'three'
import GUI from 'lil-gui'

import Camera from './components/camera'
import World from './components/World'
import Render from './components/Renderer'
import Objects from './components/Objects'

export default class Experience {
  constructor () {
    this.gui = new GUI()

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.camera = new Camera(this.sizes.width, this.sizes.height)
    this.world = new World()
    this.renderer = new Render()
    this.objects = new Objects()

    console.log(this.objects)

    this.clock = new THREE.Clock()
    this.previousTime = 0

    this.setup()
    this.addEventListeners()
  }

  setup () {
    this.world.world.add(this.camera.camera)
  }

  addEventListeners (moved) {
    // moved = window.addEventListener('mousemove', event => {
    //   this.cursorY = event.clientY / this.sizes.height
    //   this.cursorX = -(event.clientX / this.sizes.width - 0.5)
    // })
  }

  onResize () {
    // Update sizes
    this.sizes.width = window.innerWidth
    this.sizes.height = window.innerHeight

    // Update camera
    this.camera.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.camera.updateProjectionMatrix()

    // Update renderer
    this.renderer.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  update () {
    this.elapsedTime = this.clock.getElapsedTime()
    this.deltaTime = this.elapsedTime - this.previousTime
    this.previousTime = this.elapsedTime

    // Camera Movement
    // this.camera.camera.position.x = this.cursorX * 0.5
    // this.camera.camera.position.y = this.cursorY * 0.5
    // this.camera.lookAt(new Vector3())

    // Render
    this.renderer.renderer.render(this.world.world, this.camera.camera)
  }
}
