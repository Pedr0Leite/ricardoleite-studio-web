import { ReactNode } from "react";

export interface SpecificProjectInterface {
    title: ReactNode;
    year: ReactNode;
    location: ReactNode;
    tags: ReactNode;
    info: ReactNode;
    projects: [
      {
        media: any;
        project_id: number;
        title: string;
        tags: Array<string>;
        year: number;
        location: string;
        active: boolean;
        info: string;
        images: Array<object>;
      }
    ];
  }