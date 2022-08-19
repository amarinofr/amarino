import { PerspectiveCamera } from 'three'

export default class Camera {
  constructor () {
    this.createCamera()
  }

  createCamera (width, height) {
    this.camera = new PerspectiveCamera(75, width / height, 0.1, 100)
    this.camera.position.set(2, 2, 2)
  }
}
