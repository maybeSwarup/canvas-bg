import * as THREE from 'three'
import getModel from "../model"

export default async function getBrain(){
    
        const brainModel = await getModel('brain')
        return brainModel
        const geometry = brainModel.geometry
        const material = new THREE.PointsMaterial({
        size: 0.005,
    })

    const brain = new THREE.Points(geometry, material)
    return brain
}