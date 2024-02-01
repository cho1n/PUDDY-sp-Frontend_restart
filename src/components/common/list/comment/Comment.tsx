import { CommentType } from "../../../../types/comment";
import { useState } from "react";
import { Button } from "../../Button";
import menuVertical from "../../../../assets/Community/MenuVertical.svg";
import { InputBox } from "../../Input";

interface CommentProps extends CommentType {
  changeComment: string;
  onChangeComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPatchComment: (commentId: number, content: string) => void;
  onDeleteComment: (commentId: number) => void;
}

export const Comment = (props: CommentProps) => {
  const gender = props.person.gender ? "아빠" : "엄마";
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex-col w-full border-t">
      <div className="px-1 w-full overflow-auto scrollbar-hide">
        <div className="flex w-full flex-row mt-1">
          <img
            src={props.person.dog.image}
            className="w-9 h-9 mr-1 mt-1 rounded-full"
            alt="dog"
          />
          <div className="flex w-full flex-col justify-start items-start">
            <p className="text-default">
              {props.person.dog.name} {gender}
              <button onClick={toggleMenu} className="ml-48 px-0.5 py-0.5">
                <img
                  src={menuVertical}
                  className="w-5 h-5 bg-bgWhite"
                  alt="menu"
                />
              </button>
            </p>
            <p className="flex text-smallFont text-fontGray h-4">
              {props.createdAt}
              {isMenuOpen && (
                <div className="flex">
                  <Button
                    text="댓글수정"
                    style="ml-36 px-0 py-0 text-fontBlack "
                    onClick={openModal}
                  />
                  <Button
                    text="댓글삭제"
                    style="px-0 py-0 text-fontBlack "
                    onClick={() => props.onDeleteComment(props.id)}
                  />
                </div>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-3 mb-1 w-full">
        <p className="text-smallFont text-start">{props.content}</p>
      </div>
      {isOpen && (
        <div className="flex z-50 items-center justify-center w-full border">
          <div className="flex w-359 bg-white p-1 rounded">
            <InputBox
              style="flex bg-white"
              placeholder={props.content}
              type="comment"
              value={props.changeComment}
              name="comment"
              onChange={props.onChangeComment}
            />
            <Button
              text="작성"
              style="flex flex-row px-0 py-0 ml-5 text-smallFont mt-5"
              onClick={() =>
                props.onPatchComment(props.id, props.changeComment)
              }
            />
            <Button
              text="x"
              style="flex flex-row px-0 py-0 ml-3 text-smallFont mt-5"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};
