export interface ArchiveInterface {
  archive: Array<archiveObjInterface>,
  }

export interface archiveObjInterface {
    otherworks: any;
    id: string,
    active: boolean,
    image?: assetObjectInterface,
    name: string,
    order: number,
    video?: assetObjectInterface,
    aspectRatio: string
  }

interface assetObjectInterface {
    url: string;
}

export enum aspectRatioEnum {
  ar1_1 = "ar_1_1",
  ar4_3 = "ar_4_3",
  ar3_4 = "ar_3_4",
  ar16_9 = "ar_16_9",
  ar9_16 = "ar_9_16",
}