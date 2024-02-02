import { PostDetailType, PostInputType } from "../../types/community";
import { Button } from "../common/Button";
import { InputBox } from "../common/Input";

interface PostFixProps {
  post: PostDetailType;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPatchPost: (postId: number, postInputType: PostInputType) => void;
}

export const PostFixTemplate = (props: PostFixProps) => {
  return (
    <div className="h-haveHeaderAndFooter px-4 w-full">
      <p className="text-start text-middleFont">제목</p>
      <InputBox
        style={"bg-bgWhite border-2 w-full "}
        placeholder={""}
        type={"title"}
        value={props.post.title}
        name={"title"}
        onChange={props.onChangeTitle}
      />
      <p className="mt-3 text-start text-middleFont">내용</p>
      <textarea
        className={
          "bg-bgWhite border-2 w-full h-340 overflow-auto scrollbar-hide rounded-lg p-1.5 mt-1"
        }
        placeholder={""}
        value={props.post.content}
        name={"content"}
        onChange={props.onChangeContent}
      />
      <Button
        style="mt-36 w-full bg-bgYellow"
        text="작성하기"
        onClick={() =>
          props.onPatchPost(props.post.id, {
            title: props.post.title,
            content: props.post.content,
          })
        }
      />
    </div>
  );
};
