export const getSWFilms = async () => {
  const res = await fetch("https://swapi.dev/api/films");
  if (res.status === 200) {
    const data: DataType<FilmType> = await res.json();
    console.log(data);
    return data;
  } else throw new Error("some error");
};

export const getSWPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/plnets");
  if (res.status === 200) {
    const data: DataType<PlanetType> = await res.json();
    console.log(data);
    return data;
  } else throw new Error("some error");
};

export const getSWCharacters = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  if (res.status === 200) {
    const data: DataType<CharacterType> = await res.json();
    console.log(data);
    return data;
  } else throw new Error("some error");
};


export const getSWChar = async (url:string) => {
  const res = await fetch(url);
  if (res.status === 200) {
    const data:CharacterType = await res.json();
    console.log(data);
    return data;
  } else throw new Error("some error");
};

type DataType<T> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
};

export type FilmType = {
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

export type PlanetType = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterType = {
  name: string,
  height: number,
  mass: number,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: "male" | "female",
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string,
};
