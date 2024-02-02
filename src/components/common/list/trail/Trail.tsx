import { TrailReviewType } from "../../../../types/trailReview";

interface TrailProps extends TrailReviewType {}

export const Trail = (props: TrailProps) => {
  const gender = props.reviewer.gender ? "아빠" : "엄마";
  return (
    <div className="border-t-2">
      <div className="flex flex-row items-center h-24">
        <img
          src={props.reviewer.dog.image}
          className="w-16 h-16 ml-2 mr-2 rounded-full "
          alt="dog"
        />
        <div className="w-64 ml-1 flex flex-col justify-start items-start">
          <div className="h-10 text-ellipsis overflow-hidden">
            <p className="text-smallFont text-start mt-1">{props.content}</p>
          </div>

          <div className="flex mt-1">
            <p className="text-smallFont text-fontGray w-40 text-start">
              {props.createdAt} {" | "} {props.reviewer.dog.name} {gender}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
