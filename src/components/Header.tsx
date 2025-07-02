import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Header() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const clickHandler = () => {
    setCount(count + 1);
  };

  const changeHandler = (value: string) => {
    setValue(value);
  };

  return (
    <nav className="flex flex-col justify-between items-center mt-4">
      <h1>My Website</h1>
      <Input
        value={value}
        onChange={(inputValue: string) => {
          changeHandler(inputValue);
        }}
      />
      <Button title="Click me" onClick={clickHandler} children="pippo" />
      {/* <Button title="Click me" onClick={clickHandler}>
        pippo
      </Button> */}
      <h1 className="">{count} count</h1>
    </nav>
  );
}

export default Header;
