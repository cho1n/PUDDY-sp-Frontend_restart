import { TrailReviewListType } from "../../../../types/trailReview";
import { Trail } from "./Trail";

interface TrailListProps extends TrailReviewListType {}

export const TrailList = (props: TrailListProps) => {
  return (
    <div className="w-full grid grid-cols-1">
      {props.trailReviews.map((trail, index) => (
        <Trail key={index} {...trail} />
      ))}
    </div>
  );
};
