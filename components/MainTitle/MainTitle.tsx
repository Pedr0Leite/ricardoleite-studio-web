import React, { useState, useEffect } from "react";
import * as Styled from "./MainTitle.styled";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

export default function MainTitle() {
  const router = useRouter();
  const route = router.route;

  // const [currentColor, setCurrentColor] = useState<string>("");

  const size = useWindowSize();
  const currentColor: string = route == "/studio" ? "white" : "#1a1a1a";
  const currentFirstRoute: boolean = route == "/studio" ? true : false;

  return (
    <>
      {size != undefined && size.width != undefined && size.width > 600 ? (
        <Styled.MainDiv>
          <Styled.Title color={currentColor}>
            <p>
              <span>Leite Studio</span>
            </p>
          </Styled.Title>
          <Styled.TopDiv color={currentColor}>
            <div>
            <span>Branding</span>
            <span>Creative Design</span>
            </div>
            <div>
            <span>Art Direction</span>
            <span>Typography</span>
            </div>
          </Styled.TopDiv>
        </Styled.MainDiv>
      ) : (
        <>
          {currentFirstRoute ? (
            <>
              <Styled.TitleMobile color={currentColor}>
                <p>
                  <span>Leite</span>
                  <br />
                  <span>Studio</span>
                </p>
              </Styled.TitleMobile>
              <Styled.TopBottomMainDiv>
                <Styled.TopDivMobile color={currentColor}>
                  <span>Branding</span>
                  <span>Design</span>
                </Styled.TopDivMobile>
                <Styled.BottomDivMobile color={currentColor}>
                  <span>Art Direction</span>
                  <span>Typography</span>
                </Styled.BottomDivMobile>
              </Styled.TopBottomMainDiv>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
