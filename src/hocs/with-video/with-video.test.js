import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideo from "./with-video.jsx";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const videoSrc = `https://upload.wikimedia.org/wikipedia/
  commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/
  Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;

  const tree = renderer.create((
    <MockComponentWrapped
      previewMode={false}
      isPlaying={false}
      videoSrc={videoSrc}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

