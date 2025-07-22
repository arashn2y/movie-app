import { type FC, type HTMLInputTypeAttribute } from "react";

type InputProps = {
  value: string;
  onChange: (inputValue: string) => void;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

const Input: FC<InputProps> = (
  // { type = "text", onChange }
  props
) => {
  return (
    <input
      type={props.type ?? "text"}
      value={props.value}
      placeholder={props.placeholder ?? "Enter text"}
      onChange={event => {
        props.onChange(event.target.value);
      }}
      className={`h-10 px-4 my-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
        props.className ?? ""
      }`}
    />
  );
};

export default Input;
