import React from "react";

interface SelectMonthProps {
  month: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectMonth = (props: SelectMonthProps) => {
  const monthList = [];
  for (let i = 1; i <= 12; i++) {
    monthList.push(i);
  }
  return React.createElement(
    "select",
    {
      className: "rounded-lg pl-1 h-9 basis-1/4 mr-2.5 bg-bgGray",
      name: "month",
      value: props.month,
      onChange: props.onChange,
    },
    monthList.map((month) =>
      React.createElement("option", { key: month, value: month }, month)
    )
  );
};
