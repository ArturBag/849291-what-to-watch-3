import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video.jsx";
// import Card from "../../components/card/card.jsx";

configure({adapter: new Adapter()});

const Player = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

const videoSrc = `https://upload.wikimedia.org/wikipedia/
  commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/
  Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;


Player.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

it(`Checks that HOC's callback turn on video (play)`, () => {


  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(
      <PlayerWrapped
        previewMode={false}
        isPlaying={false}
        videoSrc={videoSrc}
      />
  );


  window.HTMLMediaElement.prototype.play = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `play`);

  wrapper.instance().componentDidMount();

  expect(_videoRef.play).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn off video`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    previewMode={false}
    isPlaying={false}
    videoSrc={videoSrc}
  />);

  window.HTMLMediaElement.prototype.abort = () => {};

  const {_videoRef} = wrapper.instance();

  jest.spyOn(_videoRef.current, `abort`);

  wrapper.instance().componentDidMount();

  expect(_videoRef.current.abort).toHaveBeenCalledTimes(1);
});
