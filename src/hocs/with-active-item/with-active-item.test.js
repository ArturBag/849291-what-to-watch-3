import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "./with-active-item.jsx";

const MockComponent = (props) => {

  const {getActiveItem, activeItem} = props;

  return (
    <div>
      {getActiveItem}
      {activeItem}
    </div>
  );
};

MockComponent.propTypes = {
  getActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`withActiveItem is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      getActiveItem={()=>{}}
      activeItem={null}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
