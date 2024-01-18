import { useState } from "react";

export interface TagButtonProps {
  content: string;
  onChange: (content: string) => void;
}

export const TagButton = (props: TagButtonProps) => {
  const [clicked, setClicked] = useState(false);
  const style =
    "rounded-2xl h-6 text-smallFont " + (clicked ? "bg-bgYellow" : "bg-bgGray");
  return (
    <input
      className={style}
      type="button"
      onClick={() => {
        setClicked(!clicked);
        props.onChange(props.content);
      }}
      name="tag"
      value={props.content}
    />
  );
};
