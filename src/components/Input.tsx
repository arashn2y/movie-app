import type { FC } from "react";

type InputProps = {
  type?: string;
  onChange: () => void;
};

const Input: FC<InputProps> = ({ type = "text", onChange }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className="w-1/2 h-10 px-4 my-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};

export default Input;
