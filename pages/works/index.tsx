import { ProjectsWorkBlockInterface } from "@/Interfaces/ProjectInterface";
import MainTitle from "@/components/MainTitle/MainTitle";
import SlidingText from "@/components/SlidingText/SlidingText";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import { workBlocksQuery } from "@/queries/projectQueries";
import { GraphQLClient } from "graphql-request";

//Runs at build time
export const getStaticProps = async () => {
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");

  const data = await hygraph.request(workBlocksQuery);

  return {
    props: {
      projects: data,
    },
  };
};

export default function Works({ projects }: ProjectsWorkBlockInterface) {
   const projectsBlocks = projects.workBlockEntries;

  //SECTIONS
  const sectionOne = projectsBlocks.filter(
    (section: any) => section.sectionNumber == 1
    );
  const sectionTwo = projectsBlocks.filter(
    (section: any) => section.sectionNumber == 2
    );
  const sectionThree = projectsBlocks.filter(
    (section: any) => section.sectionNumber == 3
    );

    //SECTION ONE
  const sectionOneRowOne = sectionOne.filter(
    (block: any) => block.blockNumber == "block1"
  );
  const sectionOneRowTwo = sectionOne.filter(
    (block: any) => block.blockNumber == "block2"
  );
  const sectionOneRowThree = sectionOne.filter(
    (block: any) => block.blockNumber == "block3"
  );

  //SECTION TWO
  const sectionTwoRowOne = sectionTwo.filter(
    (block: any) => block.blockNumber == "block1"
  );
  const sectionTwoRowTwo = sectionTwo.filter(
    (block: any) => block.blockNumber == "block2"
  );
  const sectionTwoRowThree = sectionTwo.filter(
    (block: any) => block.blockNumber == "block3"
  );

  //SECTION THREE
  const sectionThreeRowOne = sectionThree.filter(
    (block: any) => block.blockNumber == "block1"
  );

  return (
    <>
      <MainTitle />
      <div className="worksMainDiv" id="worksMainDiv">
        {sectionOne && (
          <WorksBlock
            key="sectionOne"
            imgBlock1={{
              0: {
                imgSrc1: sectionOneRowOne[0].img.url,
                clientId: sectionOneRowOne[0].project.project_id,
                clientName: sectionOneRowOne[0].project.title,
                tags: sectionOneRowOne[0].project.tags
              },
              1: {
                imgSrc2: sectionOneRowOne[1].img.url,
                clientId: sectionOneRowOne[1].project.project_id,
                clientName: sectionOneRowOne[1].project.title,
                tags: sectionOneRowOne[1].project.tags
              },
              2: {
                imgSrc3: sectionOneRowOne[2].img.url,
                clientId: sectionOneRowOne[2].project.project_id,
                clientName: sectionOneRowOne[2].project.title,
                tags: sectionOneRowOne[2].project.tags
              },
            }}
            imgBlock2={{
              0: {
                imgSrc4: sectionOneRowTwo[0].img.url,
                clientId: sectionOneRowTwo[0].project.project_id,
                clientName: sectionOneRowTwo[0].project.title,
                tags: sectionOneRowTwo[0].project.tags
              },
              1: {
                imgSrc5: sectionOneRowTwo[1].img.url,
                clientId: sectionOneRowTwo[1].project.project_id,
                clientName: sectionOneRowTwo[1].project.title,
                tags: sectionOneRowTwo[1].project.tags
              },
              2: {
                imgSrc6: sectionOneRowTwo[2].img.url,
                clientId: sectionOneRowTwo[2].project.project_id,
                clientName: sectionOneRowTwo[2].project.title,
                tags: sectionOneRowTwo[2].project.tags
              },
            }}
            imgBlock3={{
              0: {
                imgSrc7: sectionOneRowThree[0].img.url,
                clientId: sectionOneRowThree[0].project.project_id,
                clientName: sectionOneRowThree[0].project.title,
                tags: sectionOneRowThree[0].project.tags
              },
            }}
          />
        )}
        {sectionTwo && (
          <WorksBlock
            key={"sectionTwo"}
            imgBlock1={{
              0: {
                imgSrc1: sectionTwoRowOne[0].img.url,
                clientId: sectionTwoRowOne[0].project.project_id,
                clientName: sectionTwoRowOne[0].project.title,
                tags: sectionTwoRowOne[0].project.tags
              },
              1: {
                imgSrc2: sectionTwoRowOne[1].img.url,
                clientId: sectionTwoRowOne[1].project.project_id,
                clientName: sectionTwoRowOne[1].project?.title,
                tags: sectionTwoRowOne[1].project.tags
              },
              2: {
                imgSrc3: sectionTwoRowOne[2].img.url,
                clientId: sectionTwoRowOne[2].project.project_id,
                clientName: sectionTwoRowOne[2].project?.title,
                tags: sectionTwoRowOne[2].project.tags,
              },
            }}
            imgBlock2={{
              0: {
                imgSrc4: sectionTwoRowTwo[0].img.url,
                clientId: sectionTwoRowTwo[0].project.project_id,
                clientName: sectionTwoRowTwo[0].project?.title,
                tags: sectionTwoRowTwo[0].project.tags
              },
              1: {
                imgSrc5: sectionTwoRowTwo[1].img.url,
                clientId: sectionTwoRowTwo[1].project.project_id,
                clientName: sectionTwoRowTwo[1].project?.title,
                tags: sectionTwoRowTwo[1].project.tags
              },
              2: {
                imgSrc6: sectionTwoRowTwo[2].img.url,
                clientId: sectionTwoRowTwo[2].project.project_id,
                clientName: sectionTwoRowTwo[2].project?.title,
                tags: sectionTwoRowTwo[2].project.tags
              },
            }}
            imgBlock3={{
              0: {
                imgSrc7: sectionTwoRowThree[0].img.url,
                clientId: sectionTwoRowThree[0].project.project_id,
                clientName: sectionTwoRowThree[0].project?.title,
                tags: sectionTwoRowThree[0].project.tags
              },
            }}
          />
        )}
        {sectionThree && (
          <WorksBlock
            key={"sectionThree"}
            imgBlock1={{
              0: {
                imgSrc1: sectionThreeRowOne[0].img.url,
                clientId: sectionThreeRowOne[0].project.project_id,
                clientName: sectionThreeRowOne[0].project?.title,
                tags: sectionThreeRowOne[0].project.tags
              },
              1: {
                imgSrc2: sectionThreeRowOne[1].img.url,
                clientId: sectionThreeRowOne[1].project.project_id,
                clientName: sectionThreeRowOne[1].project?.title,
                tags: sectionThreeRowOne[1].project.tags
              },
              2: {
                imgSrc3: sectionThreeRowOne[2].img.url,
                clientId: sectionThreeRowOne[2].project.project_id,
                clientName: sectionThreeRowOne[2].project?.title,
                tags: sectionThreeRowOne[2].project.tags
              },
            }}
          />
        )}
        <SlidingText />
      </div>
    </>
  );
}
