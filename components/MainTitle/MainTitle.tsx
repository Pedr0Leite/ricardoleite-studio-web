import React, { useState } from 'react';
import * as Styled from "./MainTitle.styled";
import { useRouter } from 'next/router';

export default function MainTitle() {
  const router = useRouter();
  const route = router.route;

  // const [currentColor, setCurrentColor] = useState<string>("");

  const currentColor:string = route == '/studio' ? 'white' : '#1a1a1a';

  return (
    <Styled.MainDiv>
    <Styled.Title color={currentColor}>
      <p>
        <span>Ricardo Leite</span>
      </p>
    </Styled.Title>
    <Styled.TopDiv color={currentColor}>
      <span>Branding</span>
      <span>Design</span>
      <span>Art Direction</span>
      <span>Typography</span>
    </Styled.TopDiv>
  </Styled.MainDiv>
  )
}
