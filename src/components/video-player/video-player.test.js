import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mock = {
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
  videoSrc: `https://download.blender.org/durian/trailer.mp4`,
  runTime: {hours: 1, minutes: 39},
  reviews: [
    {
      name: `Kate Muir`,
      reviewText: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
      Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `December 24, 2016`,
      score: 8.9
    },
    {
      name: `Bill Goodykoontz`,
      reviewText: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.
      "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      date: `November 18, 2015`,
      score: 8.0
    },
    {
      name: `Amanda Greever`,
      reviewText: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      date: `November 18, 2015`,
      score: 8.0
    },
    {
      name: `Matthew Lickona`,
      reviewText: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      date: `December 20, 2016`,
      score: 7.2
    },
    {
      name: `Paula Fleri-Soler`,
      reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      date: `December 20, 2016`,
      score: 7.6
    },
    {
      name: `Paula Fleri-Soler`,
      reviewText: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      date: `December 20, 2016`,
      score: 7.0
    },
  ]
};


it(`Render VideoPlayer`, () => {

  const {videoSrc} = mock;

  const tree = renderer
    .create(<VideoPlayer
      previewMode={true}
      isPlaying={true}
      videoSrc={videoSrc}
    >
      <video />
    </VideoPlayer>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();

});
