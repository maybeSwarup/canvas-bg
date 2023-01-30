import * as THREE from 'three'

export default class Wireframe {
    constructor(geometry, color?) {
        const wireframe = new THREE.WireframeGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ color });

        const line = new THREE.LineSegments(wireframe, material);
        // line.material.depthTest = false;
        line.material.opacity = 0.75;
        line.material.transparent = true;

        return line
    }
}