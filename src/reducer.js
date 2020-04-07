import {extend} from "./utils.js";
import filmsList from "./mocks/films.js";

const MOVIES_LIMIT_TO_DISPLAY = 8;
let moviesQty = 8;

const initialState = {
  activeComponent: `Main`,
  activeMovieDetailsIndex: 0,
  moviesQtyToShow: MOVIES_LIMIT_TO_DISPLAY,
};

const ActionType = {
  ON_MOVIE_CARD_TITLE_CLICK: `ON_MOVIE_CARD_TITLE_CLICK`,
  ON_SHOW_MORE_BUTTON_CLICK: `ON_SHOW_MORE_BUTTON_CLICK`
};

const ActionCreator = {

  onMovieCardTitleClick: (evt, title) => {
    evt.preventDefault();


    const chosedTitle = title;
    const indexOfChoosedMovie = filmsList.findIndex((it) => it.title === chosedTitle);

    return {
      type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
      activeComponent: `MovieDetails`,
      activeMovieDetailsIndex: indexOfChoosedMovie,
    };
  },

  onShowMoreButtonClick: ()=> {

    moviesQty += MOVIES_LIMIT_TO_DISPLAY;

    return {
      type: ActionType.ON_SHOW_MORE_BUTTON_CLICK,
      moviesQtyToShow: moviesQty
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

    case ActionType.ON_SHOW_MORE_BUTTON_CLICK:
      return extend(state, {
        moviesQtyToShow: action.moviesQtyToShow
      });


  }

  return state;
};

export {reducer, ActionType, ActionCreator};
