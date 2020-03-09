import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

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
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  runTime: {hours: 2, minutes: 44},
  reviews: [
    {
      name: `Kate Muir`,
      reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
        Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      score: 8.5
    },
    {
      name: `Bill Goodykoontz`,
      reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
        "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      date: `November 18, 2015`,
      score: 4.0
    },
    {
      name: `Amanda Greever`,
      reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      date: `November 18, 2015`,
      score: 3.0
    },
    {
      name: `Matthew Lickona`,
      reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      date: `December 20, 2016`,
      score: 5.2
    },
    {
      name: `Paula Fleri-Soler`,
      reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      date: `December 20, 2016`,
      score: 7.4
    },
    {
      name: `Paula Fleri-Soler`,
      reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      date: `December 20, 2016`,
      score: 7.4
    },
  ]
};


it(`Should render tabs component`, () => {

  const tree = renderer
    .create(<Tabs
      movieDetailsData={movieDetailsData}
      activeTabState={`Overview`}
    />);

  expect(tree).toMatchSnapshot();


});
