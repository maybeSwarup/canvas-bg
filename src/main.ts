import { scene } from './core/renderer'

import './style.css'

//lights
import { ambientLight, hemisphereLight } from './core/lights'

//objects
import pyramid from './objects/pyramid'

//animation
import loop from './core/animation'

// add lights
scene.add(ambientLight)
scene.add(hemisphereLight)

// add objects
scene.add(pyramid)

// play animation
loop()
