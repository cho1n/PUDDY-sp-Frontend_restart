import { PostDetailType } from "../../types/community";
import { CommentList } from "../common/list/comment/CommentList";

interface CommunityProps {
  PostDetailValue: PostDetailType;
  changeComment: string;
  onChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPatchComment: (commentId: number, content: string) => void;
  onDeleteComment: (commentId: number) => void;
}

export const CommentTemplate = (props: CommunityProps) => {
  return (
    <div className="flex w-full">
      <CommentList
        changeComment={props.changeComment}
        onChangeComment={props.onChangeComment}
        onPatchComment={props.onPatchComment}
        onDeleteComment={props.onDeleteComment}
        {...props.PostDetailValue}
      />
    </div>
  );
};
