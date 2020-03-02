import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const MoviesList = (props) => {
  const {moviesList, onMovieCardTitleClick} = props;

  return (
    moviesList.map((it, i) =>
      <Card
        key={it + i}
        title={it.title}
        preview={it.preview}
        videoSrc={it.videoSrc}
        id={i}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />)
  );

};

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
