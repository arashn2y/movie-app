import type { ReactNode } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  children: ReactNode;
}

function Button(props: ButtonProps) {
  // const { title, onClick } = props;
  return (
    <button
      className="flex items-center gap-1 px-2 h-10 rounded-lg hover:bg-black hover:text-white text-black cursor-pointer"
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
