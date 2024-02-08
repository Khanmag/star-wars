// import React from "react";

type FilmCardProptype = {
  title: string,
  director: string,
}

// const FilmCard:React.FC<FilmCardProptype> = (props) => {
// const FilmCard = (props:FilmCardProptype) => {
// const FilmCard = (props: { title: string, director: string }) => {
const FilmCard = ({title, director}:FilmCardProptype) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{director}</p>
    </div>
  );
};

export default FilmCard;
