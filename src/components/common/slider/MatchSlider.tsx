import { useEffect, useState } from "react";
import { MatchListType } from "../../../types/match";
import { ShowMatch } from "./ShowMatch";
import TinderCard from "react-tinder-card";

interface MatchSliderProps extends MatchListType {
  handleMatchCancle: () => void;
  handlepostMatch: (personId: number) => void;
}

export const MatchSlider = (props: MatchSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    console.log(currentIndex, props.pets.length);
    if (currentIndex !== 0 && currentIndex === props.pets.length) {
      setTimeout(() => window.location.reload(), 1000);
    }
  }, [currentIndex]);

  return (
    <>
      {props.pets.length === 0 ? (
        <div className="flex justify-center items-center w-full h-haveHeaderAndFooter text-bigTitle bg-bgYellow font-bold text-fontblack">
          내역이 없습니다.
        </div>
      ) : (
        props.pets?.map((match, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => {
              if (direction === "right") {
                props.handlepostMatch(props.pets[index].id);
                setCurrentIndex(currentIndex + 1);
              } else if (direction === "left") {
                props.handleMatchCancle();
                setCurrentIndex(currentIndex + 1);
              }
            }}
            key={index}
            className=" h-haveHeaderAndFooter w-359 absolute"
          >
            <ShowMatch
              {...match}
              handleMatchCancle={props.handleMatchCancle}
              handlepostMatch={props.handlepostMatch}
            />
          </TinderCard>
        ))
      )}
    </>
  );
};
