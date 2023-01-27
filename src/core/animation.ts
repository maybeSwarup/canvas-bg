import * as THREE from 'three'
import { sphereMaterial } from '../objects/shapes/sphere'
import { fpsGraph } from './gui'
import { controls } from './orbit-control'
import camera from './camera'
import {renderer, scene} from './renderer'

const clock = new THREE.Clock()

const loop = () => {
  const elapsedTime = clock.getElapsedTime()

  sphereMaterial.uniforms.uTime.value = elapsedTime

  fpsGraph.begin()

  controls.update()
  renderer.render(scene, camera)

  fpsGraph.end()
  requestAnimationFrame(loop)
}

export default loop