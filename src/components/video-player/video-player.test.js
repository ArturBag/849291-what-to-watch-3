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
  videoSrc: `https://download.blender.org/durian/trailer.mp4`
};


it(`Render VideoPlayer`, () => {

  const {videoSrc} = mock;

  const tree = renderer
    .create(<VideoPlayer
      previewMode={true}
      isPlaying={true}
      videoSrc={videoSrc}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();

});
