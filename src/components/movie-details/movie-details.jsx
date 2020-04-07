import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import CardComponent from "../card/card.jsx";
import withCard from "../../hocs/with-card/with-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const Card = withActiveItem(withCard(CardComponent));

class MovieDetails extends PureComponent {

  render() {
    const {movieDetailsData, moviesList, onMovieCardTitleClick, setActiveTab, activeTab} = this.props;

    const {title, genre, issuedDate, poster, background} = movieDetailsData;


    const filteredByGenere = moviesList.filter((it) => it.genre === genre);
    const similarMoviesList = filteredByGenere.map((it, i) => {

      return (
        <Card
          key={it.title + i}
          title={it.title}
          preview={it.preview}
          videoSrc={it.videoSrc}
          id={i}
          moviesList={moviesList}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />);
    });


    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={background}
                alt="{title}"
              />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>
              <div className="user-block">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </div>
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{issuedDate}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">
                    Add review
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={poster}
                  alt={title}
                  width={218}
                  height={327}
                />
              </div>
              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className={`movie-nav__item ${activeTab === `Overview` ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={() => {
                          setActiveTab(`Overview`);
                        }}
                      >
                        Overview
                      </a>
                    </li>
                    <li className={`movie-nav__item ${activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={() => {
                          setActiveTab(`Details`);
                        }}
                      >
                        Details
                      </a>
                    </li>
                    <li className={`movie-nav__item ${activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={() => {
                          setActiveTab(`Reviews`);
                        }}
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                {<Tabs
                  movieDetailsData={movieDetailsData}
                  activeTabInfo={activeTab}
                />}
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <div className="catalog__movies-list">
              {similarMoviesList}
            </div>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );

  }

}

MovieDetails.propTypes = {
  movieDetailsData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    issuedDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  }).isRequired,
  moviesList: PropTypes.array.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};


export default MovieDetails;
