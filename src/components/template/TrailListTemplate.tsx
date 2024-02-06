import { TrailReviewListType } from "../../types/trailReview";
import { Button } from "../common/Button";
import { TrailList } from "../common/list/trail/TrailList";

interface TrailListProps {
  trailValue: TrailReviewListType;
  pageNum: number;
  onChangePage: (direction: "prev" | "next") => void;
  onDeleteReview: (reviewId: number) => void;
}

export const TrailListTemplate = (props: TrailListProps) => {
  return (
    <div className="flex flex-col w-full h-haveHeaderAndFooter px-4">
      <div className="flex-col px-2 w-full h-600">
        <TrailList
          onDeleteReview={props.onDeleteReview}
          {...props.trailValue}
        />
      </div>
      <div className="flex flex-row px-4 justify-center">
        <Button
          style="mr-3 px-1"
          text="이전"
          onClick={() => props.onChangePage("prev")}
        />
        <p className="pt-2.5 mx-20">{props.pageNum}</p>
        <Button
          style="ml-3 px-1"
          text="다음"
          onClick={() => props.onChangePage("next")}
        />
      </div>
    </div>
  );
};
