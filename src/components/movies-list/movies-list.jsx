import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const MoviesList = (props) => {
  const {moviesList, onMovieCardTitleClick, onMoiveCardMouseOver} = props;

  return (
    moviesList.map((it, i) =>
      <Card
        key={it + i}
        title={it.title}
        preview={it.preview}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMoiveCardMouseOver={onMoiveCardMouseOver}
      />)
  );

};

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onMoiveCardMouseOver: PropTypes.func.isRequired,
};

export default MoviesList;
