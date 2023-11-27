import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { projectInterface, ProjectsInterface } from '@/Interfaces/ProjectInterface';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';
import * as Styled from "./WorksButtons600.styled";

export default function WorksButtons600({ project }: ProjectsInterface) {
    const router = useRouter();
    const size = useWindowSize();
    const projectId = Number(router.query.id);
    const [isLoading, setIsLoading] = useState(true);
  
    const [currentProject, setCurrentProject] = useState<projectInterface>();
    const [prevProjectId, setPrevProject] = useState<projectInterface>();
    const [nextProjectId, setNextProject] = useState<projectInterface>();

    const [nextB, setNextB] = useState<Boolean>(false);
    const [prevB, setPrevB] = useState<Boolean>(false);
  
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
  
    useEffect(() =>{
      if((prevProjectId == undefined && currentProject?.project_id == 0) || currentProject?.project_id == prevProjectId?.project_id){
        setNextB(true);
        setPrevB(false);
        
      }else if(currentProject?.project_id == nextProjectId?.project_id){
        setNextB(false);
        setPrevB(true);
        
      }else{
        setNextB(true);
        setPrevB(true);
      }
    }, [prevProjectId, currentProject, nextProjectId])
  
    if (router.isFallback) {
      return <div>Loading...</div>;
    }
  
    if (isLoading) return <p>Loading...</p>;

  return (
  <>
    <Styled.workDetails600Class>
      <Styled.workDetailsRightButtons600Class width={size.width} nextB={nextB} prevB={prevB}>
          {prevProjectId != undefined && currentProject?.project_id != 0 && prevProjectId?.project_id >= 0 && (
            <Link href={`/works/${prevProjectId?.project_id}`}>
              &#10094; Prev
            </Link>
          )}
          {nextProjectId != undefined && currentProject?.project_id != nextProjectId?.project_id && nextProjectId?.project_id >= 0 && (
            <Link href={`/works/${nextProjectId?.project_id}`}>
              Next &#10095;
            </Link>
          )}
      </Styled.workDetailsRightButtons600Class>
        <Styled.workDetailsNextPrevProject600Class nextB={nextB} prevB={prevB}>
            {prevProjectId != undefined && currentProject?.project_id != 0 && <span>{prevProjectId.title}</span>}
            {nextProjectId != undefined && currentProject?.project_id != nextProjectId?.project_id && <span>{nextProjectId.title}</span>}
        </Styled.workDetailsNextPrevProject600Class>
    </Styled.workDetails600Class>
  </>
  )
}
