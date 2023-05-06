import React from "react";
import indexProjectData from "../indexProjectData.json";
import styles from "@/styles/ProjectIndex.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import ProjectIndexBlock from "@/components/ProjectIndexBlock/ProjectIndexBlock";

const workBlocksQuery = `
query Projects {
  projects (first: 20) {
    project_id
    title
    tags
    year
    location
    images {
      url
    }
  }
}     
`;

//Runs at build time
export const getStaticProps = async () => {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master"
  );

  const data = await hygraph.request(workBlocksQuery);

  return {
    props: {
      projects: data,
    },
  };
};

interface projectInterface {
    project_id: number,
    title: string,
    tags: Array<string>,
    year: number,
    location: string,
    images: Array<object>
}


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
        sortedProjects.map((_value: any) => {
          return (
            <ProjectIndexBlock key={_value.project_id} project_id={_value.project_id} title={_value.title} tags={_value.tags} year={_value.year} location={_value.location} images={_value.images}/>
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
