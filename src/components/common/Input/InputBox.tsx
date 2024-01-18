import React from "react";

interface InputProps {
  style: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputBox = (props: InputProps) => {
  const style =
    "rounded-lg pl-1.5 w-64 h-9 bg-bgGray text-default " + props.style;
  return React.createElement("input", {
    className: style,
    placeholder: props.placeholder,
    type: props.type,
    value: props.value,
    name: props.name,
    onChange: props.onChange,
  });
};
