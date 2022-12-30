import React, { createContext, useReducer } from "react";
import MovieList from "./MovieList/MovieList";
import movieAppReducer, { movieState } from "./reducer";

export const MoviesStateContext = createContext();
export const DispatchContext = createContext();
import "./movie.module.css";
export default function MovieApp() {
  const [state, dispatch] = useReducer(movieAppReducer, movieState);

  return (
    <MoviesStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div>
          <MovieList />
        </div>
      </DispatchContext.Provider>
    </MoviesStateContext.Provider>
  );
}
