import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Styled from "./ProjectIndexBlock.styled";
import Link from "next/link";
import styles from "@/styles/ProjectIndex.module.css";

interface imgObj {
  url: string;
}

interface ProjectIndexBlockInterface {
  project_id: number;
  title: string;
  tags: Array<string>;
  year: number;
  location: string;
  images?: Array<imgObj>;
}

export default function ProjectIndexBlock({
  project_id,
  title,
  tags,
  year,
  location,
  images,
}: ProjectIndexBlockInterface) {
  const [vpInnerWidth, setVpInnerWidth] = useState<number>();
  const cardImgVariants = {
    hidden: {
      opacity: 0,
      height: ["0px"],
    },
    visible: {
      opacity: 1,
      height: [
        "0px",
        "50px",
        "100px",
        "150px",
        "200px",
        "250px",
        "300px",
        "350px",
        "400px",
        "450px",
        "500px",
        "517px",
      ],
      //   transition: {
      //     type: "spring",
      //     delay: 0.5,
      //   },
      transition: {
        type: "linear",
        delay: 0.5,
      },
    },
  };
  
  function handleResize() {
    if (typeof window !== "undefined") {
      setVpInnerWidth(window.innerWidth);
    }
  }
  

  useEffect(() => {
    handleResize(); // Initialize the value on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  
  return (
    <>
      <motion.div
        initial="hidden"
        whileHover="visible"
        animate="hidden"
        key={project_id}
      >
        <Link href={`/works/${project_id}`}>
          <Styled.ProjectIndexBlockDiv>
            <Styled.ProjectIndexBlockOneDiv>
              <div>{title}</div>
              <div>{images && images.length} img</div>
            </Styled.ProjectIndexBlockOneDiv>
            <Styled.ProjectIndexBlockTwoDiv>
              <div>
                {tags.map((tag: string, index: number) => {
                  if (tags.length - 1 == index) {
                    return tag.replace("_", " ");
                  } else {
                    return tag.replace("_", " ") + ", ";
                  }
                })}
              </div>
              <div>{year}</div>
            </Styled.ProjectIndexBlockTwoDiv>
          </Styled.ProjectIndexBlockDiv>
        </Link>
        {(vpInnerWidth != undefined && vpInnerWidth >= 800) && <motion.div variants={cardImgVariants} className={styles.cardImg}>
          {images != undefined && (
            <Styled.CardImgDiv url={images[0].url}></Styled.CardImgDiv>
          )}
        </motion.div>}
      </motion.div>
    </>
  );
}
