import Experience from '..'
import Environment from './Environment'
import Legos from './Legos'

export default class World {
  constructor () {
    this.experiece = new Experience()
    this.scene = this.experiece.scene

    this.legos = new Legos()
    this.environment = new Environment()
  }
}
