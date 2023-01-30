import TWEEN from '@tweenjs/tween.js'

import renderer, { scene } from './core/renderer'

import './style.css'

//lights
import { ambientLight, hemisphereLight } from './core/lights'

//objects
import pyramid from './objects/shapes/pyramid'

//animation
import loop from './core/animate'
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


// play animation
loop()

// make sphere
transform('torus', particles, 2000)
// const timeoutId = setTimeout(() => transform(particles, targets.sphere, 2000), 2000)
// clearTimeout(timeoutId)

export function render(){
    renderer.renderer.render(scene, camera)
}
