import { Sky, Sparkles } from "@react-three/drei";
import { useTheme } from "@/context/ThemeContext";
import { useFrame } from "@react-three/fiber";
import React from "react";

const TURBIDITY_LIGHT = 0.2;
const TURBIDITY_DARK = 10;
const TURBIDITY_STEP = 0.1;

const RAYLEIGH_LIGHT = 0.2;
const RAYLEIGH_DARK = 1.7;
const RAYLEIGH_STEP = 0.1;

const INCLINATION_LIGHT = 0.521;
const INCLINATION_DARK = 0.46;
const INCLINATION_STEP = 0.005;

export default function Environment() {
  const { theme } = useTheme();
  const isAnimating = React.useRef(false);
  const [data, setData] = React.useState({
    turbidity: theme === "dark" ? TURBIDITY_DARK : TURBIDITY_LIGHT,
    rayleigh: theme === "dark" ? RAYLEIGH_DARK : RAYLEIGH_LIGHT,
    inclination: theme === "dark" ? INCLINATION_DARK : INCLINATION_LIGHT,
  });

  React.useEffect(() => {
    isAnimating.current = true;
  }, [theme]);

  useFrame((state, delta) => {
    if (!isAnimating.current) return;

    // console.log("anum");
    setData((data) => {
      let { turbidity, rayleigh, inclination } = data;
      let newData = { turbidity, rayleigh, inclination };

      //prettier-ignore
      if (theme === "dark") {
        if (turbidity + TURBIDITY_STEP < TURBIDITY_DARK) turbidity += TURBIDITY_STEP;
        if (rayleigh + RAYLEIGH_STEP < RAYLEIGH_DARK) rayleigh += RAYLEIGH_STEP;
        if (inclination - INCLINATION_STEP > INCLINATION_DARK) inclination -= INCLINATION_STEP;
        newData = { turbidity, rayleigh, inclination };
      }

      //prettier-ignore
      if (theme === "light") {
        if (turbidity - TURBIDITY_STEP > TURBIDITY_LIGHT) turbidity -= TURBIDITY_STEP;
        if (rayleigh - RAYLEIGH_STEP > RAYLEIGH_LIGHT) rayleigh -= RAYLEIGH_STEP;
        if (inclination + INCLINATION_STEP < INCLINATION_LIGHT) inclination += INCLINATION_STEP;
        newData = { turbidity, rayleigh, inclination };
      }

      if (
        newData.turbidity === data.turbidity &&
        newData.rayleigh === data.rayleigh &&
        newData.inclination === data.inclination
      ) {
        isAnimating.current = false;
      }

      return newData;
    });
  });

  return (
    <group>
      <Sparkles
        size={100}
        speed={0.5}
        scale={1000}
        count={10000}
        color={theme === "dark" ? "#f5e58c" : "#e2f8eb"}
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
      {/* <Sky
        azimuth={180}
        turbidity={theme === "dark" ? TURBIDITY_DARK : TURBIDITY_LIGHT}
        rayleigh={theme === "dark" ? RAYLEIGH_DARK : RAYLEIGH_LIGHT}
        inclination={theme === "dark" ? INCLINATION_DARK : INCLINATION_LIGHT} // change that!
        distance={100000}
        // sunPosition={[1000, 600, 1000]}
        mieDirectionalG={0.7}
        mieCoefficient={0.005}
      /> */}
    </group>
  );
}
