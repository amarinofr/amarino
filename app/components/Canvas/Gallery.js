import { WebGLRenderer, PlaneGeometry, DoubleSide, Mesh, MeshBasicMaterial } from 'three'

import GSAP from 'gsap'

import { map } from 'lodash'
import Canvas from '.'
import Media from './Media'

export default class Gallery {
  constructor ({ element, index, scene, camera, renderer, world, sizes }) {
    this.experience = new Canvas()

    this.element = element
    this.index = index
    this.sizes = sizes

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.world = world

    this.wrapper = this.element.parentNode

    this.x = {
      current: 0,
      target: 0,
      direction: 'left',
      lerp: 0.1
    }

    this.scrollX = 0

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      x: 0,
      velocity: 1.5,
      lerp: 0.05
    }

    this.createRenderer()
    this.createSizes()
    this.createCamera()

    this.createMedias()
    this.onResize({
      sizes: this.sizes
    })
  }

  createRenderer () {
    this.renderer = new WebGLRenderer({
      canvas: this.element,
      alpha: true
    })

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x000000, 0)
  }

  createSizes () {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }

  createMedias () {
    this.mediasElements = this.wrapper.querySelectorAll('.home_works_single_image')

    this.bounds = this.element.getBoundingClientRect()

    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    this.medias = map(this.mediasElements, (element, index) => {
      this.geometry = new PlaneGeometry(1, 1)
      this.material = new MeshBasicMaterial({ color: '#ffffff', side: DoubleSide })
      this.plane = new Mesh(this.geometry, this.material)

      this.scene.add(this.plane)

      return new Media({
        element,
        geometry: this.plane,
        index,
        scene: this.scene,
        sizes: this.sizes,
        viewport: this.element
      })
    })
  }

  createCamera () {
    this.scene.add(this.camera.camera)
  }

  onResize (event) {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.bounds = this.element.getBoundingClientRect()

    this.sizes = event.sizes

    const fov = this.camera.camera.fov * (Math.PI / 100)
    const height = 2 * Math.tan(fov / 2) * this.camera.camera.position.z
    const width = height * this.camera.aspect

    this.viewport = {
      width,
      height
    }

    this.width = this.bounds.width / window.innerWidth * this.viewport.width

    console.log(this.width);

    map(this.medias, media => media.onResize(event, this.viewport, this.scroll))
  }

  onTouchDown ({ x, y }) {
    this.scrollX = this.scroll.x
  }

  onTouchMove ({ x, y }) {
    const distance = (x.start - x.end) * 0.2
  }

  onTouchUp ({ x, y }) {

  }

  galleryScroll (event) {
  }

  update (scroll) {
    this.renderer.render(this.scene, this.camera.camera)

    if (!this.bounds) return

    const distance = (scroll.current - scroll.target) * 0.03
    const y = scroll.current / window.innerHeight

    if (this.scroll.current < this.scroll.target) {
      this.x.direction = 'right'
      this.scroll.velocity = -1
    } else if (this.scroll.current > this.scroll.target) {
      this.x.direction = 'left'
      this.scroll.velocity = 1
    }

    this.scroll.target -= this.scroll.velocity
    this.scroll.target += distance

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    map(this.medias, (media, index) => {
      const scaleX = media.geometry.position.x

      if (this.x.direction === 'left') {
        const x = media.geometry.position.x + scaleX / 2

        if (x < -this.width / 2) {
          media.extra += this.width
        }
      } else if (this.x.direction === 'right') {
        const x = media.geometry.position.x + scaleX / 2

        if (x > this.width / 2) {
          media.extra -= this.width
        }
      }

      media.update(this.scroll)
    })
  }

  addEventListeners () {
    window.addEventListener('scroll', this.galleryScroll.bind(this))
  }

  destroy () {

  }
}
