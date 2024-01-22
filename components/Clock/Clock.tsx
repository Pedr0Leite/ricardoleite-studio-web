import React, { useEffect, useState } from "react";
import * as Styled from "./Clock.styled";
import useWindowSize from "@/hooks/useWindowSize";
import styled from "styled-components";

export default function Clock() {
  const [dateTime, setDateTime] = useState(
    new Date()
      .toLocaleString("en-US", { timeZone: "Europe/Amsterdam", hour12: false })
      .split(",")[1]
  );
  const [openForProjects, setOpenForProjects] =
    useState<string>("Open for projects!");

  const size = useWindowSize();

  const refreshClock = () => {
    setDateTime(
      new Date()
        .toLocaleString("en-US", {
          timeZone: "Europe/Amsterdam",
          hour12: false,
        })
        .split(",")[1]
    );
  };

  useEffect(() => {
    const now = new Date().getHours();
    const dayOfWeek = new Date().getDay();

    if (now >= 9 && now <= 18 && dayOfWeek != 0 && dayOfWeek != 6) {
      setOpenForProjects("Open for projects!");
    } else {
      setOpenForProjects("Closed! See you tomorrow!");
    }

    const timerId = setInterval(refreshClock, 999);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dateTime]);

  return (
    <>
    <Styled.ClockMainDiv>
        <span>Amsterdam, {dateTime}</span>
        <span>{openForProjects}</span>
      </Styled.ClockMainDiv>
      {/* {size != undefined && size.width != undefined && size.width >= 600 ? 
      <Styled.ClockMainDiv>
        <span>Amsterdam, {dateTime}</span>
        <span>{openForProjects}</span>
      </Styled.ClockMainDiv>
      :
      <Styled.ClockMainDivMobile>
        <span>Amsterdam, {dateTime}</span>
        <span>{openForProjects}</span>
      </Styled.ClockMainDivMobile>
      } */}
    </>
  );
}
