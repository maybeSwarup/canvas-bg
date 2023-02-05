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
import target from './objects/particles/targets'
import transform from './objects/particles/transform'
import torus from './objects/shapes/torus'
import { selectedTransformation, transformationTime } from './utils/constants'
import getModel from './objects/model'
import getBrain from './objects/shapes/brain'

// add lights
scene.add(ambientLight)
scene.add(hemisphereLight)

// add objects
async function addAsyncObjects(){
    scene.add(await getBrain())
}
addAsyncObjects()
scene.add(torus)

particles.forEach((particle, i) => {
    if(i > target[selectedTransformation].length){
        const rotation = Math.random() * 2 * Math.PI
        particle.rotation.x = rotation
    }
    scene.add(particle)
})

// particle transformations
transform(selectedTransformation, particles, transformationTime)

// play animation
animate()