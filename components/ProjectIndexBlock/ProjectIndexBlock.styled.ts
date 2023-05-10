import styled from "styled-components";
import { colors } from "./../../styles/Colors";

interface imgInterface {
  url: string;
}

export const ProjectIndexBlockDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 79px;
  margin: 0 15px 0 15px;
  border-top: 1px solid black;
  padding: 10px;
  cursor: pointer;

  &:hover{
    background-color: ${colors.globalRed};
  }

  @media only screen and (max-width: 800px) {
    column-gap: 25px;

    &:hover{
      background-color: none;
    }
  }
`;

export const ProjectIndexBlockOneDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & div:first-child {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    color: #000000;
  }

  & div:nth-child(2) {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: right;
    color: #000000;
  }

  @media only screen and (max-width: 850px) {
    & div:first-child {
      font-size: calc(11px + 1vw);
    }
    
    & div:nth-child(2) {
      font-size: calc(8px + 1vw);
    }
  }
`;

export const ProjectIndexBlockTwoDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & div:first-child {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #000000;
  }

  & div:nth-child(2) {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: right;
    color: #000000;
  }

  @media only screen and (max-width: 850px) {
    & div:first-child,
    & div:nth-child(2) {
      font-size: calc(9px + 1vw);
    }
  }
`;

export const CardImgDiv = styled.div<imgInterface>`
  height: 517px;
  width: 453px;
  background-image: url("${props => props.url}");
  background-size: contain;
  background-repeat: no-repeat;
`;