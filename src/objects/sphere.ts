import * as THREE from 'three'

// Shaders
import vertexShader from '/@/shaders/vertex.glsl'
import fragmentShader from '/@/shaders/fragment.glsl'

export const sphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uFrequency: { value: new THREE.Vector2(20, 15) },
    },
    vertexShader,
    fragmentShader,
  })
  
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 32),
    sphereMaterial,
  )
  
  sphere.position.set(0, 2, 0)
  sphere.castShadow = true

  export default sphere