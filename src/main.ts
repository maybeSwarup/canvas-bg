import { scene } from './core/renderer'

import './style.css'

//lights
import { ambientLight, hemisphereLight } from './core/lights'

//objects
import pyramid from './objects/shapes/pyramid'

//animation
import loop from './core/animation'
import particles from './objects/particles'

// add lights
scene.add(ambientLight)
scene.add(hemisphereLight)

// add objects
// scene.add(pyramid)

particles.forEach(particle => scene.add(particle))

// play animation
loop()
