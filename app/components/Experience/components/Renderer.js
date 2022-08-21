import { WebGLRenderer, PCFSoftShadowMap } from 'three'
import Experience from '..'

export default class Renderer {
  constructor () {
    this.experience = new Experience()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera

    this.createRenderer()
  }

  createRenderer () {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    })

    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
