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
    useState<string>("Open for business!");

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
      setOpenForProjects("Open for business!");
    } else if(dayOfWeek == 0 || dayOfWeek == 6) {
      setOpenForProjects("Enjoying the sun in Amsterdam!");
    } else {
      setOpenForProjects("Closed! Talk tomorrow.");
    }

    const timerId = setInterval(refreshClock, 999);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dateTime]);

  return (
    <>
    <Styled.ClockMainDiv>
        <span><i>Amsterdam</i>, {dateTime}</span>
        <span>{openForProjects}</span>
      </Styled.ClockMainDiv>
    </>
  );
}
