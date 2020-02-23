import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";


it(`Render Card`, () => {

  const tree = renderer
    .create(<Card
      title={`Home Alone`}
      preview={`img/test.jpg`}
      onMovieCardTitleClick={() => {}}
      onMoiveCardMouseOver={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
