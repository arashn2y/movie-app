import { useState, useEffect } from "react";
import { RiLoginCircleLine as LoginIcon } from "react-icons/ri";
import Button from "./Button";
import { Link } from "react-router-dom";
import Card from "./Card";

function Header() {
  const [count, setCount] = useState<number>(0);
  const [films, setFilms] = useState<any[]>([]);
  // const [value, setValue] = useState("");

  const clickHandler = () => {
    setCount(count + 1);
  };

  // const changeHandler = (value: string) => {
  //   setValue(value);
  // };

  useEffect(() => {
    const getFilms = async () => {
      try {
        const url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const films = await response.json();
        setFilms(
          films.map((film: any) => {
            return {
              ...film,
              id: crypto.randomUUID()
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);

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
      <main className="flex justify-center gap-5 flex-wrap items-center mt-6 px-2">
        {films.map(film => {
          return <Card key={film.id} title={film.Title} imageUrl={film.Poster} description={film.Year} />;
        })}
      </main>
    </>
  );
}

export default Header;
