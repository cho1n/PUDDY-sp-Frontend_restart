import { TrailReviewType } from "../../../../types/trailReview";
import { useState } from "react";
import menuVertical from "../../../../assets/Community/MenuVertical.svg";
import { Button } from "../../Button";
import { emptyStar, fullStar } from "../../../../assets/trailReview";

interface TrailProps extends TrailReviewType {
  onDeleteReview: (reviewId: number) => void;
}

export const Trail = (props: TrailProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const gender = props.reviewer.gender ? "아빠" : "엄마";
  return (
    <div className="border-b-2">
      <div className="flex flex-row py-4 min-h-24">
        <img
          src={props.reviewer.dog.image}
          className="w-16 h-16 ml-2 mr-2 rounded-full "
          alt="dog"
        />
        <div className="flex flex-col flex-1 ml-1 justify-start items-start">
          <div className="flex flex-row w-full">
            <div className="flex w-full min-h-10 text-ellipsis overflow-hidden">
              <p className="text-smallFont text-start mt-1 w-full break-all">
                {props.content}
              </p>
            </div>

            <div className="flex flex-col">
              {props.isMine && (
                <button
                  onClick={toggleMenu}
                  className="flex flex-col w-5 h-5 ml-1 px-0 py-0 bg-bgWhite"
                >
                  <img src={menuVertical} alt="menu" />
                </button>
              )}
              {isMenuOpen && (
                <div className="flex">
                  <Button
                    text="삭제"
                    style="px-0 py-0 text-fontGray text-smallFont bg-bgWhite underline"
                    onClick={() => props.onDeleteReview(props.id)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row mt-1 w-full">
            <p className="text-smallFont flex-1 text-fontGray w-40 text-start">
              {props.createdAt} {" | "} {props.reviewer.dog.name} {gender}
            </p>
            <div className="flex flex-row">
              {Array.from({ length: 5 }, (_, i) => (
                <img
                  key={i}
                  src={i < props.star ? fullStar : emptyStar}
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
