import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { samplePlanetaryData } from "../../../sample/samplePlanetaryData";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { SCALE } from "../../../constants";
import {
  EffectComposer,
  // Bloom,
  // N8AO,
  SelectiveBloom,
} from "@react-three/postprocessing";

// Importing GLSL shader files as strings
// @ts-expect-error Importing GLSL shader files as strings is not a standard TypeScript module
import vertexShader from "../../../shaders/sun/vertex.glsl";
// @ts-expect-error Importing GLSL shader files as strings is not a standard TypeScript module
import fragmentShader from "../../../shaders/sun/fragment.glsl";
// // @ts-expect-error Importing GLSL shader files as strings is not a standard TypeScript module
// import vertexGlowShader from "../../../shaders/sun-glow/vertex.glsl";
// // @ts-expect-error Importing GLSL shader files as strings is not a standard TypeScript module
// import fragmentGlowShader from "../../../shaders/sun-glow/fragment.glsl";

const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  // const glowRef = useRef<THREE.Mesh>(null);
  // const { camera } = useThree();

  const matRef = useRef<THREE.ShaderMaterial>(null);
  // const glowMatRef = useRef<THREE.ShaderMaterial>(null);

  const data = samplePlanetaryData;
  const sunData = data.bodies.find(
    (body) => body.englishName.toLowerCase() === "sun"
  );

  console.log(sunData);

  const diff = useTexture("/textures/sun/diff.jpg");
  diff.anisotropy = 16;

  // Rotate slowly and update shader uniforms
  useFrame(({ clock }) => {
    // if (glowMatRef.current && glowRef.current) {
    //   // Update camera position
    //   glowMatRef.current.uniforms.uCameraPosition.value.copy(camera.position);

    //   // Update mesh center in world coordinates
    //   glowRef.current.getWorldPosition(tempVec);
    //   glowMatRef.current.uniforms.uObjectCenter.value.copy(tempVec);
    // }
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  // Put the sun in layer 1
  // useEffect(() => {
  //   if (sunRef.current) {
  //     sunRef.current.layers.set(1);
  //   }
  // }, []);

  return (
    <group>
      <mesh ref={sunRef}>
        {/* <sphereGeometry
          args={[(sunData?.meanRadius || 1000000) / SCALE, 128, 128]}
        /> */}
        <icosahedronGeometry
          args={[(sunData?.meanRadius || 1000000) / SCALE, 64]}
        />
        <shaderMaterial
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0.0 },
            myTexture: { value: diff },
          }}
        />
        <EffectComposer multisampling={8}>
          <SelectiveBloom
            intensity={1}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.1}
            mipmapBlur
            selection={[
              sunRef as RefObject<THREE.Object3D<THREE.Object3DEventMap>>,
            ]}
          />
        </EffectComposer>
      </mesh>
      {/* <mesh ref={glowRef}>
        <sphereGeometry
          args={[(sunData?.meanRadius || 1000) / SCALE + 0.04, 128, 128]}
        />
        <shaderMaterial
          ref={glowMatRef}
          vertexShader={vertexGlowShader}
          fragmentShader={fragmentGlowShader}
          uniforms={{
            uTime: { value: 0.0 },
            myTexture: { value: diff },
            uCameraPosition: { value: camera.position },
            uObjectCenter: { value: new THREE.Vector3() },
            uRadius: { value: (sunData?.meanRadius || 1000) / SCALE + 0.03 },
          }}
          transparent={true}
          side={THREE.BackSide} // Render on the inside for glow
        />
      </mesh> */}
    </group>
  );
};

export default Sun;
