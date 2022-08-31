import * as THREE from 'three'
import GSAP from 'gsap'

import Experience from '..'

export default class Legos {
  constructor () {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resource = this.resources.items.legoPieces

    this.debug = this.experience.debug

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos')
    }

    this.createObjects()
  }

  createObjects () {
    this.model = this.resource.scene
    this.model.scale.set(1.5, 1.5, 1.5)
    this.model.rotation.set(0.25, 0, 0)
    this.scene.add(this.model)

    // console.log(this.model.children[0])

    this.top = this.model.children[1]
    this.bottom = this.model.children[0]

    console.log(this.top)

    GSAP.fromTo(this.top.position, 0.5, {
      y: 0.15,
      duration: 1
    }, {
      y: 0.25,
      duration: 1,
      yoyo: true,
      delay: 2,
      repeat: -1
    }, 5)

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
      }
    })
  }

  update () {

  }
}
