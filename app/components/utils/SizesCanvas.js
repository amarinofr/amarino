import Canvas from '../Canvas'

export default class SizesCanvas {
  constructor () {
    this.experience = new Canvas()

    this.canvas = this.experience.canvas

    if (this.canvas) {
      this.width = this.canvas.getBoundingClientRect().width
      this.height = this.canvas.getBoundingClientRect().height
    }

    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
}
