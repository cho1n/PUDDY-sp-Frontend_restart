import { useParams } from "react-router-dom";
import { TrailReviewInputType } from "../../types/trailReview";
import { Button } from "../common/Button";
import { fullStar, emptyStar } from "../../assets/trailReview";
interface TrailWriteProps {
  content: string;
  star: number;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onWriteTrail: (
    trailId: number,
    trailReviewInputType: TrailReviewInputType
  ) => void;
  setStar: (star: number) => void;
}

export const TrailWriteTemplate = (props: TrailWriteProps) => {
  const { trailId } = useParams();
  const trailIdNumber = Number(trailId);

  return (
    <div className="h-haveHeaderAndFooter px-4 w-full">
      <p className="text-start text-middleFont">별점</p>
      <div className="flex flex-row my-2 h-10">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src={i < props.star ? fullStar : emptyStar}
            alt="star"
            className="h-full"
            onClick={() => props.setStar(i + 1)}
          />
        ))}
      </div>

      <p className="mt-3 text-start text-middleFont">후기</p>
      <textarea
        className={
          "bg-bgWhite border-2 w-full h-340 overflow-auto scrollbar-hide rounded-lg p-1.5 mt-1"
        }
        placeholder={"후기를 입력하세요."}
        value={props.content}
        name={"content"}
        onChange={props.onChangeContent}
      />
      <Button
        style="mt-28 w-full bg-bgYellow"
        text="작성하기"
        onClick={() =>
          props.onWriteTrail(trailIdNumber, {
            content: props.content,
            star: props.star,
          })
        }
      />
    </div>
  );
};
