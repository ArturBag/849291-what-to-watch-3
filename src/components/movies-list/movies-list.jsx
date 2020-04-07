import React from "react";
import PropTypes from "prop-types";
import CardComponent from "../card/card.jsx";
import withCard from "../../hocs/with-card/with-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const Card = withActiveItem(withCard(CardComponent));

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
        moviesList={moviesList}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />)
  );

};

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
