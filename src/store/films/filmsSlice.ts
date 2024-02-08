import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmType } from "../../api/SWAPI";



type initialStateType = {
  filmsList: FilmType[],
}

const initialState: initialStateType = {
  filmsList: []
}

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilmsList(state, action : PayloadAction<FilmType[]>) {
      state.filmsList = action.payload
    }
  }
})

export const { setFilmsList } = filmsSlice.actions

export default filmsSlice.reducer
