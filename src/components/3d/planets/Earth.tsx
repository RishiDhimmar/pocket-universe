const Earth = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Earth;
