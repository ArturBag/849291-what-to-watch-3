import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";

const movieDetailsData = {
  title: `Lorem ipsum dolor sit amet`,
  genre: `Comedy`,
  issuedDate: 2020,
  ratingCount: 100,
  preview: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
  rating: 2.2,
  director: `Angel Calderon`,
  starring: [`Linda Horne, Angel Calderon`],
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Should render movie details component`, () => {

  const tree = renderer
    .create(<MovieDetails
      movieDetailsData={movieDetailsData}
    />);

  expect(tree).toMatchSnapshot();


});
