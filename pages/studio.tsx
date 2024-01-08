import React, { useState } from "react";
import styles from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import MainTitle from "@/components/MainTitle/MainTitle";

export default function Studio() {
  const [Loading, setLoading] = useState(true);
  const splineURL = process.env.splineURL != "" ? process.env.splineURL+"" : process.env.SPLINE_URL+"";

  return (
    <>
      <MainTitle />
      {Loading && <div className="classic-2">Loading</div>}
        <Spline
          className={styles.threedbg}
          onLoad={() => setLoading(false)}
          scene={"https://prod.spline.design/BkrGLpQQ4CiqLZ-m/scene.splinecode"}
        />
    </>
  );
}
