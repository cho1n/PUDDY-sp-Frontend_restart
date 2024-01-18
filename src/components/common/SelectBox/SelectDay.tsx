import React from "react";

interface SelectDayProps {
  day: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectDay = (props: SelectDayProps) => {
  const dayList = [];
  for (let i = 1; i <= 31; i++) {
    dayList.push(i);
  }
  return React.createElement(
    "select",
    {
      className: "rounded-lg pl-1 h-9 basis-1/4",
      name: "day",
      value: props.day,
      onChange: props.onChange,
    },
    dayList.map((day) =>
      React.createElement("option", { key: day, value: day }, day)
    )
  );
};
