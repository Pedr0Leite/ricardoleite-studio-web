import React, { useState, useEffect, Children } from "react";
import * as Styled from "./AboutMainImg.styled";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";


interface AboutMainImgUrlInterface {
    url: string;
    logoUrl: string;
}

export default function AboutMainImg({ url, logoUrl }: AboutMainImgUrlInterface) {
    const size = useWindowSize();

    return (
        <Styled.mainAbstrcImg url={url}>
            <div>
                {size != undefined && size.width != undefined && size.width > 768 ? 
                <Styled.mainAbstrcOverlapImg src={logoUrl} alt="overlap image" />
                :
                <></>
                }
            </div>
        </Styled.mainAbstrcImg>
      );
    }