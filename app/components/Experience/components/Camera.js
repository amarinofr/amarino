import * as THREE from 'three'

import Experience from '..'
import { Vector2 } from 'three'

export default class Camera {
  constructor () {
    this.experience = new Experience()

    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.world = this.experience.world

    this.object = this.scene.children

    this.createCamera()
  }

  createCamera () {
    this.camera = new THREE.PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.1, 100)
    this.camera.position.set(0, 2, 5)
    this.scene.add(this.camera)
    this.mouse = new Vector2()
  }

  addEventListeners () {
    window.addEventListener('mousemove', moved => {
      this.mouse.x = moved.clientX / this.sizes.width * 2 - 1
      this.mouse.y = -(moved.clientY / this.sizes.height) * 2 + 1
    })
  }

  onResize () {
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
  }

  update () {

  }
}
