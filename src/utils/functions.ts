import * as THREE from 'three'

export function ToVertices(geometry) {
    const positions = geometry.attributes.position;
    const vertices = [];
    for (let index = 0; index < positions.count; index++) {
      vertices.push(
        new THREE.Vector3(
          positions.getX(index),
          positions.getY(index),
          positions.getZ(index)
        )
      );
    }
    return vertices;
}