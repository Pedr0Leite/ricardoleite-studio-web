import React, { useRef, useState } from "react";
import styles from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import AnimatedText from "@/components/AnimatedText";
import MainTitle from "@/components/MainTitle/MainTitle";
import { GraphQLClient } from "graphql-request";

// //Runs at build time
// export const getStaticProps = async () => {
//     const hygraph = new GraphQLClient(
//       'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master'
//     );

//     const data = await hygraph.request(
//       `
//       query TestDatas {
//         testDatas {
//           createdAt
//           id
//           name
//           publishedAt
//           updatedAt
//           img {
//             url
//           }
//         }
//       }
//       `
//     );

//     return {
//       props: {
//         data,
//       },
//     };
//   }

export default function Studio() {
  const [Loading, setLoading] = useState(true);
  return (
    <>
      {/* <div className={styles.mainDiv}>
      <div className={styles.title}> */}
      {/* <motion.div
        className={styles.title}
        animate={{ scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      > */}
      {/* <p>
          <span>Ricardo Leite</span>
        </p> */}
      {/* </motion.div> */}
      {/* </div>
      <div className={styles.topDiv}>
        <span>Branding</span>
        <span>Design</span>
        <span>Art Direction</span>
        <span>Typography</span>
      </div> */}
      {/* <div className={styles.mainProjectsDiv}> */}
      {/* <div className="mainProjectsDiv"> */}
      {/* <div className="leftMainDiv"> */}
      {/* <div className="titleTwo">
            <p>
              <span>More than a Designer</span>
            </p>
          </div> */}
      {/* <AnimatedTitle></AnimatedTitle> */}
      {/* <AnimatedText></AnimatedText> */}
      {/* </div> */}
      {/* <div className="rightMainDiv">
          <Spline
            // className={styles.threedbg}
            scene="https://prod.spline.design/MpvHJsLyB5i58B9q/scene.splinecode"
          />
        </div> */}
      {/* </div> */}
      {/* </div> */}
      <MainTitle />
      {Loading && <div className="classic-2">Loading</div>}
        <Spline
          className={styles.threedbg}
          // onLoad={onLoad}
          // onLoad={() => setTimeout(()=>{},500)}
          onLoad={() => setLoading(false)}
          scene="https://prod.spline.design/BkrGLpQQ4CiqLZ-m/scene.splinecode"
        />
    </>
  );
}
