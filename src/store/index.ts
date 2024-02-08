import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./films/filmsSlice";


const store = configureStore({
  reducer: {
    films: filmsSlice,
  }
})


export default store
