import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import AnimatedTitle from "@/components/Animated/AnimatedTitle";
import AnimatedText from "@/components/Animated/AnimatedText";
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
