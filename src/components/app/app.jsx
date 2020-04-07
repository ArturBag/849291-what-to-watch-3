import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import filmsList from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import MovieDetailsComponent from "../movie-details/movie-details.jsx";
import withMovieDetails from "../../hocs/with-movie-details/with-movie-details.jsx";

class App extends PureComponent {

  _renderApp() {

    const {activeComponent, activeMovieDetailsIndex, onMovieCardTitleClick} = this.props;

    const MovieDetails = withMovieDetails(MovieDetailsComponent);

    const MovieHeader = {
      TITLE: filmsList[0].title,
      GENRE: filmsList[0].genre,
      ISSUED_DATE: filmsList[0].issuedDate
    };

    const moviesList = filmsList;

    const movieDetailsData = moviesList[activeMovieDetailsIndex];


    if (activeComponent === `Main`) {
      return (
        <Main
          title={MovieHeader.TITLE}
          genre={MovieHeader.GENRE}
          issuedDate={MovieHeader.ISSUED_DATE}
          moviesList={moviesList}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
      );
    } else if (activeComponent === `MovieDetails`) {
      return (
        <MovieDetails
          movieDetailsData={movieDetailsData}
          moviesList={moviesList}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
      );
    }

    return `Что-то пошло не так`;

  }

  render() {
    const {activeMovieDetailsIndex, onMovieCardTitleClick} = this.props;

    const MovieDetails = withMovieDetails(MovieDetailsComponent);
    const moviesList = filmsList;
    const movieDetailsData = moviesList[activeMovieDetailsIndex];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MovieDetails
              movieDetailsData={movieDetailsData}
              moviesList={moviesList}
              onMovieCardTitleClick={onMovieCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeMovieDetailsIndex: PropTypes.number.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  activeComponent: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeComponent: state.activeComponent,
  activeMovieDetailsIndex: state.activeMovieDetailsIndex,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardTitleClick(evt, title, moviesList) {
    dispatch(ActionCreator.onMovieCardTitleClick(evt, title, moviesList));
  }

});


export default connect(mapStateToProps, mapDispatchToProps)(App);

export {App};
