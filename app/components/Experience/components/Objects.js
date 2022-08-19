import { AmbientLight, DirectionalLight } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import World from './World'

export default class Objects {
  constructor () {
    this.createLoaders()
    this.createObjects()
    this.createLights()

    this.world = new World()
  }

  createLoaders () {
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('/draco/')

    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
  }

  createObjects () {
    this.gltfLoader.load(
      'models/legos.glb',
      (gltf) => {
        const legoPieceTop = gltf.scene.children.find((child) => child.name === 'Lego_model_top')
        legoPieceTop.scale.set(0.2, 0.2, 0.2)
        this.world.world.add(legoPieceTop)
      }
    )

    this.gltfLoader.load(
      'models/legos.glb',
      (gltf) => {
        const legoPieceBottom = gltf.scene.children.find((child) => child.name === 'Lego_model_bottom')
        legoPieceBottom.scale.set(0.2, 0.2, 0.2)
        legoPieceBottom.position.set(0, -0.15, 0)
        this.world.add(legoPieceBottom)
      }
    )
  }

  createLights () {
    const ambientLight = new AmbientLight(0xffffff, 0.8)

    const directionalLight = new DirectionalLight(0xffffff, 0.6)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.camera.left = -7
    directionalLight.shadow.camera.top = 7
    directionalLight.shadow.camera.right = 7
    directionalLight.shadow.camera.bottom = -7
    directionalLight.position.set(-5, 5, 0)

    return (ambientLight, directionalLight)
  }
}
