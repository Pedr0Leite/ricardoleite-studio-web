import React from "react";
import styles from "@/styles/ProjectIndex.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import ProjectIndexBlock from "@/components/ProjectIndexBlock/ProjectIndexBlock";
import { workProjectBlocksQuery } from "@/queries/projectQueries";
import { projectInterface, ProjectsInterface } from "@/Interfaces/ProjectInterface";

//Runs at build time
export const getStaticProps = async () => {
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");

  const data = await hygraph.request(workProjectBlocksQuery);

  return {
    props: {
      projects: data,
    },
  };
};

// interface projectInterface {
//     project_id: number,
//     title: string,
//     tags: Array<string>,
//     year: number,
//     location: string,
//     images: Array<object>
// }


export default function ProjectIndex({projects} : any) {
const sortedProjects = projects.projects.sort(function(a:projectInterface, b:projectInterface) {
  return b.year - a.year;
});
  //   const cardImgVariants = {
  //     hidden: {
  //       opacity: 0,
  //     },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         delay: 0.5,
  //       },
  //     },
  //   };
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

  return (
    <div className={styles.projectIndexMain}>
      {sortedProjects !== undefined &&
        sortedProjects.map((_value: any, index: number) => {
          let isLastElem = false;
          if(index == sortedProjects.length - 1){
            isLastElem = true;
        }
          return (
            <ProjectIndexBlock key={_value.project_id} project_id={_value.project_id} title={_value.title} tags={_value.tags} year={_value.year} location={_value.location} images={_value.images} isLastElem={isLastElem}/>
          );
        })}
      {/* <motion.div
        initial="hidden"
        whileHover="visible"
        animate="hidden"
        className={styles.projectIndexBlock}
      >
        <div className={styles.projectIndexBlockOne}>
          <div>Altava</div>
          <div>4 img</div>
        </div>
        <div className={styles.projectIndexBlockTwo}>
          <div>Art Direction, Branding, Graphic Design</div>
          <div>2022</div>
        </div>
        <motion.div
          variants={cardImgVariants}
          className={styles.cardImg}
        ></motion.div>
      </motion.div> */}
    </div>
  );
}
