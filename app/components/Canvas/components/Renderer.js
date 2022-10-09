import { WebGLRenderer } from 'three'
import Canvas from '..'

export default class Renderer {
  constructor () {
    this.experience = new Canvas()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera.camera

    this.createRenderer()
  }

  createRenderer () {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    })

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  onResize () {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  update () {
    this.renderer.render(this.scene, this.camera)
  }
}
