export interface projectInterface {
    project_id: number;
    title: string;
    tags: Array<string>;
    year: number;
    location: string;
    isFirstProject: boolean;
    isLastProject: boolean;
    info: string;
    images: Array<{
      url: string;
      mimeType:string;
    }>;
  }

export interface ProjectsInterface {
    project: Array<projectInterface>;
  }
  
//   interface projectInterface {
//     project_id: number,
//     title: string,
//     tags: Array<string>,
//     year: number,
//     location: string,
//     images: Array<object>
// }

export interface ProjectsWorkBlockInterface {
  projects: {
    workBlockEntries: Array<ProjectWorkBlockObjectInterface>;
  };
}

export interface ProjectWorkBlockObjectInterface {
  id?: string;
  blockNumber?: string;
  img: {
    url?: string;
    mimeType:string;
  };
  sectionNumber?: number;
  imgNumber?: string;
  project: {
    id?: string;
    project_id?: number;
    title?: string;
    tags:Array<string>
    isFirstProject: boolean;
    isLastProject: boolean;
  };
}
