import React from "react";
import styles from "@/styles/Navbar.module.css";
import useScrollDirection from "@/hooks/useScrollDirection";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavbarMobile from "./NavbarMobile";
import useWindowSize from "@/hooks/useWindowSize";

const Clock = dynamic(() => import("../Clock/Clock"), { ssr: false });

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  const size = useWindowSize();

  return (
    <nav
      className={`${styles.navbar} ${
        scrollDirection === "down" ? styles.down : ""
      }`}
    >
       {size != undefined && size.width != undefined && size.width < 600 ? 
      <NavbarMobile /> :
      (<>
      <div className={styles.navLeftBlock}>
      <Link href="/studio">
          <span className={styles.rl_logo}></span>
        </Link>
        <Link href="/project-index">
          <span>Index</span>
        </Link>
      </div>
      <div className={styles.navRightBlock}>
        <Link href="/works">
          <span>Works</span>
        </Link>
        <Clock />
        <Link href="/about">
          <span>About</span>
        </Link>
      </div>
      </>
      )
    }
    </nav>
  );
}
