import React from "react";

interface SelectCommentProps {
  comment: string;
}
export const SelectComment = (props: SelectCommentProps) => {
  const commentList = ["", "댓글 수정", "댓글 삭제"];
  return React.createElement(
    "select",
    {
      className: "ml-48 w-5 h-5 basis-1/4",
      name: "comment",
      value: props.comment,
    },
    commentList.map((comment) =>
      React.createElement("option", { key: comment, value: comment }, comment)
    )
  );
};
