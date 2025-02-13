import { ProjectsInterface, projectInterface } from "@/Interfaces/ProjectInterface";
import { SpecificProjectInterface } from "@/Interfaces/SpecificProjectInterface";
import WorksButtons600 from "@/components/WorksButtons/WorkButtons600";
import WorksButtons from "@/components/WorksButtons/WorksButtons";
import useWindowSize from "@/hooks/useWindowSize";
import { projectsQuery, specificIDQuery } from "@/queries/projectQueries";
import { GraphQLClient } from "graphql-request";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Runs at build time - PATHS
export const getStaticPaths = async () => {
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");

  const data: any = await hygraph.request(projectsQuery);

  const paths = data.projects.map((_project: any) => {
    return {
      params: { id: _project.project_id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false, //fallback pages
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");
  
  const data: SpecificProjectInterface = await hygraph.request(specificIDQuery);
  
  return {
    props: { project: data.projects },
  };
};


export default function WorksDetails({ project }: ProjectsInterface) {
  const router = useRouter();
  const projectId = Number(router.query.id);
  const [isLoading, setIsLoading] = useState(true);

  const [currentProject, setCurrentProject] = useState<projectInterface>();
  const [prevProjectId, setPrevProject] = useState<projectInterface>();
  const [nextProjectId, setNextProject] = useState<projectInterface>();

  const size = useWindowSize();
  let tags;
  
  if (currentProject && currentProject.tags) {
    tags = currentProject.tags.map((tag: string, index: number) => {
      if (currentProject.tags.length - 1 == index) {
        return tag.replace("_", " ");
      } else {
        return tag.replace("_", " ") + ", ";
      }
    });
  }
  
  useEffect(() => {
    project.forEach((project: projectInterface) => {
      if (project.project_id === projectId) {
        setCurrentProject(project);
      } else if (project.project_id === projectId - 1) {
        setPrevProject(project);
      } else if (project.project_id === projectId + 1) {
        setNextProject(project);
      }
    });

    setIsLoading(false);
  }, [project, projectId]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="worksDetailsMainDiv">
      {currentProject != undefined && (
        <>
          <div className="worksDetailsLeft">
            <div className="worksDetailsTitle">
              <div>{currentProject.title}</div>
              <div>{currentProject.year}</div>
            </div>
            <div className="worksDetailsInfoMain">
              <div className="worksDetailsInfo">
                <span>Client</span>
                <span>{currentProject.title}</span>
              </div>
              <div className="worksDetailsInfo">
                <span>Year</span>
                <span>{currentProject.year}</span>
              </div>
              <div className="worksDetailsInfo">
                <span>Location</span>
                <span>{currentProject.location}</span>
              </div>
              <div className="worksDetailsInfo">
                <span>Services</span>
                <span>{tags}</span>
              </div>
              <div className="worksDetailsInfo">
                <span>Credits</span>
                <span>{currentProject.info}</span>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="worksDetailsRight">
        {currentProject?.images.map(
          (projImg: { url: string, mimeType:string }, index: number) => {
            
            if(projImg.mimeType.includes('image')){
              return (
                <img
                  src={projImg.url}
                  className="specificFigure aspect16_9"
                  key={`specific-img-${index}`}
                  loading="lazy"
                />
              );
            }else if(projImg.mimeType.includes('video')){
              return (
                <video
                  src={projImg.url}
                  className="specificFigure aspect16_9"
                  key={`specific-img-${index}`}
                  preload="auto"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                />
              );
            }
          }
        )}
        <WorksButtons project={project} />
      </div>
      {currentProject != undefined && (
      <div className="worksDetailsTitleMobile">
              <div>{currentProject.title}</div>
              <div>{currentProject.year}</div>
            </div>
            )}
            <WorksButtons600 project={project} />
    </div>
  );
}
