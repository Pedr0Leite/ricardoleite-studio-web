import styled from "styled-components";


interface colorInterface {
    color: string;
  }

export const MainDiv = styled.div`
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export const Title = styled.div<colorInterface>`
    font-family: "SuisseIntl-Regular";
    color:  ${props => props.color};
    letter-spacing: 0.01em;
    line-height: 1.3;
    font-weight: 100%;
    font-style: normal;
    font-size: 230px;
    text-decoration: none;
    padding: 0;
    text-indent: 0em;
    border-bottom: none;
    margin-bottom: 50px;

    & p {
        line-height: 0.8;
        text-align: center;
        margin: 0;
        color: black;
    }

    @media only screen and (max-width: 850px) {
        font-size: 160px;
      }
`;

export const TopDiv = styled.div<colorInterface>`
    // border-top: 1px solid ${props => props.color};
    border-top: 1px solid black;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
    padding-top: 10px;

    & span {
        // color:  ${props => props.color};
        font-family: "SuisseIntl-Regular";
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 36px;
        letter-spacing: 0.18px;
        color: black;
    }
`;