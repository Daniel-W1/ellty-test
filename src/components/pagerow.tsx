import React, { useState } from "react";
import { CheckboxWithSVG } from "./checkbox";

interface PageRowProps {
    text: string,
}

const PageRow = (
    { text }: PageRowProps
) => {
  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-[370px] h-[42px] flex justify-between cursor-pointer"
      style={{
        padding: "8px 15px 8px 22px",
      }}
      onClick={() => setChecked(!checked)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <span className="text-primary">{text}</span>
        <CheckboxWithSVG checked={checked} hovered={hovered} />
    </div>
  );
};

export default PageRow;
