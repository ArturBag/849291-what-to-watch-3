import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const name = `Home Alone`;

it(`Render Card`, () => {

  const tree = renderer
    .create(<Card
      name={name}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();

});
