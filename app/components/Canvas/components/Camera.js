import * as THREE from 'three'

import Canvas from '..'

export default class Camera {
  constructor () {
    this.experience = new Canvas()

    this.sizes = this.experience.sizes

    this.createCamera()
    this.onResize()
  }

  createCamera () {
    this.aspect = this.sizes.width / this.sizes.height

    this.camera = new THREE.PerspectiveCamera(50, this.aspect, 0.1, 100)
    this.camera.position.set(0, 0, 3)
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
