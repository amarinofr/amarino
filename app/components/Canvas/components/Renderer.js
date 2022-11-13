import Canvas from '..'

export default class Renderer {
  constructor () {
    this.experience = new Canvas()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes

    this.createRenderer()
  }

  createRenderer () {
  }

  onResize () {
  }

  update () {
  }
}
