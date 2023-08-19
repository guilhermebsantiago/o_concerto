import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const FrogModel = () => {
  const gltf = useGLTF("./concerto/scene.gltf");
  return <primitive object={gltf.scene} scale={0.55} />;
};

function FrogScene() {
  return (
    <div className="h-[245px]">
      <div className="h-[8px] w-full bg-gradient-to-t from-[#020800] to-transparent" />
      <Canvas camera={{ fov: 40 }}>
        <Suspense fallback={null}>
          <FrogModel />
          <OrbitControls
            maxPolarAngle={Math.PI / 3}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default FrogScene;
