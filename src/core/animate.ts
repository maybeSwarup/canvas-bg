import * as THREE from 'three'
import { sphereMaterial } from '../objects/shapes/sphere'
import { fpsGraph } from './gui'
import { controls } from './orbit-control'
import camera from './camera'
import {renderer, scene} from './renderer'
import TWEEN from '@tweenjs/tween.js'
import particles from '../objects/particles'

const clock = new THREE.Clock()

const animate = () => {
  const elapsedTime = clock.getElapsedTime()

  sphereMaterial.uniforms.uTime.value = elapsedTime

  particles.forEach(particle => {
    particle.rotation.x += Math.PI / 512;
    particle.rotation.y += Math.PI / 512;
    particle.rotation.z += Math.PI / 512;
  })

  fpsGraph.begin()

  controls.update()
  renderer.render(scene, camera)
  TWEEN.update()

  fpsGraph.end()
  requestAnimationFrame(animate)
}

export default animate