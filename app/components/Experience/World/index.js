import Experience from '..'
import Environment from './Environment'
import Legos from './Legos'

export default class World {
  constructor () {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera

    this.resources.on('ready', () => {
      this.legos = new Legos()

      this.environment = new Environment()

      this.camera.mouse.set(0.5, 0.5)

      if (this.legos && this.legos.addEventListeners) {
        this.legos.addEventListeners()
      }
    })
  }

  update () {
    if (this.legos) {
      this.legos.update()
    }
  }
}
