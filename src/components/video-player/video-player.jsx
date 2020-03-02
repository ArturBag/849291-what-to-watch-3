import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
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
    this._videoRef.current = null;

  }

  render() {
    const {previewMode} = this.props;

    return (

      <div className="player">
        {previewMode === true ?
          <Fragment>
            <video src="#" className="player__video" poster="img/player-poster.jpg" ref={this._videoRef} />
          </Fragment>
          :
          <Fragment>
            <video src="#" className="player__video" poster="img/player-poster.jpg" ref={this._videoRef} />
            <button type="button" className="player__exit">
              Exit
            </button>
            <div className="player__controls">
              <div className="player__controls-row">
                <div className="player__time">
                  <progress className="player__progress" value={30} max={100} />
                  <div className="player__toggler" style={{left: `30%`}}>
                    Toggler
                  </div>
                </div>
                <div className="player__time-value">1:30:29</div>
              </div>
              <div className="player__controls-row">
                <button type="button" className="player__play">
                  <svg viewBox="0 0 14 21" width={14} height={21}>
                    <use xlinkHref="#pause" />
                  </svg>
                  <span>Pause</span>
                </button>
                <div className="player__name">Transpotting</div>
                <button type="button" className="player__full-screen">
                  <svg viewBox="0 0 27 27" width={27} height={27}>
                    <use xlinkHref="#full-screen" />
                  </svg>
                  <span>Full screen</span>
                </button>
              </div>
            </div>
          </Fragment>
        }
      </div>
    );
  }

  componentDidUpdate() {

    const video = this._videoRef.current;
    video.play();

  }

}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoSrc: PropTypes.string.isRequired,
  previewMode: PropTypes.bool.isRequired,
};
