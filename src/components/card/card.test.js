import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";


it(`Render Card`, () => {

  const tree = renderer
    .create(<Card
      name={`Home Alone`}
      onMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
