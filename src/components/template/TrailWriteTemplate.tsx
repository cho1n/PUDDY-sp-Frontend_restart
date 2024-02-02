import { useParams } from "react-router-dom";
import { TrailReviewInputType } from "../../types/trailReview";
import { Button } from "../common/Button";

interface TrailWriteProps {
  content: string;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onWriteTrail: (
    trailId: number,
    trailReviewInputType: TrailReviewInputType
  ) => void;
}

export const TrailWriteTemplate = (props: TrailWriteProps) => {
  const { trailId } = useParams();
  const trailIdNumber = Number(trailId);

  return (
    <div className="h-haveHeaderAndFooter px-4 w-full">
      <p className="text-start text-middleFont">별점</p>

      <div className="my-2 h-10 border-2">
        <p className="mt-1">별점 넣으셈</p>
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
          props.onWriteTrail(trailIdNumber, { content: props.content, star: 3 })
        }
      />
    </div>
  );
};
