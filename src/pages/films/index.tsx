import { useEffect, useState } from "react";
import { FilmType, getSWFilms } from "../../api/SWAPI";

const FilmsPage = () => {
  const [filmsList, setFilmsList] = useState<FilmType[]>([])

  const getFilmsList = async () => {
    const data = await getSWFilms()
    setFilmsList(data)
  }

  useEffect( () => {
    getFilmsList()
  }, [])

  return (
    <div>
      <h1>FILMS PAGE</h1>
      {
        filmsList.map(film => (
          <p key={film.episode_id}>{film.title}</p>
        ))
      }
    </div>
  );
};

export default FilmsPage;
