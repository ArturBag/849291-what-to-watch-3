import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import {ShowMore} from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {genresListItems} from "../../const.js";

const MOVIES_LIMIT_TO_DISPLAY = 8;

const GenresList = (props) => {

  const {onMovieCardTitleClick, onShowMoreButtonClick,
    getActiveItem} = props;
  let {moviesQtyToShow, moviesList, activeItem} = props;

  if (activeItem === null) {
    activeItem = `All genres`;
  }

  const uniqueGenresList = [];
  const uniqueMovies = [];
  moviesList.forEach((it) => {

    if (uniqueGenresList.includes(it.genre)) {
      return false;
    } else {
      uniqueGenresList.push(it.genre);

      uniqueMovies.push(it);

    }

    return 0;

  });

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

    return moviesList.filter((movie) => movie.genre === movieGenre);
  };


  const filteredMovies = activeItem === `All genres` ? uniqueMovies : getFilteredFilmsList(activeItem);


  let moviesDataLenght = filteredMovies.length;
  let isShowMoreComponentDisplayed = true;

  if (moviesDataLenght < MOVIES_LIMIT_TO_DISPLAY) {

    moviesQtyToShow = moviesDataLenght;
    isShowMoreComponentDisplayed = false;

  } else if (moviesQtyToShow >= moviesDataLenght) {

    moviesQtyToShow = moviesDataLenght;
    isShowMoreComponentDisplayed = false;
  }


  moviesList = filteredMovies.slice(0, moviesQtyToShow);

  const genresListData = genresListItems.map((genre, index) => {


    const activeGenreClass = genre === activeItem ? `catalog__genres-item--active` : ``;

    return (
      <li key={genre + index} className={`catalog__genres-item ${activeGenreClass}`}>
        <a href="#" className="catalog__genres-link"
          onClick={() => {
            activeItem = getActiveItem(genre, genresListItems);
          }}
        >
          {genre}
        </a>
      </li>
    );
  });


  return (
    <React.Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genresListData}
      </ul>
      <div className="catalog__movies-list">
        {<MoviesList
          moviesList={moviesList}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />}
      </div>
      <div className="catalog__more">
        {isShowMoreComponentDisplayed ?
          <ShowMore
            onShowMoreButtonClick={onShowMoreButtonClick}
          />
          : ``
        }
      </div>
    </React.Fragment>
  );

};

GenresList.propTypes = {
  activeItem: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  moviesQtyToShow: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  getActiveItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesQtyToShow: state.moviesQtyToShow,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.onShowMoreButtonClick());
  },
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
