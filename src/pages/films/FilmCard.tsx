// import React from "react";

import PlanetList from "../../component/PlanetList";

type FilmCardProptype = {
  title: string,
  director: string,
  planets: string[],
}

// const FilmCard:React.FC<FilmCardProptype> = (props) => {
// const FilmCard = (props:FilmCardProptype) => {
// const FilmCard = (props: { title: string, director: string }) => {
const FilmCard = ({title, director, planets}:FilmCardProptype) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{director}</p>
      <PlanetList 
        planets={planets}
      />
    </div>
  );
};

export default FilmCard;
