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
`;

export const ProjectIndexBlockOneDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & div:first-child {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 100%;
    color: #000000;
  }

  & div:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: right;

    color: #000000;
  }
`;

export const ProjectIndexBlockTwoDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & div:first-child {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    color: #000000;
  }

  & div:nth-child(2) {
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    text-align: right;
    color: #000000;
  }
`;

export const CardImgDiv = styled.div<imgInterface>`
  height: 517px;
  width: 453px;
  background-image: url("${props => props.url}");
  background-size: contain;
  background-repeat: no-repeat;
`;