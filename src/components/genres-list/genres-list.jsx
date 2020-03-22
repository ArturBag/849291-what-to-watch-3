import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const GenresList = (props) => {

  const {moviesList, activeGenre, onMovieCardTitleClick, onGenreTypeClick} = props;

  const genresListData = moviesList.map((movie, index) => {

    const activeGenreClass = movie.genre === activeGenre ? `catalog__genres-item--active` : ``;

    return (
      <li key={movie.title + index} className={`catalog__genres-item ${activeGenreClass}`}>
        <a href="#" className="catalog__genres-link"
          onClick={()=>{
            onGenreTypeClick(movie.genre);
          }}
        >
          {movie.genre}
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
        <button className="catalog__button" type="button">
          Show more
        </button>
      </div>
    </React.Fragment>
  );

};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onGenreTypeClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTypeClick(genre) {
    dispatch(ActionCreator.onGenreTypeClick(genre));
  }
});

export {GenresList};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
