import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import filmsList from "../../mocks/films.js";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeComponent: `Main`,
      activeMovieDetailsIndex: 0,
    };

  }

  _renderApp() {

    const movieCardTitleHandler = (evt, title) => {
      evt.preventDefault();

      const chosedTitle = title;
      const indexOfChoosedMovie = filmsList.findIndex((it) => it.title === chosedTitle);

      this.setState({
        activeComponent: `MovieDetails`,
        activeMovieDetailsIndex: indexOfChoosedMovie
      });
    };

    const {title, genre, issuedDate, moviesList} = this.props;
    const {activeComponent} = this.state;
    const movieDetailsData = moviesList[this.state.activeMovieDetailsIndex];


    if (activeComponent === `Main`) {
      return (
        <Main
          title={title}
          genre={genre}
          issuedDate={issuedDate}
          moviesList={moviesList}
          onMovieCardTitleClick={movieCardTitleHandler}
        />
      );
    } else if (activeComponent === `MovieDetails`) {
      return (
        <MovieDetails
          movieDetailsData={movieDetailsData}
          onMovieCardTitleClick={movieCardTitleHandler}
        />
      );
    }

    return `Что-то пошло не так`;

  }

  render() {

    const {moviesList} = this.props;
    const movieDetailsData = moviesList[this.state.activeMovieDetailsIndex];

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MovieDetails
              movieDetailsData={movieDetailsData}
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
  moviesList: PropTypes.array.isRequired
};

export default App;
