import { map } from 'lodash'
import Canvas from '.'
import Media from './Media'

export default class Gallery {
  constructor ({ element, index }) {
    this.experience = new Canvas()
    this.geometry = this.experience.geometry
    this.renderer = this.experience.renderer
    this.scene = this.experience.scene
    this.sizes = this.experience.sizes

    this.element = element
    this.index = index

    this.createMedias()
  }

  createMedias () {
    this.mediasElements = this.element.querySelectorAll('.home_works_single_image')

    this.bounds = this.element.getBoundingClientRect()

    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    this.medias = map(this.mediasElements, (element, index) => {
      element.innerWidth = this.sizes.width
      element.innerHeight = this.sizes.height
      return new Media({
        element,
        index
      })
    })
  }

  onResize (event) {
    this.bounds = this.element.getBoundingClientRect()

    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    map(this.medias, media => {
      media.onResize(event)
    })
  }

  update () {
    map(this.medias, (media, index) => {

    })
  }

  destroy () {

  }
}
