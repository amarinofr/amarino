import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from '..'

export default class Camera {
  constructor () {
    this.experience = new Experience()

    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas

    this.createCamera()
    // this.createOrbitControls()
  }

  createCamera () {
    this.camera = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
    this.camera.position.set(0, 3, 6)
    this.scene.add(this.camera)
  }

  createOrbitControls () {
    this.controls = new OrbitControls(this.camera, this.canvas)
    this.controls.enableDamping = true
  }
}
