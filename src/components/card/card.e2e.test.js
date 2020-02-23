import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});


it(`Should card title be pressed`, () => {


  const onMovieCardTitleClick = jest.fn();
  const onMoiveCardMouseOver = jest.fn();

  const mainComponent = shallow(
      <Card
        title={`Friends`}
        preview={`img/test.jpg`}
        onMovieCardTitleClick={onMovieCardTitleClick}
        onMoiveCardMouseOver={onMoiveCardMouseOver}
      />
  );

  const cardTitleLink = mainComponent.find(`.small-movie-card__link`);
  const movieCard = mainComponent.find(`.catalog__movies-card`);

  cardTitleLink.props().onClick();
  movieCard.props().onMouseOver();


  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
  expect(onMovieCardTitleClick.mock.calls.length).toBe(1);
});
