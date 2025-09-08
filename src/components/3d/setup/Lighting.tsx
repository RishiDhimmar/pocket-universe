const Lighting = () => {
  return (
    <>
      <ambientLight intensity={10} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
    </>
  );
};

export default Lighting;
