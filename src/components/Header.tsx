import { useState, useEffect } from "react";
import { RiLoginCircleLine as LoginIcon } from "react-icons/ri";
import Button from "./Button";
import { Link } from "react-router-dom";
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

  setTimeout(() => {
    console.log("UseEffect was called 2 seconds ago...");
  }, 2000);

  useEffect(() => {
    if (count === 2) {
      setTimeout(() => {
        console.log("UseEffect was called 2 seconds ago...");
      }, 2000);
    }
  }, [count]);

  return (
    <>
      <header className="bg-gray-200 flex justify-between items-center p-4">
        <h1>My Website</h1>
        <span className="flex items-center gap-2">
          <Link to="/register" className="hover:text-blue-400">
            Register
          </Link>
          <Link to="/login">
            <Button title="Click me" onClick={clickHandler}>
              <LoginIcon />
            </Button>
          </Link>
        </span>
      </header>
      <main className="h-16 flex justify-center items-center">
        <Button title="count" onClick={clickHandler}>
          count
        </Button>
        <h1>{count} count</h1>
      </main>
    </>
  );
}

export default Header;
