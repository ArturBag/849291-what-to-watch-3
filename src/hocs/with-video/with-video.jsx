import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying,
        isMuted: true
      };

    }

    componentDidMount() {
      const {videoSrc} = this.props;
      const video = this._videoRef.current;

      video.src = videoSrc;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.muted = true;

    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.src = ``;
      video.muted = ``;

    }


    render() {
      const {previewMode} = this.props;

      return (
        <Component
          previewMode={previewMode}
        >
          <video src="#" className="player__video" poster="img/player-poster.jpg"
            ref={this._videoRef}
          />
        </Component>
      );
    }

    componentDidUpdate() {

      const video = this._videoRef.current;
      video.play();

    }

  }

  WithVideo.propTypes = {
    previewMode: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    videoSrc: PropTypes.string.isRequired,
  };

  return WithVideo;
};


export default withVideo;
