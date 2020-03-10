import React from "react";
import PropTypes from "prop-types";

const Reviews = (props) => {
  const {movieDetailsData} = props;

  const {reviews} = movieDetailsData;

  const coulmnReviewsCount = Math.floor(reviews.length / 2);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.slice(0, coulmnReviewsCount).map((it, index) => {

            return (
              <div className="review" key={it.name + index}>
                <blockquote className="review__quote">
                  <p className="review__text">
                    {it.reviewText}
                  </p>
                  <footer className="review__details">
                    <cite className="review__author">{it.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">
                      {it.date}
                    </time>
                  </footer>
                </blockquote>
                <div className="review__rating">{it.score}</div>
              </div>
            );
          })}
        </div>
        <div className="movie-card__reviews-col">
          {reviews.slice(coulmnReviewsCount).map((it, index) => {

            return (
              <div className="review" key={it.name + index}>
                <blockquote className="review__quote">
                  <p className="review__text">
                    {it.reviewText}
                  </p>
                  <footer className="review__details">
                    <cite className="review__author">{it.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">
                      {it.date}
                    </time>
                  </footer>
                </blockquote>
                <div className="review__rating">{it.score}</div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Reviews;


Reviews.propTypes = {
  movieDetailsData: PropTypes.shape({
    reviews: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      reviewText: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })).isRequired
  }).isRequired,
};
