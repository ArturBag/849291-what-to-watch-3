import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const filmsList = [
  {
    title: `Breaking Bad`,
    genre: `Thriller`,
    issuedDate: 2000,
    preview: `../../markup/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Pirates`,
    genre: `Drama`,
    issuedDate: 1999,
    preview: `../../markup/img/bohemian-rhapsody.jpg`
  },
  {
    title: `Misfits`,
    genre: `Drama`,
    issuedDate: 1998,
    preview: `../../markup/img/macbeth.jpg`
  },
  {
    title: `Terminal`,
    genre: `Horror`,
    issuedDate: 1992,
    preview: `../../markup/img/aviator.jpg`
  },
  {
    title: `Star Wars`,
    genre: `Documentary`,
    issuedDate: 2002,
    preview: `../../markup/img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `Forsage`,
    genre: `Crime`,
    issuedDate: 2001,
    preview: `../../markup/img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Goal`,
    genre: `Comedy`,
    issuedDate: 2011,
    preview: `../../markup/img/orlando.jpg`
  },
  {
    title: `New Yorker`,
    genre: `History`,
    issuedDate: 2010,
    preview: `../../markup/img/war-of-the-worlds.jpg`
  }
];

it(`Should render movies list`, () => {

  const tree = renderer
    .create(<MoviesList
      moviesList={filmsList}
      onMovieCardTitleClick={() => { }}
      onMoiveCardMouseOver={() => { }}

    />);

  expect(tree).toMatchSnapshot();


});
