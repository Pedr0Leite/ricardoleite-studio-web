import styled from "styled-components";


interface urlInterface {
    url: string;
  }

export const mainAbstrcImgMobile = styled.div<urlInterface>`
    display: none !important;
    background-image: url("../public/About/main2.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    aspect-ratio: 4 / 5;
`;