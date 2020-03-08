import React from "react";
import PropTypes from "prop-types";
import {getRatingLevel} from "../../utils.js";

const Overview = (props) => {
  const {movieDetailsData, displayTab} = props;

  const {ratingCount, description,
    rating, director, starring} = movieDetailsData;

  const starringList = starring.slice(0, 3).toString();

  const ratingLevel = getRatingLevel(rating);


  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link"
              onClick={()=>{
                displayTab(`Overview`);
              }}
            >
              Overview
            </a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link"
              onClick={()=>{
                displayTab(`Details`);
              }}
            >
              Details
            </a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link"
              onClick={()=>{
                displayTab(`Reviews`);
              }}
            >
              Reviews
            </a>
          </li>
        </ul>
      </nav>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>
          {description}
        </p>
        <p>
          {description}
        </p>
        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>
        <p className="movie-card__starring">
          <strong>
            Starring: {starringList} {` and other`}
          </strong>
        </p>
      </div>
    </React.Fragment>

  );
};

export default Overview;

Overview.propTypes = {
  movieDetailsData: PropTypes.shape({
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
  }).isRequired,
  displayTab: PropTypes.func.isRequired
};
