import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Card events`, () => {
  it(`Should card title be pressed`, () => {


    const onMovieCardTitleClick = jest.fn();

    const mainComponent = shallow(
        <Card
          title={`Friends`}
          preview={`img/test.jpg`}
          videoSrc={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          id={0}
          onMovieCardTitleClick={onMovieCardTitleClick}
        />
    );

    const cardTitleLink = mainComponent.find(`.small-movie-card__link`);

    cardTitleLink.props().onClick();

    expect(onMovieCardTitleClick.mock.calls.length).toBe(1);

  });

  it(`On mouse enter`, () => {


    const mainComponent = shallow(
        <Card
          title={`Friends`}
          preview={`img/test.jpg`}
          videoSrc={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          id={0}
          onMovieCardTitleClick={() => { }}
        />
    );

    mainComponent.simulate(`mouseenter`);
    expect(mainComponent.state(`isCardMouseOvered`)).toBe(true);
    expect(mainComponent.state(`activePlayerId`) >= 0).toBe(true);
  });

  it(`On mouse leave`, () => {


    const mainComponent = shallow(
        <Card
          title={`Friends`}
          preview={`img/test.jpg`}
          videoSrc={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
          id={0}
          onMovieCardTitleClick={() => { }}
        />
    );

    mainComponent.simulate(`mouseleave`);
    expect(mainComponent.state(`isCardMouseOvered`)).toBe(false);

    expect(mainComponent.state(`activePlayerId`) === -1).toBe(true);
  });
});
