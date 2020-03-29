import React from "react";
import renderer from "react-test-renderer";
import {ShowMore} from "./show-more.jsx";

it(`Render ShowMore component`, () => {

  const tree = renderer
    .create(
        <ShowMore
          onShowMoreButtonClick={()=>{}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
