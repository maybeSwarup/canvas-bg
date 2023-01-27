import * as THREE from 'three'

class Pyramid extends THREE.Mesh {
    constructor() {
        super()
        const geometry = new THREE.TetrahedronGeometry(0.5, 0)
        const material = new THREE.MeshToonMaterial({color: 'yellow'})
        return new THREE.Mesh(geometry, material)
    }
}

export default Pyramid