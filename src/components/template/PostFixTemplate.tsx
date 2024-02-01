import { PostDetailType, PostInputType } from "../../types/community";
import { Button } from "../common/Button";
import { InputBox } from "../common/Input";

interface PostFixProps {
  post: PostDetailType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
        onChange={props.onChange}
      />
      <p className="mt-3 text-start text-middleFont">내용</p>
      <InputBox
        style={"bg-bgWhite border-2 w-full h-340"}
        placeholder={""}
        type={"content"}
        value={props.post.content}
        name={"content"}
        onChange={props.onChange}
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
