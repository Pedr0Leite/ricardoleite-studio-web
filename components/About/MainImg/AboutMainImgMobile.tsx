import React from "react";
import * as Styled from "./AboutMainImgMobile.styled";

interface AboutMainImgUrlInterface {
    url: string;
}

export default function AboutMainImgMobile({ url }: AboutMainImgUrlInterface) {

    return (
        <Styled.mainAbstrcImgMobile url={url} />
      );
    }