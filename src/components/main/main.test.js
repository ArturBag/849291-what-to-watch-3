import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";


const MovieHeader = {
  TITLE: `Breaking Bad`,
  GENRE: `Triller`,
  ISSUED_DATE: 2008
};

const moviesList = [
  `	Ghost`, `Bohemian Rhapsody`, `Home Alone`, `Home Alone 2`,
  `Pretty Woman`, `Dances with Wolves`, `Total Recall`, `	Back to the Future Part III`,
  `Die Hard 2`, `Presumed Innocent`, `Teenage Mutant Ninja Turtles`, `Kindergarten Cop`,
  `Downtown`, `Internal Affairs`, `Chainsaw`, `Ski Patrol`,
  `Loose Cannons`, `Madhouse`, `House Party`, `Crazy People`
];

it(`Render Main`, () => {

  const movieCardTitleHandler = () => {};

  const tree = renderer
    .create(<Main
      title={MovieHeader.TITLE}
      genre={MovieHeader.GENRE}
      issuedDate={MovieHeader.ISSUED_DATE}
      moviesList={moviesList}
      onMovieCardTitleClick={movieCardTitleHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
