import styled from "styled-components";
import { colors } from "./../../styles/Colors";

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

export const workDetailsRightButtonsClass = styled.div<workDetailsRightButtonsInterface>`
  display: flex;
  justify-content: ${props => props.nextB && props.prevB ? justify.space : props.nextB && !props.prevB ? justify.end : !props.nextB && props.prevB ? justify.start : ""};
  padding-bottom: 20px;
  align-items: flex-end;
  margin-bottom: -30px;
  border-top: 1px solid black;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 250px;

  & a {
      height: 35px;
      margin-bottom: 10px;
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

    @media only screen and (max-width: 600px) {
      display: none;
    }


`;

export const workDetailsNextPrevProjectClass = styled.div<workDetailsRightButtonsInterface>`
display: flex;
justify-content: ${props => props.nextB && props.prevB ? justify.space : props.nextB && !props.prevB ? justify.end : !props.nextB && props.prevB ? justify.start : ""};
position: absolute;
margin-top: 4px;
margin-right: 25px;
padding-right: 10px;
padding-left: 10px;
width: -webkit-fill-available;
width: -moz-available;
border-bottom: 1px solid black;

& span {
  font-family: "SuisseIntl-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: calc(5px + 0.8vw);
  line-height: 100%;
  text-align: right;

  color: #000000;
}

@media only screen and (max-width: 600px) {
  display: none;
}
`;