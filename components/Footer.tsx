import React from "react";
import styles from "@/styles/About.module.css";
import useScrollDirection from "@/hooks/useScrollDirection";

export default function Footer() {
  const scrollDirection = useScrollDirection();

  return (
    <footer
      className={`${styles.footer} ${
        scrollDirection === "down" ? styles.down : ""
      }`}
    >
      <span>index</span>
      <span>mail</span>
    </footer>
  );
}
