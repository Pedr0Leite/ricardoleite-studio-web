import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { projectInterface, ProjectsInterface } from '@/Interfaces/ProjectInterface';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';
import * as Styled from "./WorksButtons.styled";

export default function WorksButtons({ project }: ProjectsInterface) {
    const router = useRouter();
    const size = useWindowSize();
    const projectId = Number(router.query.id);
    const [isLoading, setIsLoading] = useState(true);
  
    const [currentProject, setCurrentProject] = useState<projectInterface>();
    const [prevProjectId, setPrevProject] = useState<projectInterface>();
    const [nextProjectId, setNextProject] = useState<projectInterface>();

    const [nextB, setNextB] = useState<Boolean>(false);
    const [prevB, setPrevB] = useState<Boolean>(false);
    
    const [workDetailsRightButtonsClass, setworkDetailsRightButtonsClass] = useState("workDetailsRightButtons");
    const [workDetailsRightButtons600Class, setworkDetailsRightButtons600Class] = useState("workDetailsRightButtons-600");
    const [workDetailsNextPrevProjectClass, setworkDetailsNextPrevProjectClass] = useState("workDetailsNextPrevProject");
    const [workDetailsNextPrevProject600Class, setworkDetailsNextPrevProject600Class] = useState("workDetailsNextPrevProject-600");
  
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
        if(size.width != undefined && size.width >= 600){
          setworkDetailsRightButtonsClass("workDetailsRightButtonsJustifyEnd workDetailsRightButtons");
          setworkDetailsNextPrevProjectClass("workDetailsNextPrevProjectJustifyEnd workDetailsNextPrevProject");
        }else{
          setworkDetailsRightButtons600Class("workDetailsRightButtonsJustifyEnd workDetailsRightButtons-600");
          setworkDetailsNextPrevProject600Class("workDetailsNextPrevProjectJustifyEnd workDetailsNextPrevProject-600");
        }
        setNextB(true);
        setPrevB(false);
        
      }else if(currentProject?.project_id == nextProjectId?.project_id){
        if(size.width != undefined && size.width >= 600){
          setworkDetailsRightButtonsClass("workDetailsRightButtonsJustifyStart workDetailsRightButtons");
          setworkDetailsNextPrevProjectClass("workDetailsNextPrevProjectJustifyStart workDetailsNextPrevProject");
        }else{
          setworkDetailsRightButtons600Class("workDetailsRightButtonsJustifyStart workDetailsRightButtons-600");
          setworkDetailsNextPrevProject600Class("workDetailsNextPrevProjectJustifyStart workDetailsNextPrevProject-600");
        }
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
        <Styled.workDetailsRightButtonsClass nextB={nextB} prevB={prevB}>
          {prevProjectId != undefined && currentProject?.project_id != 0 && prevProjectId?.project_id >= 0 && (
            <Link href={`/works/${prevProjectId?.project_id}`}>
               {'< Prev'}
            </Link>
          )}
          {nextProjectId != undefined && currentProject?.project_id != nextProjectId?.project_id && nextProjectId?.project_id >= 0 && (
            <Link href={`/works/${nextProjectId?.project_id}`}>
              {'Next >'}
            </Link>
          )}
        </Styled.workDetailsRightButtonsClass>
        <Styled.workDetailsNextPrevProjectClass width={size.width} nextB={nextB} prevB={prevB}>
          {prevProjectId != undefined && currentProject?.project_id != 0 && <span>{prevProjectId.title}</span>}
          {nextProjectId != undefined && currentProject?.project_id != nextProjectId?.project_id && <span>{nextProjectId.title}</span>}
          </Styled.workDetailsNextPrevProjectClass>
        </>
  )
}
