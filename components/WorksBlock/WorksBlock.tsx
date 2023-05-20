import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorksBlockInterface {
  imgBlock1?: {
    0: {
      imgSrc1?: string;
      clientId?: number;
      clientName?: string;
      tags: Array<string>;
    };
    1: {
      imgSrc2?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
    2: {
      imgSrc3?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
  };
  imgBlock2?: {
    0: {
      imgSrc4?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
    1: {
      imgSrc5?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
    2: {
      imgSrc6?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
  };
  imgBlock3?: {
    0: {
      imgSrc7?: string;
      clientId?: number;
      clientName?: string;
      tags?: Array<string>;
    };
  };
}

const workBlockVariant = {
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
    transition: {
      type: "linear",
      delay: 0.5,
    },
  },
};

export default function WorksBlock({
  imgBlock1,
  imgBlock2,
  imgBlock3,
}: WorksBlockInterface) {

  function createTags(tagsArr:Array<string>){
    return tagsArr.map((tag: string, index: number) => {
      if (tagsArr.length - 1 == index) {
        return tag.replace("_", " ");
      } else {
        return tag.replace("_", " ") + ", ";
      }
    })
  }

  let tags1;
  let tags2;
  let tags3;
  let tags4;
  let tags5;
  let tags6;
  let tags7;

  if(imgBlock1?.[0].tags){
    tags1 = createTags(imgBlock1?.[0].tags);
  }

  if(imgBlock1?.[1].tags){
    tags2 = createTags(imgBlock1?.[1].tags);
  }

  if(imgBlock1?.[2].tags){
    tags3 = createTags(imgBlock1?.[2].tags);
  }

  if(imgBlock2?.[0].tags){
    tags4 = createTags(imgBlock2?.[0].tags);
  }

  if(imgBlock2?.[1].tags){
    tags5 = createTags(imgBlock2?.[1].tags);
  }

  if(imgBlock2?.[2].tags){
    tags6 = createTags(imgBlock2?.[2].tags);
  }

  if(imgBlock3?.[0].tags){
    tags7 = createTags(imgBlock3?.[0].tags);
  }

  
  return (
    <div className="worksGrid">
      {imgBlock1 && <div className="worksRowBlock1">
        <div className="worksBlock1">
          <Link href={`/works/${imgBlock1?.[0].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[0].imgSrc1} className="figure-1"/>
            </p>
            <p>
              <span>{imgBlock1?.[0].clientName}</span>
              <span>{tags1}</span>
            </p>
          </Link>
        </div>
        <div className="worksBlock2">
          <Link href={`/works/${imgBlock1?.[1].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[1].imgSrc2} className="figure-2 aspect16_9"/>
            </p>
            <p>
              <span>{imgBlock1?.[1].clientName}</span>
              <span>{tags2}</span>
            </p>
          </Link>
          <Link href={`/works/${imgBlock1?.[2].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[2].imgSrc3} className="figure-3 aspect1_1"/>
            </p>
            <p>
              <span>{imgBlock1?.[2].clientName}</span>
              <span>{tags3}</span>
            </p>
          </Link>
        </div>
      </div>}
      {imgBlock2 && <div className="worksRowBlock2">
        <Link href={`/works/${imgBlock2?.[0].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[0].imgSrc4} className="figure-4 aspect1_1"/>
          </p>
          <p>
            <span>{imgBlock2?.[0].clientName}</span>
            <span>{tags4}</span>
          </p>
        </Link>
        <Link href={`/works/${imgBlock2?.[1].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[1].imgSrc5} className="figure-5 aspect16_9"/>
          </p>
          <p>
            <span>{imgBlock2?.[1].clientName}</span>
            <span>{tags5}</span>
          </p>
        </Link>
        <Link href={`/works/${imgBlock2?.[2].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[2].imgSrc6} className="figure-6 aspect4_5"/>
          </p>
          <p>
            <span>{imgBlock2?.[2].clientName}</span>
            <span>{tags6}</span>
          </p>
        </Link>
      </div>}
      {imgBlock3 && <div className="worksRowBlock3">
        <Link href={`/works/${imgBlock3?.[0].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock3?.[0].imgSrc7} className="figure-7 aspect16_9" />
          </p>
          <p>
            <span>{imgBlock3?.[0].clientName}</span>
            <span>{tags7}</span>
          </p>
        </Link>
      </div>}
      {/* <SlidingText/> */}
    </div>
  );
}
