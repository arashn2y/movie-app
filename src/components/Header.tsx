import { RiLoginCircleLine as LoginIcon } from "react-icons/ri";
import { Link } from "react-router-dom";
import Input from "./Input";

interface HeaderProps {
  filterValue: string;
  filterValueHandler: (value: string) => void;
}

function Header({ filterValue, filterValueHandler }: HeaderProps) {
  return (
    <>
      <header className="bg-gray-200 flex justify-between items-center p-4">
        <h1>My Website</h1>
        <Input
          value={filterValue}
          onChange={inputValue => {
            filterValueHandler(inputValue);
          }}
          className="w-1/2"
          placeholder="Search films..."
        />
        <span className="flex items-center gap-2">
          <Link to="/register" className="hover:text-blue-400">
            Register
          </Link>
          <Link to="/login">
            <LoginIcon />
          </Link>
        </span>
      </header>
    </>
  );
}

export default Header;
