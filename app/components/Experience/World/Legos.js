import { Raycaster } from 'three'
import GSAP from 'gsap'
import { splitWords } from 'utils/splitText'

import Experience from '..'

export default class Legos {
  constructor () {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.camera = this.experience.camera
    this.resources = this.experience.resources
    this.canvas = this.experience.canvas
    this.resource = this.resources.items.legoPieces
    this.intro = this.experience.intro
    this.introUI = this.intro.elements.introUI

    splitWords(this.introUI)

    this.introSpans = this.introUI.querySelectorAll('span span')

    this.debug = this.experience.debug

    this.camVelocity = 0.5

    this.skip = document.querySelector('.intro_skip')

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('Legos')
    }

    this.createRayCaster()
    this.createObjects()
    this.createAnimations()
  }

  createObjects () {
    this.model = this.resource.scene
    this.top = this.model.children[1]
    this.bottom = this.model.children[0]

    this.model.scale.set(1, 1, 1)
    this.model.rotation.set(5, 0, 0)
    this.model.position.set(0, 1.75, 0)

    this.scene.add(this.model)

    this.intro.once('show', _ => {
      this.initTl = GSAP.timeline()

      this.initTl.to(this.model.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 1.5,
        ease: 'power4.out',
        onComplete: this.createClick.bind(this)
      }).to(this.introSpans, {
        y: '0%',
        stagger: 0.075,
        duration: 1,
        autoAlpha: 1,
        ease: 'expo.out'
      }, '-=0.75')
    })
  }

  createRayCaster () {
    this.raycaster = new Raycaster()
    this.currentIntersection = null
    this.raycaster.set(20, 50, 0)
  }

  createAnimations () {
    this.tl = GSAP.timeline()

    this.tl.fromTo(this.top.position, {
      duration: 2,
      ease: 'expo.in',
      y: 0.14
    }, {
      duration: 0.7,
      y: 0.17,
      yoyo: true,
      ease: 'expo.out',
      repeat: -1
    })
  }

  addEventListeners () {

  }

  createClick () {
    window.addEventListener('click', () => {
      if (this.currentIntersection) {
        this.clicked()
      }
    })
  }

  clicked () {
    this.tl.kill()

    this.clickable = GSAP.timeline()

    this.clickable.to(this.model.scale, {
      x: 2.7,
      y: 2.7,
      z: 2.7,
      duration: 0.9,
      ease: 'expo.in',
      onComplete: this.nextStep.bind(this)
    })

    this.currentIntersection = 1
  }

  nextStep () {
    this.raycaster.layers.disableAll()

    this.newTl = GSAP.timeline()

    this.camVelocity = 0.25

    GSAP.to(this.skip, {
      autoAlpha: 0
    })

    GSAP.set(this.canvas, {
      zIndex: 0
    })

    GSAP.set(this.intro.elements.secondView, {
      zIndex: 1
    })

    this.newTl.to(this.top.position, {
      y: 0.02,
      delay: 0.15,
      duration: 0.4,
      ease: 'expo.in'
    }).to(this.intro.elements.firstView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.model.position, {
      x: 2.5,
      y: 2,
      duration: 0.9,
      ease: 'expo.inOut',
      onComplete: this.changeColor.bind(this)
    }, '-=0.1').to(this.intro.elements.secondView, {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: this.secondStep.bind(this)
    }, '-=0.5')
  }

  changeColor () {
    this.newTl.to(this.bottom.material.color, {
      r: 1,
      g: 0.6038272976875305,
      b: 0
    }).to(this.top.material.color, {
      r: 1,
      g: 0.6038272976875305,
      b: 0
    })
  }

  secondStep () {
    this.intro.elements.secondViewButton.addEventListener('click', this.animateThird.bind(this))
  }

  animateThird () {
    this.thirdTl = GSAP.timeline()

    GSAP.set(this.intro.elements.thirdView, {
      zIndex: 1
    })

    this.thirdTl.to(this.intro.elements.secondView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.model.scale, {
      x: 3.5,
      y: 3.5,
      z: 3.5,
      duration: 0.9,
      ease: 'expo.in'
    }).to(this.model.position, {
      x: 3.5,
      y: 3,
      duration: 0.9,
      ease: 'expo.inOut'
    }, '-=0.1').to(this.intro.element, {
      backgroundColor: '#000000'
    }).to(this.intro.elements.thirdView, {
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power4.inOut',
      onComplete: this.thirdStep.bind(this)
    }, '-=0.5')
  }

  thirdStep () {
    this.intro.elements.thirdViewButton.addEventListener('click', this.animateLast.bind(this))
  }

  animateLast () {
    this.lastTl = GSAP.timeline()

    this.lastTl.to(this.intro.elements.thirdView, {
      autoAlpha: 0,
      duration: 0.15
    }, '<').to(this.canvas, {
      autoAlpha: 0
    }).to(this.intro.element, {
      backgroundColor: 'transparent'
    })

    this.lastTl.set(this.canvas, {
      display: 'none',
      onComplete: this.intro.animateOut.bind(this.intro)

    })
  }

  update () {
    this.camPosX = 0.5 + (this.camera.mouse.y * this.camVelocity)
    this.camPosY = 0.5 + (this.camera.mouse.x * this.camVelocity)

    GSAP.to(this.model.rotation, {
      x: this.camPosX,
      y: this.camPosY,
      ease: 'expo.out',
      duration: 3
    })

    this.intersection = this.raycaster.intersectObject(this.top)

    if (this.intersection.length) {
      if (this.currentIntersection === null) {
        // this.addEventListeners()
      }
      this.currentIntersection = this.top
    } else {
      this.currentIntersection = null
    }

    this.raycaster.setFromCamera(this.camera.mouse, this.camera.camera)
  }
}
