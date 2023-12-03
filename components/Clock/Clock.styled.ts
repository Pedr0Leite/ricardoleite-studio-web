import styled from "styled-components";

export const ClockMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: wait;

  & span {
    font-family: "SuisseIntl-Regular";
    font-style: normal;
    font-weight: bolder;
    font-size: 12px;
    line-height: 100%;
    color: #000000;
    position: relative;
    left: 5vw;
    color: black !important;
    padding-top: 2px;
    cursor: wait;
  }

  & span:first-child {
    // text-decoration-line: underline;
  }

  @media only screen and (max-width: 600px) {
    & {
      padding-bottom: 15px;
    }
  }

  @media only screen and (max-width: 800px) {
    & span {
      font-size: 12px
    }
  }

  @media only screen and (max-width: 900px) {
    & span {
      left: 0;
    }
  }
`;

export const ClockMainDivMobile = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: inherit;
    cursor: wait;

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
  }
`