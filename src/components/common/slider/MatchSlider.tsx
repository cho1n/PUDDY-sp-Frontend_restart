import { useEffect, useState } from "react";
import { MatchType } from "../../../types/match";
import { ShowMatch } from "./ShowMatch";
import TinderCard from "react-tinder-card";
import useMatchListStore from "../../../store/useMatchListStore";

interface MatchSliderProps {
  handleMatchCancel: () => void;
  handlepostMatch: (personId: number) => void;
}

export const MatchSlider = (props: MatchSliderProps) => {
  const [visiblePets, setVisiblePets] = useState<MatchType[]>([]);
  const { matchListValue } = useMatchListStore();
  useEffect(() => {
    setVisiblePets(matchListValue.pets);
  }, [matchListValue]);
  const handleMatchCancel = (index: number) => {
    props.handleMatchCancel();
    const updatedPets = [...visiblePets];
    updatedPets.splice(index, 1);
    setVisiblePets(updatedPets);
  };
  const handlepostMatch = (index: number, id: number) => {
    props.handlepostMatch(id);
    const updatedPets = [...visiblePets];
    updatedPets.splice(index, 1);
    setVisiblePets(updatedPets);
  };
  return (
    <>
      {visiblePets.length === 0 ? (
        <div className="flex justify-center items-center w-full h-haveHeaderAndFooter text-bigTitle bg-bgYellow font-bold text-fontblack">
          내역이 없습니다.
        </div>
      ) : (
        visiblePets?.map((match, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => {
              if (direction === "right") {
                handlepostMatch(index, match.id);
              } else if (direction === "left") {
                handleMatchCancel(index);
              }
            }}
            key={index}
            className=" h-haveHeaderAndFooter w-359 absolute"
          >
            <ShowMatch
              {...match}
              index={index}
              handleMatchCancel={handleMatchCancel}
              handlepostMatch={handlepostMatch}
            />
          </TinderCard>
        ))
      )}
    </>
  );
};
