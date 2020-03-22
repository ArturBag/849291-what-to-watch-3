import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import filmsList from "../../mocks/films.js";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends PureComponent {

  _renderApp() {

    const {activeComponent, activeMovieDetailsIndex,
      moviesList, onMovieCardTitleClick} = this.props;

    const MovieHeader = {
      TITLE: filmsList[0].title,
      GENRE: filmsList[0].genre,
      ISSUED_DATE: filmsList[0].issuedDate
    };

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
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
      );
    }

    return `Что-то пошло не так`;

  }

  render() {
    const {moviesList, activeMovieDetailsIndex, onMovieCardTitleClick} = this.props;

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
              onMovieCardTitleClick={onMovieCardTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.PropTypes.string.isRequired,
  genre: PropTypes.PropTypes.string.isRequired,
  issuedDate: PropTypes.number.isRequired,
  moviesList: PropTypes.array.isRequired,
  activeMovieDetailsIndex: PropTypes.number.isRequired,
  onMovieCardTitleClick: PropTypes.func.isRequired,
  activeComponent: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeComponent: state.activeComponent,
  activeMovieDetailsIndex: state.activeMovieDetailsIndex,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardTitleClick(evt, title) {
    dispatch(ActionCreator.onMovieCardTitleClick(evt, title));
  }

});


export default connect(mapStateToProps, mapDispatchToProps)(App);

export {App};
