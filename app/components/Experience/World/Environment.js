import { DirectionalLight, AmbientLight, sRGBEncoding, Mesh, MeshStandardMaterial } from 'three'
import Experience from '..'

export default class Environment {
  constructor () {
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.resources = this.experience.resources

    this.debug = this.experience.debug

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Environment')
    }

    this.createDirectionalLight()
    this.createAmbientLight()
    this.createEnvironmentMap()
  }

  createDirectionalLight () {
    this.directionalLight = new DirectionalLight(0xffffff, 0.42)
    this.directionalLight.position.set(2, 2, -1)
    this.directionalLight.castShadow = true
    this.directionalLight.shadow.mapSize.set(1024, 1024)

    this.scene.add(this.directionalLight)

    if (this.debug.active) {
      this.debugFolder.add(this.directionalLight.position, 'y').name('DirLig PosY').min(0).max(100).step(1)
      this.debugFolder.add(this.directionalLight.position, 'x').name('DirLig PosX').min(0).max(100).step(1)
      this.debugFolder.add(this.directionalLight.position, 'z').name('DirLig PosZ').min(0).max(100).step(1)
      this.debugFolder.add(this.directionalLight, 'intensity').name('DirLig Intensity').min(0).max(1).step(0.01)
    }
  }

  createAmbientLight () {
    this.ambientLight = new AmbientLight(0xffffff, 0.8)
    this.scene.add(this.ambientLight)

    if (this.debug.active) {
      this.debugFolder.add(this.ambientLight.position, 'y').name('AmLight PosY').min(0).max(100).step(1)
      this.debugFolder.add(this.ambientLight.position, 'x').name('AmLight PosX').min(0).max(100).step(1)
      this.debugFolder.add(this.ambientLight.position, 'z').name('AmLight PosZ').min(0).max(100).step(1)
      this.debugFolder.add(this.ambientLight, 'intensity').name('AmLight Intensity').min(0).max(2).step(0.001)
    }
  }

  createEnvironmentMap () {
    this.environmentMap = {}
    this.environmentMap.intensity = 1
    this.environmentMap.texture = this.resources.items.environmentMapTexture
    this.environmentMap.texture.encoding = sRGBEncoding

    this.scene.environment = this.environmentMap.texture

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
          child.material.envMap = this.environmentMap.texture
          child.material.envMapIntensity = this.environmentMap.intensity
          child.material.needsUpdate = true
        }
      })
    }
  }
}
