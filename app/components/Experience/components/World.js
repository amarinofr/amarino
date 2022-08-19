import { Scene } from 'three'

export default class World {
  constructor () {
    this.createScene()
  }

  createScene () {
    this.world = new Scene()
  }
}
