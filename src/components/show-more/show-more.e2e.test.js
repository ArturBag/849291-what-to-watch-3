import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ShowMore} from "./show-more.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should show more button be pressed`, () => {


  const onShowMoreButtonClick = jest.fn();

  const mainComponent = shallow(
      <ShowMore
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  mainComponent.find(`.catalog__button`).simulate(`click`);

  expect(onShowMoreButtonClick).toHaveBeenCalled();

});
