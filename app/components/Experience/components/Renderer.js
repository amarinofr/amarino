import { WebGLRenderer, PCFSoftShadowMap } from 'three'

export default class Render {
  constructor () {
    this.createRenderer()

    this.canvas = document.querySelector('.intro_pieces')
  }

  createRenderer (width, height) {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas
    })

    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}
