import * as THREE from 'three'
import particles from ".";
import torus from '../shapes/torus';
import { ToVertices } from '/@/utils/functions';

const l = particles.length

const target = {
    sphere: [],
    grid: [],
    torus: [],
}

const vector = new THREE.Vector3()

particles.forEach((partticle, i) => {
    // sphere
    const sphere = new THREE.Object3D()
    const radius = 800
    const phi  = Math.acos( -1 + (2 * i) / l)
    const theta = Math.sqrt( l * Math.PI) * phi
    sphere.position.setFromSphericalCoords(radius, phi, theta)
    // vector.copy(sphere.position).multiplyScalar(2)
    // sphere.lookAt(vector)
    target.sphere.push(sphere)
    
    // grid
    // const grid = new THREE.Object3D()
    // transformation.position.x = ( ( i % 5 ) * 400 ) - 800;
	// transformation.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
	// transformation.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;
	// targets.grid.push( transformation );

    // torus
    
    
})

target.torus = ToVertices(torus.geometry)

// console.log(ToVertices(torus.geometry));
export default target