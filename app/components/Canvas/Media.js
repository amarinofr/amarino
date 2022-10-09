import Canvas from '.'

export default class Media {
  constructor ({ element, index }) {
    this.experience = new Canvas()
    this.geometry = this.experience.geometry
    this.renderer = this.experience.renderer
    this.scene = this.experience.scene
    this.sizes = this.experience.sizes

    this.element = element
    this.index = index
  }

  onResize () {

  }

  update () {

  }
}
