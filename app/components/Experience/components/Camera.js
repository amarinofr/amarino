import * as THREE from 'three'
import Experience from '..'

export default class Camera {
  constructor () {
    this.experience = new Experience()

    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.world = this.experience.world

    this.object = this.scene.children

    this.cursor = {
      x: 0,
      y: 0
    }

    this.createCamera()
  }

  createCamera () {
    this.camera = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
    this.camera.position.set(0, 2, 5)
    this.scene.add(this.camera)
  }

  addEventListeners () {
    window.addEventListener('mousemove', moved => {
      this.cursor.x = (moved.clientX / this.sizes.width) - 0.5
      this.cursor.y = -((moved.clientY / this.sizes.height) - 0.5)
    })
  }

  onResize () {
    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height
    this.camera.updateProjectionMatrix()
  }

  update () {
    // Camera Movement

    this.camera.position.x = this.cursor.x * 2
    this.camera.position.y = this.cursor.y * 2

    if (this.scene.children[1]) {
      this.camera.lookAt(this.scene.children[1].position)
    }
  }
}
