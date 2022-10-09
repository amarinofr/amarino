import EventEmitter from './EventEmitter'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export default class Loaders extends EventEmitter {
  constructor () {
    super()

    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this.createLoaders()
  }

  createLoaders () {
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('/draco/')

    this.gltfLoader = new GLTFLoader()
    this.gltfLoader.setDRACOLoader(this.dracoLoader)
  }
}
