import { extend } from "./utils.js";
import filmsList from "./mocks/films.js";


const initialState = {
  activeComponent: `Main`,
  activeMovieDetailsIndex: 0,
  activeGenre: `All genres`,
  moviesList: filmsList,
};

const ActionType = {
  // FILTER: {

  //   ALL_GENRES: `All genres`,
  //   COMEDIES: `Comedies`,
  //   CRIME: `Crime`,
  //   DOCUMENTARY: `Documentary`,
  //   DRAMAS: `Dramas`,
  //   HORROR: `Horror`,
  //   KIDS_AND_FAMILY: `Kids & Family`,
  //   ROMANCE: `Romance`,
  //   SCI_FI: `Sci-Fi`,
  //   THRILLERS: `Thrillers`
  // },
  ON_MOVIE_CARD_TITLE_CLICK: `ON_MOVIE_CARD_TITLE_CLICK`,
  ON_GENRE_TYPE_CLICK: `ON_GENRE_TYPE_CLICK`
};

// const ActionType = {

//   FILTER_ALL_GENRES: `All genres`,
//   FILTER_COMEDIES: `Comedies`,
//   FILTER_CRIME: `Crime`,
//   FILTER_DOCUMENTARY: `Documentary`,
//   FILTER_DRAMAS: `Dramas`,
//   FILTER_HORROR: `Horror`,
//   FILTER_KIDS_AND_FAMILY: `Kids & Family`,
//   FILTER_ROMANCE: `Romance`,
//   FILTER_SCI_FI: `Sci-Fi`,
//   FILTER_THRILLERS: `Thrillers`,
//   ON_MOVIE_CARD_TITLE_CLICK: `ON_MOVIE_CARD_TITLE_CLICK`,
//   ON_GENRE_TYPE_CLICK: `ON_GENRE_TYPE_CLICK`
// };

// console.log(Object.values(ActionType))

const getFilteredFilmsList = (genre) => {
  return filmsList.filter((movie) => movie.genre === genre);
};


const ActionCreator = {

  // applyFilter: {
  //   all: () => ({
  //     type: ActionType.filter.ALL_GENRES,
  //     activeGenre: ActionType.filter.ALL_GENRES,
  //     payload: filmsList
  //   }),
  //   comedies: () => ({
  //     type: ActionType.filter.COMEDIES,
  //     activeGenre: ActionType.filter.COMEDIES,
  //     payload: getFilteredFilmsList(ActionType.filter.COMEDIES)
  //   }),
  //   crime: () => ({
  //     type: ActionType.filter.CRIME,
  //     activeGenre: ActionType.filter.CRIME,
  //     payload: getFilteredFilmsList(ActionType.filter.CRIME)
  //   }),
  //   documentary: () => ({
  //     type: ActionType.filter.DOCUMENTARY,
  //     activeGenre: ActionType.filter.DOCUMENTARY,
  //     payload: getFilteredFilmsList(ActionType.filter.DOCUMENTARY)
  //   }),
  //   dramas: () => ({
  //     type: ActionType.filter.DRAMAS,
  //     activeGenre: ActionType.filter.DRAMAS,
  //     payload: getFilteredFilmsList(ActionType.filter.DRAMAS)
  //   }),
  //   horror: () => ({
  //     type: ActionType.filter.HORROR,
  //     activeGenre: ActionType.filter.HORROR,
  //     payload: getFilteredFilmsList(ActionType.filter.HORROR)
  //   }),
  //   kidsAndFamily: () => ({
  //     type: ActionType.filter.KIDS_AND_FAMILY,
  //     activeGenre: ActionType.filter.KIDS_AND_FAMILY,
  //     payload: getFilteredFilmsList(ActionType.filter.KIDS_AND_FAMILY)
  //   }),
  //   romance: () => ({
  //     type: ActionType.filter.ROMANCE,
  //     activeGenre: ActionType.filter.ROMANCE,
  //     payload: getFilteredFilmsList(ActionType.filter.ROMANCE)
  //   }),
  //   sciFi: () => ({
  //     type: ActionType.filter.SCI_FI,
  //     activeGenre: ActionType.filter.SCI_FI,
  //     payload: getFilteredFilmsList(ActionType.filter.SCI_FI)
  //   }),
  //   trillers: () => ({
  //     type: ActionType.filter.THRILLERS,
  //     activeGenre: ActionType.filter.THRILLERS,
  //     payload: getFilteredFilmsList(ActionType.filter.THRILLERS)
  //   }),

  // },
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
  onGenreTypeClick: (genre) => {


    // const getActionType = () => {
    //   const index = Object.values(ActionType.FILTER).findIndex((it) => {
    //     return it === genre;
    //   });

    //   return Object.keys(ActionType.FILTER)[index];
    // };

    // console.log(getFilteredFilmsList(genre))

    return {
      type: ActionType.ON_GENRE_TYPE_CLICK,
      activeGenre: genre,
      moviesList: getFilteredFilmsList(genre)
    };
  }
};


const reducer = (state = initialState, action) => {

  // console.log(action)

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

export { reducer, ActionType, ActionCreator };
