import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {

  const {title, preview, onMovieCardTitleClick, onMoiveCardMouseOver} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onMoiveCardMouseOver(title, preview);
      }}
    >
      <div className="small-movie-card__image">
        <img
          src={preview}
          alt={title}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onMovieCardTitleClick}
          className="small-movie-card__link" href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>

  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  onMoiveCardMouseOver: PropTypes.func.isRequired,
};

export default Card;
