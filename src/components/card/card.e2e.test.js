import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});


it(`Should card title be pressed`, () => {


  const onMovieCardTitleClick = jest.fn();

  const mainComponent = shallow(
      <Card
        name={`Friends`}
        onMovieCardTitleClick={onMovieCardTitleClick}
      />
  );

  const cardTitleLink = mainComponent.find(`.small-movie-card__link`);

  cardTitleLink.props().onClick();

  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
