import { type FC, type HTMLInputTypeAttribute } from "react";

type InputProps = {
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (inputValue: string) => void;
};

const Input: FC<InputProps> = (
  // { type = "text", onChange }
  props
) => {
  return (
    <input
      type={props.type ?? "text"}
      value={props.value}
      onChange={event => {
        props.onChange(event.target.value);
      }}
      className="w-1/2 h-10 px-4 my-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
};

export default Input;
