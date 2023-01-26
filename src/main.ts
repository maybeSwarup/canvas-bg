import * as THREE from 'three'
import { scene } from './core/renderer'
import { gui } from './core/gui'

import './style.css'

//lights
import { ambientLight, directionalLight } from './core/lights'
import plane from './objects/plane'
import sphere from './objects/sphere'
import loop from './core/animation'

scene.add(ambientLight)
scene.add(directionalLight)
scene.add(sphere)

const DirectionalLightFolder = gui.addFolder({
  title: 'Directional Light',
})

Object.keys(directionalLight.position).forEach(key => {
  DirectionalLightFolder.addInput(
    directionalLight.position,
    key as keyof THREE.Vector3,
    {
      min: -100,
      max: 100,
      step: 1,
    },
  )
})

scene.add(plane)

loop()
