import { theme } from "../../styles/Theme.style";
import Heading from "../Heading";
import { TimerCardWrapper } from "./TimerCard.style";
import { useContext } from "react";
import AppContext from "../../AppContext";

const TimerCard = () => {
  const { minutes, seconds } = useContext(AppContext);

  return (
    <>
      <TimerCardWrapper>
        <Heading
          size={"M"}
          color={theme.colors.charcoal}
          className="label"
          children="Time"
        />
        <Heading size={"M"} color={theme.colors.charcoal} className="value">
          {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </Heading>
      </TimerCardWrapper>
    </>
  );
};

export default TimerCard;
