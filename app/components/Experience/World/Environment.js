import * as THREE from 'three'
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
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    this.directionalLight.castShadow = true
    this.directionalLight.shadow.mapSize.set(1024, 1024)
    this.directionalLight.shadow.camera.far = 15
    this.directionalLight.shadow.camera.left = -7
    this.directionalLight.shadow.camera.top = 7
    this.directionalLight.shadow.camera.right = 7
    this.directionalLight.shadow.camera.bottom = -7
    this.directionalLight.position.set(-5, 5, 0)

    this.scene.add(this.directionalLight)

    if (this.debug.active) {
      this.debugFolder.add(this.directionalLight.position, 'y').name('DirLig PosY').min(0).max(100).step(1)
      this.debugFolder.add(this.directionalLight.position, 'x').name('DirLig PosX').min(0).max(100).step(1)
      this.debugFolder.add(this.directionalLight.position, 'z').name('DirLig PosZ').min(0).max(100).step(1)
    }
  }

  createAmbientLight () {
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
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
    this.environmentMap.texture.encoding = THREE.sRGBEncoding

    this.scene.environment = this.environmentMap.texture

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMap = this.environmentMap.texture
          child.material.envMapIntensity = this.environmentMap.intensity
          child.material.needsUpdate = true
        }
      })
    }
  }
}
