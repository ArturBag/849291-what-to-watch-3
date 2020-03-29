import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import {ShowMore} from "../show-more/show-more.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {genresListItems} from "../../const.js";

const MOVIES_LIMIT_TO_DISPLAY = 8;

const GenresList = (props) => {

  const {activeGenre, onMovieCardTitleClick, onGenreTypeClick, onShowMoreButtonClick} = props;
  let {moviesList, moviesQtyToShow} = props;

  let moviesDataLenght = moviesList.length;
  let isShowMoreComponentDisplayed = true;

  if (moviesDataLenght < MOVIES_LIMIT_TO_DISPLAY) {

    moviesQtyToShow = moviesDataLenght;
    isShowMoreComponentDisplayed = false;

  } else if (moviesQtyToShow >= moviesDataLenght) {

    moviesQtyToShow = moviesDataLenght;
    isShowMoreComponentDisplayed = false;
  }


  moviesList = moviesList.slice(0, moviesQtyToShow);


  const genresListData = genresListItems.map((genre, index) => {


    const activeGenreClass = genre === activeGenre ? `catalog__genres-item--active` : ``;

    return (
      <li key={genre + index} className={`catalog__genres-item ${activeGenreClass}`}>
        <a href="#" className="catalog__genres-link"
          onClick={() => {
            onGenreTypeClick(genre);
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
  activeGenre: PropTypes.string.isRequired,
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onGenreTypeClick: PropTypes.func.isRequired,
  moviesQtyToShow: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  moviesQtyToShow: state.moviesQtyToShow,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTypeClick(genre) {
    dispatch(ActionCreator.onGenreTypeClick(genre));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.onShowMoreButtonClick());
  },
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
