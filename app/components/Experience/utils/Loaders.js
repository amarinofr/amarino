import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default class Loaders {
  constructor () {
    this.createLoaders()
  }

  createLoaders () {
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('/draco/')

    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
  }
}
