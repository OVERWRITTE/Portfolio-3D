import { useEffect, useRef } from 'react'

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

const Bird = () => {
    const ref = useRef();

    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
            actions['Take 001'].play();
    }, [actions])

    return (
        <mesh ref={ref} position={[-5, 2, -10]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird