import { useEffect, useState } from "react";

type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

const FilmsList = () => {
  const [filmsList, setFilmsList] = useState<FilmType[]>([]);

  const getSWFilms = () => {
    try {
      fetch("https://swapi.dev/api/films")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else throw new Error("some error");
      })
      .then((data) => {
        console.log(data);

        setFilmsList(
          data.results.map((item:FilmType) => ({
            title: item.title,
            episode_id: item.episode_id,
          }))
        );
      });
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
    
  };

  useEffect(() => {
    getSWFilms();
  }, []);

  return (
    <div>
      {filmsList.map((item) => (
        <h4 key={item.episode_id}>{item.title}</h4>
      ))}
    </div>
  );
};

export default FilmsList;
