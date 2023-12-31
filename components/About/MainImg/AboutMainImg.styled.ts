import styled from "styled-components";


interface urlInterface {
    url: string;
  }

export const mainAbstrcImg = styled.div<urlInterface>`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    aspect-ratio: 4 / 5;

    @media only screen and (max-width: 1200px) {
          height: 75vh;
          width: 62vw;
          background-size: contain;
    }

    @media only screen and (max-width: 1024px) {
        height: 75vh;
        width: 62vw;
        background-size: contain;
    }

    @media only screen and (max-width: 768px) {
        // height: 60vh;
        // width: 90vw;
        height: 57vh;
        width: 80vw;
        background-size: contain;
    }

    @media only screen and (max-width: 600px) {
        height: 58vh;
        width: 100vw;
        background-size: cover;
    }
    
    @media only screen and (max-width: 500px) {
        height: 56vh;
        width: 100vw;
    }
`;

export const mainAbstrcOverlapImg = styled.img.attrs((props) => ({
    src: props.src,
  }))`
    background-repeat: no-repeat;
    background-size: cover;
    height: 90%;
    width: 50vw;
    aspect-ratio: 4 / 5;
    position: fixed;


    @media only screen and (max-width: 1500px) {
        width: 58vw;
    };
    
    @media only screen and (max-width: 1350px) {
        width: 66vw;
    };

    @media only screen and (max-width: 1200px) {
        width: 65vw;
        height: 70%;
    };

    @media only screen and (max-width: 1024px) {
        width: 66vw;
        height: 63%;
      };

    @media (min-width: 768px) and (max-width: 850px) {
        width: 100vw;
        height: 60%;
    };

    @media only screen and (max-width: 768px) {
        width: 80vw;
        height: 60%;
    };

    @media only screen and (max-width: 600px) {
        width: 100vw;
        height: 57%;
    };

    @media only screen and (max-width: 500px) {
        width: 100vw;
        height: 45%;
    };
  `;