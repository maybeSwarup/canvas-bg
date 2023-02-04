import * as TWEEN from '@tweenjs/tween.js'
import target from './targets'

/**
 * Takes in a shape and a list of particles and animates them to the target positions.           
 * @param {string} shape - the shape to animate           
 * @param {any[]} particles - the particles to animate           
 * @param {number | undefined} duration - the duration of the animation.           
 * @returns None           
 */
export default function transform (shape: string, particles: any[], duration: number | undefined) {
    const targets = target[shape]

    for(let i in targets) {
        const particle = particles[i]
        const target = targets[i]
        
        const tween = new TWEEN.Tween(particle.position)
        .to({
            x: target.x,
            y: target.y,
            z: target.z
        }, duration)

        
        
        // tween.onUpdate((updatedPosition, elapsed) => {
            // particle.position.set(updatedPosition.position)
        // })

        tween.start()
    }
}