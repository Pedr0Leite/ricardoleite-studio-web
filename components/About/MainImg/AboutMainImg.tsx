import React from "react";
import * as Styled from "./AboutMainImg.styled";

interface AboutMainImgUrlInterface {
    url: string;
    logoUrl: string;
}

export default function AboutMainImg({ url, logoUrl }: AboutMainImgUrlInterface) {

    return (
        <Styled.mainAbstrcImg url={url}>
            <div>
                <Styled.mainAbstrcOverlapImg src={logoUrl} alt="overlap image" />
            </div>
        </Styled.mainAbstrcImg>
      );
    }