import { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

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

function Dashboard() {
  const [films, setFilms] = useState<Film[]>([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const getFilms = async () => {
        try {
          const url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const serverFilms: Film[] = await response.json();
          const filteredFilms = serverFilms.filter(film => {
            return film.Title.toLowerCase().includes(filterValue);
          });
          setFilms(
            filteredFilms.map(film => ({
              ...film,
              id: crypto.randomUUID()
            }))
          );
        } catch (error) {
          console.log(error);
        }
      };

      getFilms();
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [filterValue]);

  const filterValueHandler = (value: string) => {
    setFilterValue(value);
  };

  return (
    <>
      <Header filterValue={filterValue} filterValueHandler={filterValueHandler} />
      <main className="flex justify-center gap-5 flex-wrap items-center mt-6 px-2">
        {films.map(film => {
          return <Card key={film.id} title={film.Title} imageUrl={film.Poster} description={film.Year} />;
        })}
      </main>
    </>
  );
}

export default Dashboard;
