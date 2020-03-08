import React from "react";
import PropTypes from "prop-types";

const Details = (props) => {
  const {movieDetailsData, displayTab} = props;

  const {genre, issuedDate, director, starring, runTime} = movieDetailsData;
  const {hours, minutes} = runTime;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link"
              onClick={() => {
                displayTab(`Overview`);
              }}
            >
              Overview
            </a>
          </li>
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link"
              onClick={() => {
                displayTab(`Details`);
              }}
            >
              Details
            </a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link"
              onClick={() => {
                displayTab(`Reviews`);
              }}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((it) => (`${it}${`\n\r`}`))}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{hours}{`h`} {minutes}{`m`}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{issuedDate}</span>
          </p>
        </div>
      </div>
    </React.Fragment>

  );
};

export default Details;

Details.propTypes = {
  movieDetailsData: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    issuedDate: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.shape({
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired
    }).isRequired,
  }).isRequired,
  displayTab: PropTypes.func.isRequired,
};
