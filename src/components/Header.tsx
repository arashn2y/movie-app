import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Header() {
  // const [title, setTitle] = useState<string>("Dashboard");
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <nav className="flex flex-col justify-between items-center mt-4">
      <h1>My Website</h1>
      <Input onChange={clickHandler} />
      <Button title="Click me" onClick={clickHandler} />
      <h1>{count} count</h1>
    </nav>
  );
}

export default Header;
