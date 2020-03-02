import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";


it(`Render Card`, () => {

  const tree = renderer
    .create(<Card
      title={`Home Alone`}
      preview={`img/test.jpg`}
      videoSrc={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
      id={0}
      onMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
