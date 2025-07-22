import { useState, useEffect } from "react";
import { RiLoginCircleLine as LoginIcon } from "react-icons/ri";
import { Link } from "react-router-dom";
import Card from "./Card";
import Input from "./Input";

interface Icon {
  id: string;
  key: string;
}
interface Film {
  id: string;
  Title: string;
  Runtime: string;
  Year: string;
  Poster?: string;
  icon: Icon;
}

function Header() {
  const [films, setFilms] = useState<Film[]>([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const getFilms = async () => {
      try {
        const url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const serverFilms: Film[] = await response.json();
        const filteredFilms = serverFilms.filter(film => {
          return film.Title.includes(filterValue);
        });
        setFilms(
          filteredFilms.map(film => {
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
  }, [filterValue]);

  return (
    <>
      <header className="bg-gray-200 flex justify-between items-center p-4">
        <h1>My Website</h1>
        <Input
          value={filterValue}
          onChange={inputValue => {
            setFilterValue(inputValue);
          }}
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
      <main className="flex justify-center gap-5 flex-wrap items-center mt-6 px-2">
        {films.map(film => {
          return <Card key={film.id} title={film.Title} imageUrl={film.Poster} description={film.Year} />;
        })}
      </main>
    </>
  );
}

export default Header;
