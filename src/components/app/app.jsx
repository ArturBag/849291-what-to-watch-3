import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {

  const movieCardTitleHandler = () => {};
  const movieCardMouseOverHandler = () => {};

  const {title, genre, issuedDate, moviesList} = props;

  return (
    <Main
      title={title}
      genre={genre}
      issuedDate={issuedDate}
      moviesList={moviesList}
      onMovieCardTitleClick={movieCardTitleHandler}
      onMoiveCardMouseOver = {movieCardMouseOverHandler}
    />
  );
};

App.propTypes = {
  title: PropTypes.PropTypes.string.isRequired,
  genre: PropTypes.PropTypes.string.isRequired,
  issuedDate: PropTypes.number.isRequired,
  moviesList: PropTypes.array.isRequired
};

export default App;
