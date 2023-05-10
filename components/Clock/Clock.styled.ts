import styled from "styled-components";

export const ClockMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: bolder;
    font-size: 14px;
    line-height: 100%;
    color: #000000;
    position: relative;
    left: 5vw;
    color: black !important;
    padding-top: 2px;
  }

  & span:first-child {
    text-decoration-line: underline;
  }
`;
