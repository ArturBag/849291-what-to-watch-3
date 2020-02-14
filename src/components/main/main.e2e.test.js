import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie card title be pressed`, () => {

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

  const onMovieCardTitleClick = jest.fn();

  const mainComponent = shallow(
      <Main
        title={MovieHeader.TITLE}
        genre={MovieHeader.GENRE}
        issuedDate={MovieHeader.ISSUED_DATE}
        moviesList={moviesList}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
  );

  const cardTitleLinks = mainComponent.find(`small-movie-card__link`);
  cardTitleLinks.forEach((titleLink)=>{
    titleLink.props().onClick();
  });


  expect(onMovieCardTitleClick.mock.calls.length).toBe(moviesList.length);
});
