import { PostDetailType } from "../../types/community";
import { CommentList } from "../common/list/comment/commentlist";

interface CommunityProps {
  PostDetailValue: PostDetailType;
}

export const CommentTemplate = (props: CommunityProps) => {
  return (
    <div className="flex w-full">
      <CommentList {...props.PostDetailValue} />
    </div>
  );
};
