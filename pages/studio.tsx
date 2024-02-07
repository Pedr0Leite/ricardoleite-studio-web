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
      {Loading && <div className="classic-2">Loading</div>}
        <Spline
          className={studiocss.threedbg}
          onLoad={() => setLoading(false)}
          scene={splineURL}
        />
        {size != undefined && size.width != undefined && size.width > 600 ? (
          <>
        <span className={studiocss.studioEntry}>
          Leite Studio is a portuguese one-man band creating sometimes he is a lonely wolf and most of the times, your mate, in a team from 2 to 3D everyday Like a Daddy
        </span>
        </>
        ) : 
        <>
        </>
        }
    </>
  );
}