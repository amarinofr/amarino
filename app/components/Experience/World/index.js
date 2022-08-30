import Experience from '..'
import Environment from './Environment'
import Legos from './Legos'

export default class World {
  constructor () {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resources.on('ready', () => {
      this.legos = new Legos()

      this.environment = new Environment()
    })
  }

  update () {
    if (this.legos) {
      this.legos.update()
    }
  }
}
