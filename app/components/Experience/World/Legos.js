import Experience from '..'
import Loaders from '../utils/Loaders'

export default class Legos {
  constructor () {
    this.experience = new Experience()
    this.loaders = new Loaders()

    this.scene = this.experience.scene

    this.debug = this.experience.debug

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos')
    }

    this.createObjects()
  }

  createObjects () {
    this.loaders.gltfLoader.load(
      'models/legos.glb',
      (gltf) => {
        const legoPieceTop = gltf.scene.children.find((child) => child.name === 'Lego_model_top')
        legoPieceTop.scale.set(0.2, 0.2, 0.2)
        this.scene.add(legoPieceTop)
      }
    )

    this.loaders.gltfLoader.load(
      'models/legos.glb',
      (gltf) => {
        const legoPieceBottom = gltf.scene.children.find((child) => child.name === 'Lego_model_bottom')
        legoPieceBottom.scale.set(0.2, 0.2, 0.2)
        legoPieceBottom.position.set(0, -0.15, 0)
        this.scene.add(legoPieceBottom)
      }
    )
  }
}
