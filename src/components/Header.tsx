import { useState } from "react";
import { RiLoginCircleLine as LoginIcon } from "react-icons/ri";
import Button from "./Button";
// import Input from "./Input";

function Header() {
  const [count, setCount] = useState<number>(0);
  // const [value, setValue] = useState("");

  const clickHandler = () => {
    setCount(count + 1);
  };

  // const changeHandler = (value: string) => {
  //   setValue(value);
  // };

  return (
    <header className="bg-gray-200 flex justify-between items-center p-4">
      <h1>My Website</h1>
      {/* <Input
        value={value}
        onChange={(inputValue: string) => {
          changeHandler(inputValue);
        }}
      /> */}
      {/* <Button title="Click me" onClick={clickHandler} children="Login" /> */}
      <Button title="Click me" onClick={clickHandler}>
        <LoginIcon />
        {/* Login */}
      </Button>
      {/* <h1 className="">{count} count</h1> */}
    </header>
  );
}

export default Header;
