import * as THREE from 'three'
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
      lerp: 0.1
    }

    this.scrollX = 0

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      x: 0,
      lerp: 0.05
    }

    this.createRenderer()
    this.createSizes()
    this.createCamera()

    this.createMedias()
    this.onResize({
      sizes: this.sizes
    })
    this.addEventListeners()
  }

  createRenderer () {
    this.renderer = new THREE.WebGLRenderer({
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
      this.geometry = new THREE.PlaneGeometry(1, 1)
      this.material = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide })
      this.plane = new THREE.Mesh(this.geometry, this.material)

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

    const fov = this.camera.camera.fov * (Math.PI / 100)
    const height = 2 * Math.tan(fov / 2) * this.camera.camera.position.z
    const width = height * this.camera.aspect

    this.viewport = {
      width,
      height
    }

    this.width = this.bounds.width / window.innerWidth * this.sizes.width

    map(this.medias, media => media.onResize(event, this.viewport, this.scroll))
  }

  onTouchDown ({ x, y }) {
    this.scrollX = this.scroll.x
  }

  onTouchMove ({ x, y }) {
    const distance = (x.start - x.end) * 0.3

    this.x.target = this.scrollX - distance

    this.scroll.target = this.scroll.current - distance
  }

  onTouchUp ({ x, y }) {

  }

  galleryScroll (event) {
  }

  update (scroll) {
    this.renderer.render(this.scene, this.camera.camera)

    this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp)

    this.scroll.x = this.x.current

    if (!this.bounds) return

    if (this.scroll.current < this.scroll.target) {
      this.direction = 'right'
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = 'left'
    }

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    map(this.medias, (media, index) => {
      const scaleX = media.geometry.position.x / 2

      if (this.direction === 'left') {
        const x = media.geometry.position.x + scaleX

        if (x < -this.sizes.width / 2) {
          media.extra += this.width
        }
      } else if (this.direction === 'right') {
        const x = media.geometry.position.x - scaleX

        if (x > this.sizes.width / 2) {
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