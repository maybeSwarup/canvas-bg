import * as TWEEN from '@tweenjs/tween.js'
import target from './targets'

export default function transform (shape: string, particles: any[], duration: number | undefined) {
    const targets = target[shape]

    for(let index in targets) {
        const particle = particles[index]
        const target = targets[index]
        
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