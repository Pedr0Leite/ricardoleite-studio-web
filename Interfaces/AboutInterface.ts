import { LinksInterface, linkInterface } from "./LinksInterface";

export interface AboutsInterface {
    abouts: Array<aboutInterface>,
    links: Array<linkInterface>
  }

export interface aboutInterface {
    aboutTags: string;
    aboutText: string;
    image?: imageObjectInterface;
    blockNumber?:string;
    direction?:string;
    hasMoreThanOneParagraph: boolean;
  }

interface imageObjectInterface {
    url: string;
}

export enum aboutTagsEnum {
  logo = "logo",
  main = "main",
  bio1 = "bio1",
  bio2 = "bio2",
  studio = "studio",
  director = "director",
  clients_agencies = "clients_agencies",
  magazines = "magazines",
  books = "books",
  prizes = "prizes",
  intro = "intro"
}