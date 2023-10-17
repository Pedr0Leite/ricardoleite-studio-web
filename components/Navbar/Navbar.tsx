import React, { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import dynamic from "next/dynamic";
import rlLogo from "../public/RL_Logotype.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";
import NavbarMobile from "./NavbarMobile";

const Clock = dynamic(() => import("../Clock/Clock"), { ssr: false });

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`${styles.navbar} ${
        scrollDirection === "down" ? styles.down : ""
      }`}
    >
      <NavbarMobile />
      <div className={styles.navLeftBlock}>
        <Link href="/">
        {/* <Link href="/studio"> */}
          {/* <span className={styles.rl_logo}></span> */}
          <span>Info</span>
        </Link>
        <Link href="/works">
          <span>Works</span>
        </Link>
      </div>
      <div className={styles.navRightBlock}>
        <Link href="/projectIndex">
          <span>Index</span>
        </Link>
        <Clock />
        <Link href="/about">
          <span>About</span>
        </Link>
      </div>
    </nav>
  );
}
