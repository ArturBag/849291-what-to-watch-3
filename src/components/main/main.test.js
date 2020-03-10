import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    runTime: {hours: 1, minutes: 22},
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
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
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    reviews: [
      {
        name: `Kate Muir`,
        reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        date: `December 24, 2016`,
        score: 2.9
      },
      {
        name: `Bill Goodykoontz`,
        reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        date: `November 18, 2015`,
        score: 8.2
      },
      {
        name: `Amanda Greever`,
        reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
        date: `November 18, 2015`,
        score: 8.4
      },
      {
        name: `Matthew Lickona`,
        reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
        date: `December 20, 2016`,
        score: 6.2
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.6
      },
      {
        name: `Paula Fleri-Soler`,
        reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        date: `December 20, 2016`,
        score: 6.0
      },
    ]
  }
];

const MovieHeader = {
  TITLE: filmsList[0].title,
  GENRE: filmsList[0].genre,
  ISSUED_DATE: filmsList[0].issuedDate
};

it(`Render Main`, () => {

  const tree = renderer
    .create(<Main
      title={MovieHeader.TITLE}
      genre={MovieHeader.GENRE}
      issuedDate={MovieHeader.ISSUED_DATE}
      moviesList={filmsList}
      onMovieCardTitleClick={() => { }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});

