import * as THREE from 'three'

import Canvas from '..'

export default class Camera {
  constructor () {
    this.experience = new Canvas()

    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.world = this.experience.world

    this.object = this.scene.children

    this.createCamera()
  }

  createCamera () {
    this.aspect = this.sizes.width / this.sizes.height

    this.camera = new THREE.PerspectiveCamera(50, this.aspect, 0.1, 100)
    this.camera.position.set(0, 0, 5)
    this.scene.add(this.camera)
  }

  addEventListeners () {

  }

  onResize () {
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
  }

  update () {

  }
}
