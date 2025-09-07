import React from "react";

interface ButtonProps {
  text: string;
  style?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ text, style, onClick }) => {
  return (
    <button
      className={`${style} bg-[#34967C] rounded-full px-6 py-3 hover:bg-[#2a7b5c] focus:outline-none focus:ring-2 focus:ring-[#1f5a3e] transition duration-300 `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
