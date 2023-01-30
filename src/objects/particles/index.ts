import { numberOfParticles } from "../../utils/constants";
import Pyramid from "../shapes/pyramid";
import Wireframe from "../wireframe";

const particles: Array<Pyramid> = []

for(let i = 0; i < numberOfParticles; i++) {
    const pyramid = new Pyramid
    const color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    const particle = new Wireframe(pyramid.geometry, color)
    particle.position.x = Math.random() * 40 - 20;
    particle.position.y = Math.random() * 40 - 20;
    particle.position.z = Math.random() * 40 - 20;
    particles.push(particle);
}

export default particles;