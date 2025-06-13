import { useState } from "react";

function Header() {
  // const [title, setTitle] = useState<string>("Dashboard");
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <nav className="flex flex-col justify-between items-center mt-4">
      <h1>My Website</h1>
      <button
        className="w-24 h-10 rounded-lg bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
        onMouseEnter={clickHandler}
        onMouseLeave={clickHandler}>
        Click Me
      </button>
      <h1>{count} count</h1>
    </nav>
  );
}

export default Header;
