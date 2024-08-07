import React from "react";

interface CustomButtomProps {
  text: string;
}

const CustomButtom = ({ text }: CustomButtomProps) => {
  return (
    <button
      className="bg-button-primary w-full max-w-[340px] h-[40px] grid place-items-center mx-auto cursor-pointer active:bg-button-secondary text-primary my-2"
      style={{
        borderRadius: "4px",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButtom;
