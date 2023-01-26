import * as THREE from 'three'
import { gui } from './gui'
// Lights
export const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

export const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 2, 2.25)

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