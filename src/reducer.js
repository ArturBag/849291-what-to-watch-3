import {extend} from "./utils.js";
import filmsList from "mocks/films.js";


const initialState = {
  activeComponent: `Main`,
  activeMovieDetailsIndex: 0,
  activeGenre: ActionType.filter.ALL_GENRES,
  moviesList: filmsList,
};

const ActionType = {
  filter: {

    ALL_GENRES: `All genres`,
    COMEDIES: `Comedies`,
    CRIME: `Crime`,
    DOCUMENTARY: `Documentary`,
    DRAMAS: `Dramas`,
    HORROR: `Horror`,
    KIDS_AND_FAMILY: `Kids & Family`,
    ROMANCE: `Romance`,
    SCI_FI: `Sci-Fi`,
    THRILLERS: `Thrillers`
  },
  ON_MOVIE_CARD_TITLE_CLICK: `ON_MOVIE_CARD_TITLE_CLICK`,
  ON_GENRE_TYPE_CLICK: `ON_GENRE_TYPE_CLICK`
};


const getFilteredFilmsList = (genre) => {
  return filmsList.filter((movie) => movie.genre === genre);
};


const ActionCreator = {

  applyFilter: {
    all: () => ({
      type: ActionType.filter.ALL_GENRES,
      payload: filmsList
    }),
    comedies: () => ({
      type: ActionType.filter.COMEDIES,
      payload: getFilteredFilmsList(ActionType.filter.COMEDIES)
    }),
    crime: () => ({
      type: ActionType.filter.CRIME,
      payload: getFilteredFilmsList(ActionType.filter.CRIME)
    }),
    documentary: () => ({
      type: ActionType.filter.DOCUMENTARY,
      payload: getFilteredFilmsList(ActionType.filter.DOCUMENTARY)
    }),
    dramas: () => ({
      type: ActionType.filter.DRAMAS,
      payload: getFilteredFilmsList(ActionType.filter.DRAMAS)
    }),
    horror: () => ({
      type: ActionType.filter.HORROR,
      payload: getFilteredFilmsList(ActionType.filter.HORROR)
    }),
    kidsAndFamily: () => ({
      type: ActionType.filter.KIDS_AND_FAMILY,
      payload: getFilteredFilmsList(ActionType.filter.KIDS_AND_FAMILY)
    }),
    romance: () => ({
      type: ActionType.filter.ROMANCE,
      payload: getFilteredFilmsList(ActionType.filter.ROMANCE)
    }),
    sciFi: () => ({
      type: ActionType.filter.SCI_FI,
      payload: getFilteredFilmsList(ActionType.filter.SCI_FI)
    }),
    trillers: () => ({
      type: ActionType.filter.THRILLERS,
      payload: getFilteredFilmsList(ActionType.filter.THRILLERS)
    }),

  },
  onMovieCardTitleClick: (evt, title) => {
    evt.preventDefault();

    const chosedTitle = title;
    const indexOfChoosedMovie = filmsList.findIndex((it) => it.title === chosedTitle);

    return {
      type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
      activeComponent: `MovieDetails`,
      activeMovieDetailsIndex: indexOfChoosedMovie
    };
  },
  onGenreTypeClick: (genre) => ({
    type: ActionType.ON_GENRE_TYPE_CLICK,
    activeGenre: genre
  })

};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.filter.ALL_GENRES:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.COMEDIES:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.CRIME:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.DOCUMENTARY:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.DRAMAS:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.HORROR:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.KIDS_AND_FAMILY:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.ROMANCE:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.SCI_FI:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.filter.THRILLERS:
      return extend(state, {
        activeGenre: action.type,
        moviesList: action.payload
      });

    case ActionType.ON_MOVIE_CARD_TITLE_CLICK:
      return extend(state, {
        activeComponent: action.activeComponent,
        activeMovieDetailsIndex: action.activeMovieDetailsIndex
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
