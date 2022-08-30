import * as THREE from 'three'
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
    this.model.scale.set(1, 1, 1)
    this.model.rotation.set(0.25, 0, 0)
    this.scene.add(this.model)

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
      }
    })
  }

  update () {

  }
}
