import { PostDetailType } from "../../../../types/community";
import { Comment } from "./Comment";

interface PostListProps extends PostDetailType {
  changeComment: string;
  onChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPatchComment: (commentId: number, content: string) => void;
  onDeleteComment: (commentId: number) => void;
}

export const CommentList = (props: PostListProps) => {
  return (
    <div className="grid grid-cols-1 w-full">
      {props.comments.map((comment, index) => (
        <Comment
          changeComment={props.changeComment}
          onChangeComment={props.onChangeComment}
          onPatchComment={props.onPatchComment}
          onDeleteComment={props.onDeleteComment}
          key={index}
          {...comment}
        />
      ))}
    </div>
  );
};
