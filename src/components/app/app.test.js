import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmsList = [
  {
    title: `Breaking Bad`,
    genre: `Thriller`,
    issuedDate: 2000,
    ratingCount: 59,
    preview: `../../markup/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 8.9,
    director: `Bernard Harding`,
    starring: [`Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Pirates`,
    genre: `Drama`,
    issuedDate: 1999,
    ratingCount: 11,
    preview: `../../markup/img/bohemian-rhapsody.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 4.5,
    director: `Will Brooks`,
    starring: [`Kymani Burgess, Jaylin Cherry, Jacey Oliver, Conrad Wolf and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Misfits`,
    genre: `Drama`,
    issuedDate: 1998,
    ratingCount: 24,
    preview: `../../markup/img/macbeth.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.7,
    director: `Titus Sparks`,
    starring: [`Giovanny Mccullough, Leah Delacruz, Davon Terrell, Romeo Carr and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Terminal`,
    genre: `Horror`,
    issuedDate: 1992,
    ratingCount: 555,
    preview: `../../markup/img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 6.9,
    director: `Jeramiah Goldeng`,
    starring: [`Nasir Castaneda, Ariel Brooks, Lucia Compton and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Star Wars`,
    genre: `Documentary`,
    issuedDate: 2002,
    ratingCount: 242,
    preview: `../../markup/img/we-need-to-talk-about-kevin.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 8.3,
    director: `Roy Boyle`,
    starring: [`Molly Reyes, Edward Norton, Mareli Moore, Makenna Henderson and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Forsage`,
    genre: `Crime`,
    issuedDate: 2001,
    ratingCount: 243,
    preview: `../../markup/img/what-we-do-in-the-shadows.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 2.5,
    director: `Claire Hodge`,
    starring: [`Amaris Hess, Tobias Osborne, Samir Fitzpatrick, Baron Bolton and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `Goal`,
    genre: `Comedy`,
    issuedDate: 2011,
    ratingCount: 222,
    preview: `../../markup/img/orlando.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 3.4,
    director: `Brynlee Haney`,
    starring: [`Piper Mccann, Seamus Ashley, Jude Law, Lila Waters and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  },
  {
    title: `New Yorker`,
    genre: `History`,
    issuedDate: 2010,
    ratingCount: 442,
    preview: `../../markup/img/war-of-the-worlds.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nunc blandit bibendum elit. Donec libero mauris, luctus sit amet rhoncus ac,
    ultrices ut elit.`,
    rating: 2.9,
    director: `Melany Short`,
    starring: [`Franklin Sosa, Abby Beasley, Jovan Lang and other`],
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    background: `img/bg-the-grand-budapest-hotel.jpg`
  }
];

const MovieHeader = {
  TITLE: filmsList[0].title,
  GENRE: filmsList[0].genre,
  ISSUED_DATE: filmsList[0].issuedDate
};

it(`Render App`, () => {

  const tree = renderer
    .create(<App
      title={MovieHeader.TITLE}
      genre={MovieHeader.GENRE}
      issuedDate={MovieHeader.ISSUED_DATE}
      moviesList={filmsList}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
