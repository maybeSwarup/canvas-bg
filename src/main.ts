import * as THREE from 'three'
import TWEEN from '@tweenjs/tween.js'

import renderer, { scene } from './core/renderer'

import './style.css'

//lights
import { ambientLight, hemisphereLight } from './core/lights'

//objects
import pyramid from './objects/shapes/pyramid'

//animation
import animate from './core/animate'
import particles from './objects/particles'
import camera from './core/camera'
import targets from './objects/particles/targets'
import transform from './objects/particles/transform'
import torus from './objects/shapes/torus'

// add lights
scene.add(ambientLight)
scene.add(hemisphereLight)

// add objects
scene.add(torus)
particles.forEach(particle => scene.add(particle))

// const loader = new THREE.ObjectLoader()
// loader.load('../assets/models/brain.json', obj => scene.add(obj))

// particle transformations
transform('torus', particles, 2000)

// play animation
animate()