import React, { useState } from "react";
import styles from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import MainTitle from "@/components/MainTitle/MainTitle";

// https://prod.spline.design/xrJgKlLhlatkwEaY/scene.splinecode

// real
// https://prod.spline.design/BkrGLpQQ4CiqLZ-m/scene.splinecode

export default function Studio() {
  const [Loading, setLoading] = useState(true);

  return (
    <>
      <MainTitle />
      {Loading && <div className="classic-2">Loading</div>}
        <Spline
          className={styles.threedbg}
          onLoad={() => setLoading(false)}
          scene={process.env.splineURL+""}
        />
    </>
  );
}
