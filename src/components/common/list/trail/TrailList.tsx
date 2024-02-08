import { TrailReviewListType } from "../../../../types/trailReview";
import { Trail } from "./Trail";

interface TrailListProps extends TrailReviewListType {
  onDeleteReview: (reviewId: number) => void;
}

export const TrailList = (props: TrailListProps) => {
  return (
    <div className="w-full grid grid-cols-1 border-t-2">
      {props.trailReviews.map((trail, index) => (
        <Trail key={index} onDeleteReview={props.onDeleteReview} {...trail} />
      ))}
    </div>
  );
};
