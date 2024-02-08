import React, { useEffect, useState } from "react";
import studiocss from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import MainTitle from "@/components/MainTitle/MainTitle";
import useWindowSize from "@/hooks/useWindowSize";

export default function Studio() {
  const [Loading, setLoading] = useState(true);
  const splineURL = (process.env.SPLINE_URL != undefined) ? process.env.SPLINE_URL+"" : process.env.splineURL+""; 

  const size = useWindowSize();
  
  return (
    <>
      <MainTitle />
      {Loading && <div className="classic-2">Coffee Time</div>}
        <Spline
          className={studiocss.threedbg}
          onLoad={() => setLoading(false)}
          scene={splineURL}
        />
        {size != undefined && size.width != undefined && size.width > 600 ? (
          <>
        <span className={studiocss.studioEntry}>
          Leite Studio, life is a lab-like, a place where curiosity drives you daily.
        </span>
        </>
        ) : 
        <>
        </>
        }
    </>
  );
}