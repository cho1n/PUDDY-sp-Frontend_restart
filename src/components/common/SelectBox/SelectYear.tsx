import React from "react";
interface SelectYearProps {
  year: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const SelectYear = (props: SelectYearProps) => {
  const yearList = [];
  for (let i = 2024; i >= 1900; i--) {
    yearList.push(i);
  }
  return React.createElement(
    "select",
    {
      className: "rounded-lg pl-1 h-9 basis-1/2 mr-2.5",
      name: "year",
      value: props.year,
      onChange: props.onChange,
    },
    yearList.map((year) =>
      React.createElement("option", { key: year, value: year }, year)
    )
  );
};
