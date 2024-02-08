import { useEffect, useState } from "react";
import { FilmType, getSWFilms } from "../../api/SWAPI";
import FilmCard from "./FilmCard";

const FilmsPage = () => {
  const [filmsList, setFilmsList] = useState<FilmType[]>([])

  const getFilmsList = async () => {
    const data = await getSWFilms()
    setFilmsList(data)
  }

  useEffect(() => {
    getFilmsList()
  }, [])

  // const obj =  {
  //     "key": "film.episode_id",
  //     "title": "film.title",
  //     "director": "film.director",
  //     "filmsList": filmsList,
  //     filmsList
  //   }
  return (
    <div>
      <h1>FILMS PAGE</h1>
      {
        filmsList.map(film => (
          <FilmCard
            key={film.episode_id}
            title={film.title}
            director={film.director}
            // {
            //   key: film.episode_id,
            //   title: film.title,
            //   director: film.director,
            // }
          />
        ))
      }
    </div>
  );
};

export default FilmsPage;
