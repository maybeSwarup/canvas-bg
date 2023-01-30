import * as THREE from 'three'
import { sphereMaterial } from '../objects/shapes/sphere'
import { fpsGraph } from './gui'
import { controls } from './orbit-control'
import camera from './camera'
import {renderer, scene} from './renderer'
import TWEEN from '@tweenjs/tween.js'

const clock = new THREE.Clock()

const animate = () => {
  const elapsedTime = clock.getElapsedTime()

  sphereMaterial.uniforms.uTime.value = elapsedTime

  fpsGraph.begin()

  controls.update()
  renderer.render(scene, camera)
  TWEEN.update()

  fpsGraph.end()
  requestAnimationFrame(animate)
}

export default animate