import * as THREE from 'three'

import Canvas from '.'

export default class Media {
  constructor ({ element, index, geometry, scene, renderer, world, sizes, viewport, width }) {
    this.experience = new Canvas()

    this.element = element
    this.index = index
    this.figure = this.element.parentElement

    this.geometry = geometry
    this.renderer = renderer
    this.scene = scene
    this.sizes = sizes

    this.viewport = viewport

    this.viewportSizes = viewport.getBoundingClientRect()

    this.world = world
    this.extra = 0

    this.createTexture()
  }

  createTexture () {
    this.image = new window.Image()
    this.image.crossOrigin = 'anonymous'
    this.image.src = this.element.getAttribute('data-src')

    this.texture = new THREE.TextureLoader().load(this.image.src)
    this.geometry.material.map = this.texture
  }

  createBounds (viewport) {
    this.parent = this.figure.parentElement.getBoundingClientRect()
    this.bounds = this.figure.getBoundingClientRect()

    this.updateScale(viewport)
    this.updateX()
  }

  updateScale ({ height, width }) {
    this.scale = {
      width,
      height
    }

    this.width = this.bounds.width / this.viewportSizes.width
    this.height = this.bounds.height / this.viewportSizes.height

    this.geometry.scale.x = (width * this.width) * 0.5
    this.geometry.scale.y = (height * this.height) * 0.5

    this.y = (this.bounds.top - this.parent.top) / this.viewportSizes.height + 0.5
    this.geometry.position.y = (height / 2) - (this.geometry.scale.y / 2) - (this.y * height)
  }

  updateX (x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth

    this.geometry.position.x = (-this.scale.width / 2) + (this.geometry.scale.x / 2) + (this.x * this.scale.width) + this.extra

    // console.log(this.geometry.position.x)

    // this.distance = -(this.bounds.left + current) / window.innerWidth
    // const distance = (current - target) * 0.00001

    // this.geometry.position.x = this.currentPos + this.distance
    // this.geometry.position.x -= target * 0.00005
    // this.geometry.position.x += distance
  }

  onResize (event, viewport, scroll) {
    this.createBounds(viewport)

    this.parent = this.figure.parentElement.getBoundingClientRect()
    this.bounds = this.figure.getBoundingClientRect()
  }

  update (scroll) {
    this.updateX(scroll.current)
  }
}
