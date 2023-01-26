import * as THREE from 'three'

const geometry = new THREE.TetrahedronGeometry(0.5, 0)

const material = new THREE.MeshToonMaterial({color: 'yellow'})

const pyramid = new THREE.Mesh(geometry, material)

export default pyramid