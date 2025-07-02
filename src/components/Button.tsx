interface ButtonProps {
  title: string;
  onClick: () => void;
  children: string;
}

function Button(props: ButtonProps) {
  // const { title, onClick } = props;
  return (
    <button className="w-24 h-10 rounded-lg bg-black hover:bg-black-700 text-white cursor-pointer" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
