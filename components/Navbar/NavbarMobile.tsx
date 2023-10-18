import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { Divide as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y:"-100vh" },
  visible: { opacity: 1, y:0 },
    exit: { opacity: 0, y:"100vh", transition: { ease: "easeInOut"} },
};

export default function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.navMobileLeftBlock}>
        <Link href="/studio">
          <span className={styles.rl_logo}></span>
        </Link>
      </div>
      <div className={styles.navMobileRightBlock}>
        <Hamburger color="#000000" onToggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <AnimatePresence>
            <motion.div
              className={styles.navMobileMenu}
              key="navMobile"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul>
                <Link 
                className={styles.navMobileLinks} 
                href="/projectIndex"
                >
                  <span>Index</span>
                </Link>
                <Link className={styles.navMobileLinks} href="/works">
                  <span>Works</span>
                </Link>
                <Link className={styles.navMobileLinks} href="/about">
                  <span>About</span>
                </Link>
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
