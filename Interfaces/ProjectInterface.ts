export interface projectInterface {
    project_id: number;
    title: string;
    tags: Array<string>;
    year: number;
    location: string;
    info: string;
    images: Array<{
      url: string;
    }>;
  }

export interface ProjectsInterface {
    // project: SpecificProjectInterface;
    project: Array<projectInterface>;
    // projectImgs: Array<Object>;
  }