import { scene } from './core/renderer'

import './style.css'

//lights
import { ambientLight, directionalLight } from './core/lights'

import plane from './objects/plane'
import sphere from './objects/sphere'
import loop from './core/animation'

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(sphere)
scene.add(plane)

loop()
