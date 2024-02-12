import {
  useCallback,
  useEffect,
  //  useState 
} from "react";
import {
  // FilmType, 
  getSWFilms
} from "../../api/SWAPI";
import FilmCard from "./FilmCard";
// import { useDispatch, useSelector } from "react-redux";
import { 
  // RootState, 
  useAppDispatch, 
  useAppSelector 
} from "../../store";
import { setFilmsList } from "../../store/films/filmsSlice";

const FilmsPage = () => {
  // const [filmsList, setFilmsList] = useState<FilmType[]>([])
  // const filmsList = useSelector((store: RootState) => store.films.filmsList)
  const filmsList = useAppSelector(store => store.films.filmsList)
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()

  // const getFilmsList = async () => {
  //   const data = await getSWFilms()
  //   //  setFilmsList(data)
  //   dispatch(setFilmsList(data))
  // }

  const getFilmsList = useCallback(async () => {
    const data = await getSWFilms()
    dispatch(setFilmsList(data))
  }, [dispatch])

  useEffect(() => {
    getFilmsList()
  }, [getFilmsList])
  // typeof func - object

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
            planets={film.planets}
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
