import {extend} from "./utils.js";
import filmsList from "./mocks/films.js";

const uniqueGenresList = [];
const uniqueMovies = [];
filmsList.forEach((it) => {

  if (uniqueGenresList.includes(it.genre)) {
    return false;
  } else {
    uniqueGenresList.push(it.genre);

    uniqueMovies.push(it);

  }

  return 0;

});


const initialState = {
  activeComponent: `Main`,
  activeMovieDetailsIndex: 0,
  activeGenre: `All genres`,
  moviesList: filmsList,
};

const ActionType = {
  ON_MOVIE_CARD_TITLE_CLICK: `ON_MOVIE_CARD_TITLE_CLICK`,
  ON_GENRE_TYPE_CLICK: `ON_GENRE_TYPE_CLICK`
};


const getFilteredFilmsList = (genre) => {
  let movieGenre = ``;
  switch (genre) {
    case `Comedies`:
      movieGenre = `Comedy`;
      break;

    case `Dramas`:
      movieGenre = `Drama`;
      break;

    case `Thrillers`:
      movieGenre = `Thriller`;
      break;

    default: movieGenre = genre;

  }

  return filmsList.filter((movie) => movie.genre === movieGenre);
};


const ActionCreator = {

  onMovieCardTitleClick: (evt, title, moviesList) => {
    evt.preventDefault();

    const chosedTitle = title;
    const indexOfChoosedMovie = moviesList.findIndex((it) => it.title === chosedTitle);

    return {
      type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
      activeComponent: `MovieDetails`,
      activeMovieDetailsIndex: indexOfChoosedMovie,
    };
  },
  onGenreTypeClick: (genre) => {


    const filteredMovies = genre === `All genres` ? uniqueMovies : getFilteredFilmsList(genre);


    return {
      type: ActionType.ON_GENRE_TYPE_CLICK,
      activeGenre: genre,
      moviesList: filteredMovies
    };
  }
};


const reducer = (state = initialState, action) => {


  switch (action.type) {
    case ActionType.ON_MOVIE_CARD_TITLE_CLICK:
      return extend(state, {
        activeComponent: action.activeComponent,
        activeMovieDetailsIndex: action.activeMovieDetailsIndex
      });

    case ActionType.ON_GENRE_TYPE_CLICK:
      return extend(state, {
        activeGenre: action.activeGenre,
        moviesList: action.moviesList
      });


  }

  return state;
};

export {reducer, ActionType, ActionCreator};
