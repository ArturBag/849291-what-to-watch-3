import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const filmsList = [
  {
    title: `Breaking Bad`,
    genre: `Thriller`,
    issuedDate: 2000,
    preview: `../../markup/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Pirates`,
    genre: `Drama`,
    issuedDate: 1999,
    preview: `../../markup/img/bohemian-rhapsody.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Misfits`,
    genre: `Drama`,
    issuedDate: 1998,
    preview: `../../markup/img/macbeth.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Terminal`,
    genre: `Horror`,
    issuedDate: 1992,
    preview: `../../markup/img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Star Wars`,
    genre: `Documentary`,
    issuedDate: 2002,
    preview: `../../markup/img/we-need-to-talk-about-kevin.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Forsage`,
    genre: `Crime`,
    issuedDate: 2001,
    preview: `../../markup/img/what-we-do-in-the-shadows.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `Goal`,
    genre: `Comedy`,
    issuedDate: 2011,
    preview: `../../markup/img/orlando.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    title: `New Yorker`,
    genre: `History`,
    issuedDate: 2010,
    preview: `../../markup/img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
  ultrices ut elit.`,
    rating: 2.2,
    director: `Angel Calderon`,
    starring: [`Linda Horne, Angel Calderon`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  }
];

it(`Should render movies list`, () => {

  const tree = renderer
    .create(<MoviesList
      moviesList={filmsList}
      onMovieCardTitleClick={() => { }}
    />);

  expect(tree).toMatchSnapshot();


});
