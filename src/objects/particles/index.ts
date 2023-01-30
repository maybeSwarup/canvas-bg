import { numberOfParticles } from "../../utils/constants";
import Pyramid from "../shapes/pyramid";

const particles: Array<Pyramid> = []

for(let i = 0; i < numberOfParticles; i++) {
    const particle = new Pyramid
    particle.position.x = Math.random() * 40 - 20;
    particle.position.y = Math.random() * 40 - 20;
    particle.position.z = Math.random() * 40 - 20;
    particles.push(particle);
}

export default particles;