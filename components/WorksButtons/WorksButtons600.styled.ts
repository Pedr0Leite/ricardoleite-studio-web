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

export const workDetails600Class = styled.div`

@media only screen and (max-width: 600px) {
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
  }

  & a:last-child{
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: ${props => props.nextB && props.prevB ? justify.space : props.nextB && !props.prevB ? justify.end : !props.nextB && props.prevB ? justify.start : ""};
    height: 100%;
    width: -webkit-fill-available;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    margin-bottom: 0;
    padding-bottom: 10px;
    padding-top: 15px;
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

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: ${props => props.nextB && props.prevB ? justify.space : props.nextB && !props.prevB ? justify.end : !props.nextB && props.prevB ? justify.start : ""};
    margin: 10px 10px 15px 10px;
    padding: 0 20px;
  }
`;




// .workDetailsRightButtons-600 {
  // display: none;
  // justify-content: space-between;
  // padding-bottom: 27px;
  // height: 275px;
  // align-items: flex-end;
  // margin-bottom: -27px;
// }

// .workDetailsRightButtonsJustifyEnd {
//   justify-content: flex-end !important;
// }

// .workDetailsRightButtonsJustifyStart {
//   justify-content: flex-start !important;
// }

// .workDetailsRightButtons-600 a {
//   height: 35px;
//   width: 100px;
//   font-family: "SuisseIntl-Regular";
//   font-style: normal;
//   font-weight: 500;
//   font-size: 26px;
//   line-height: 100%;
//   color: var(--globalBlack);
//   background-color: transparent;
//   border: none;
//   text-decoration: none;
//   cursor: pointer;
// }

// .workDetailsRightButtons-600 a:last-child{
//   justify-content: flex-end;
//   display: flex;
// }


// ------------




// .workDetailsNextPrevProjectJustifyEnd{
//   justify-content: flex-end;

// }

// .workDetailsNextPrevProjectJustifyStart{
//   justify-content: flex-start;

// }


// .workDetailsNextPrevProject-600 {
  // display: none;
  // margin-top: 5px;
  // margin-right: 25px;
  // width: -webkit-fill-available;
// }

// .workDetailsNextPrevProject-600 span {
//   font-family: "SuisseIntl-Regular";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 100%;
//   text-align: right;

//   color: #000000;
// }


// 600
// .workDetailsNextPrevProject-600 {
  // display: flex;
  // justify-content: space-between;
  // margin: 10px 10px 15px 10px;
  // padding: 0 20px;
// }

// .workDetailsRightButtons-600 {
  // display: flex;
  // height: 100%;
  // width: -webkit-fill-available;
  // border-bottom: 1px solid black;
  // border-top: 1px solid black;
  // margin-bottom: 0;
  // padding-bottom: 10px;
  // padding-top: 15px;
  // width: -webkit-fill-available;

// }

// .workDetailsRightButtons-600 a{
//   /* margin: 0 10px; */
// }


