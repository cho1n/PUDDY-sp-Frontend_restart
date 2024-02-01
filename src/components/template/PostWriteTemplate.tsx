import { PostInputType } from "../../types/community";
import { Button } from "../common/Button";
import { InputBox } from "../common/Input";

interface PostWriteProps {
  title: string;
  content: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWritePost: (postInputType: PostInputType) => void;
}

export const PostWriteTemplate = (props: PostWriteProps) => {
  return (
    <div className="h-haveHeaderAndFooter px-4 w-full">
      <p className="text-start text-middleFont">제목</p>
      <InputBox
        style={"bg-bgWhite border-2 w-full "}
        placeholder={""}
        type={"title"}
        value={props.title}
        name={"title"}
        onChange={props.onChangeTitle}
      />
      <p className="mt-3 text-start text-middleFont">내용</p>
      <InputBox
        style={"bg-bgWhite border-2 w-full h-340"}
        placeholder={""}
        type={"content"}
        value={props.content}
        name={"content"}
        onChange={props.onChangeContent}
      />
      <Button
        style="mt-36 w-full bg-bgYellow"
        text="작성하기"
        onClick={() =>
          props.onWritePost({ title: props.title, content: props.content })
        }
      />
    </div>
  );
};
