import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface NavbarInterface {
    children: ReactNode;
  }

export default function Layout({children}: NavbarInterface) {
  return (
    <>
    <Navbar />
        {children}
    </>
  )
}
