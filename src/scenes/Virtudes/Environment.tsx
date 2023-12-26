import { Sky, Sparkles } from "@react-three/drei";
import { useTheme } from "@/context/ThemeContext";
import { useFrame } from "@react-three/fiber";
import React from "react";

const TURBIDITY_LIGHT = 0.2;
const TURBIDITY_DARK = 10;
const TURBIDITY_STEP = 0.05;

const RAYLEIGH_LIGHT = 0.2;
const RAYLEIGH_DARK = 1.7;
const RAYLEIGH_STEP = 0.05;

const INCLINATION_LIGHT = 0.521;
const INCLINATION_DARK = 0.46;
const INCLINATION_STEP = 0.001;

export default function Environment() {
  const { theme } = useTheme();
  const [data, setData] = React.useState({
    turbidity: theme === "dark" ? TURBIDITY_DARK : TURBIDITY_LIGHT,
    rayleigh: theme === "dark" ? RAYLEIGH_DARK : RAYLEIGH_LIGHT,
    inclination: theme === "dark" ? INCLINATION_DARK : INCLINATION_LIGHT,
  });

  useFrame((state, delta) => {
    setData((data) => {
      let { turbidity, rayleigh, inclination } = data;

      if (theme === "dark") {
        if (turbidity + TURBIDITY_STEP < TURBIDITY_DARK) {
          turbidity += TURBIDITY_STEP;
        }
        if (rayleigh + RAYLEIGH_STEP < RAYLEIGH_DARK) {
          rayleigh += RAYLEIGH_STEP;
        }
        if (inclination - INCLINATION_STEP > INCLINATION_DARK) {
          inclination -= INCLINATION_STEP;
        }
        return { turbidity, rayleigh, inclination };
      }

      if (theme === "light") {
        if (turbidity - TURBIDITY_STEP >= TURBIDITY_LIGHT) {
          turbidity -= TURBIDITY_STEP;
        }
        if (rayleigh - RAYLEIGH_STEP >= RAYLEIGH_LIGHT) {
          rayleigh -= RAYLEIGH_STEP;
        }
        if (inclination + INCLINATION_STEP <= INCLINATION_LIGHT) {
          inclination += INCLINATION_STEP;
        }
        return { turbidity, rayleigh, inclination };
      }

      return data;
    });
  });
  return (
    <group>
      <Sparkles
        size={100}
        speed={0.5}
        scale={[1000, 1000, 1000]}
        count={10000}
        color={theme === "dark" ? "#f5e58c" : "#fff"}
      />

      <Sky
        azimuth={180}
        turbidity={data.turbidity}
        rayleigh={data.rayleigh}
        inclination={data.inclination} // change that!
        distance={100000}
        // sunPosition={[1000, 600, 1000]}
        mieDirectionalG={0.7}
        mieCoefficient={0.005}
      />
    </group>
  );
}
