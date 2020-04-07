import {reducer, ActionType} from "./reducer.js";


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 8
  });
});

it(`Reducer should increment current activeMovieDetailsIndex by a given value
and switch activeComponent to MovieDetails`, () => {
  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
    activeComponent: `MovieDetails`,
    activeMovieDetailsIndex: 1,
  })).toEqual({
    activeComponent: `MovieDetails`,
    activeMovieDetailsIndex: 1,
    moviesQtyToShow: 8
  });

  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_MOVIE_CARD_TITLE_CLICK,
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 8
  });
});

it(`Reducer should add movies quantity to already displayed movies by clicking on show more button
and adding added movies quantity to  moviesQtyToShow state `, () => {
  expect(reducer({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 8
  }, {
    type: ActionType.ON_SHOW_MORE_BUTTON_CLICK,
    moviesQtyToShow: 16
  })).toEqual({
    activeComponent: `Main`,
    activeMovieDetailsIndex: 0,
    moviesQtyToShow: 16
  });

});

