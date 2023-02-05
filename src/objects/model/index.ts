import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default async function getModel(model: string) {
    return await new Promise((resolve, reject) => {
        const loader = new OBJLoader()
        loader.load(`/assets/${model}.obj`, object => {
            resolve(object)
        })
    })
}