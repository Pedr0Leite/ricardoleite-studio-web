import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedText() {
  const ctrls = useAnimation();
  const line1 = "He's more than a Designer...";
  const line2 = "He's a super Dad.";

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
        console.log('inview')
      ctrls.start("visible");
    }
    if (!inView) {
        console.log('not inview')
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <>
      <motion.h3 className="load-screen--message"
      ref={ref}
      variants={sentence}
      initial="hidden"
    //   animate="visible"
      animate={ctrls}
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />

        {line2.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h3>
    </>
  );
}
