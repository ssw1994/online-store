import { UPDATE_MOVIES } from "./movies.action";

export const movieState = {
  moviesList: [],
};

export default function movieAppReducer(state, action) {
  switch (action.type) {
    case UPDATE_MOVIES:
      return {
        ...state,
        moviesList: action.payload,
      };
  }
}
