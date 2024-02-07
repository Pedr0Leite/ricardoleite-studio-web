import styled from "styled-components";
import { colors } from "./../../styles/Colors";
import next from "next";

interface imgInterface {
  url: string;
}

interface workDetailsRightButtonsInterface {
  width?: number,
  nextB?: Boolean,
  prevB?: Boolean  
}

const justify = {
  start: "flex-start",
  end: "flex-end",
  space: "space-between"
};

const justifyContentValue = (nextB: Boolean | undefined, prevB: Boolean | undefined) => {
  if (nextB && prevB) {
    return 'space-between';
  } else if (!nextB && prevB) {
    return 'flex-start';
  } else if (nextB && !prevB) {
    return 'flex-end';
  } else {
    return ''; // Default value or empty string
  }
};

export const workDetails600Class = styled.div`

@media only screen and (max-width: 700px) {
  position: absolute;
  width: -webkit-fill-available;
}
`;

export const workDetailsRightButtons600Class = styled.div<workDetailsRightButtonsInterface>`
  display: none;
  justify-content: space-between;
  padding-bottom: 27px;
  height: 275px;
  align-items: flex-end;
  margin-bottom: -27px;

  & a {
    height: 35px;
    width: 100px;
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    color: var(--globalBlack);
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  & a:last-child{
    display: flex;
    justify-content:  ${props => !props.nextB && props.prevB ? "flex-start" : "flex-end"};
    // justify-content: flex-end;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: ${props => justifyContentValue(props.nextB, props.prevB)};
    height: 100%;
    width: -webkit-fill-available;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin-bottom: 0;
    //padding: ${props => props.nextB && props.prevB ? "15px 10px 0 10px" : props.nextB && !props.prevB ? "15px 10px 0 10px" : !props.nextB && props.prevB ? "15px 0 10px" : "15px 10px 0 10px"};
    padding: 15px 10px 0 10px;
    width: -webkit-fill-available;
  }

`;

export const workDetailsNextPrevProject600Class = styled.div<workDetailsRightButtonsInterface>`
  display: none;
  margin-top: 5px;
  margin-right: 25px;
  width: -webkit-fill-available;

  & span {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: right;
    color: #000000;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: ${props => props.nextB && props.prevB ? justify.space : props.nextB && !props.prevB ? justify.end : !props.nextB && props.prevB ? justify.start : ""};
    margin: 10px 10px 15px 10px;
    padding: 0 20px;
  }
`;