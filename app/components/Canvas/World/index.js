import * as THREE from 'three'

import Canvas from '..'

export default class World {
  constructor () {
    this.experience = new Canvas()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera

    this.createPlane()
  }

  createPlane () {
    this.geometry = new THREE.PlaneGeometry(1, 1)
    this.material = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide })
    this.plane = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(this.plane)
    console.log(this.scene)
  }

  update () {

  }
}
