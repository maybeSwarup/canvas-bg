import * as THREE from "three"

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10, 10, 10),
    new THREE.MeshToonMaterial({ color: '#444' }),
  )
  
  plane.rotation.set(-Math.PI / 2, 0, 0)
  plane.receiveShadow = true

  export default plane