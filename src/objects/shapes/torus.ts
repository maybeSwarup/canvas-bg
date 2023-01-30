import * as THREE from 'three'

const geometry = new THREE.TorusGeometry(3, 1, 16, 100)
const material = new THREE.PointsMaterial({
    size: 0.005,
})

const torus = new THREE.Points(geometry, material)

// console.log('torus', torus);
export default torus