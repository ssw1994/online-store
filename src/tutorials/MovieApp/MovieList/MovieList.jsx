import React, { useContext, useEffect, useState } from "react";
import { DispatchContext, MoviesStateContext } from "..";
import MovieCard from "../MovieCard/MovieCard";
import { UPDATE_MOVIES } from "../movies.action";
export default function MovieList() {
  const dispatch = useContext(DispatchContext);
  const moviesState = useContext(MoviesStateContext);
  const { moviesList } = moviesState;

  const fetchMovies = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    console.log(data);
    return data.results;
  };

  useEffect(() => {
    //fetch
    async function getMovies() {
      const fetchedMovies = await fetchMovies();
      //action dispatch
      dispatch({ type: UPDATE_MOVIES, payload: fetchedMovies });
    }

    getMovies();
  }, []);
  return (
    <div>
      {moviesList.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}
