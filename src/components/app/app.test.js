import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {App} from "./app.jsx";

const mockStore = configureStore([]);

describe(`Render App`, () => {
  it(`Render Main`, () => {
    const store = mockStore({
      activeComponent: `Main`,
      activeMovieDetailsIndex: 0,
      moviesQtyToShow: 8
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              activeComponent={`Main`}
              activeMovieDetailsIndex={0}
              // moviesList={filmsList}
              onMovieCardTitleClick={()=>{}}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieDetails`, () => {

    const store = mockStore({
      activeComponent: `MovieDetails`,
      activeMovieDetailsIndex: 0,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              activeComponent={`MovieDetails`}
              activeMovieDetailsIndex={1}
              // moviesList={filmsList}
              onMovieCardTitleClick={()=>{}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
