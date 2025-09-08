import Earth from "../planets/Earth";
import Sun from "../stars/Sun";

const Experience = () => {
  return (
    <mesh>
      {/* <Grid args={[10, 10]} /> */}

      {/* Sun */}
      <Sun />

      {/* Earth */}
      <Earth />
    </mesh>
  );
};

export default Experience;
